import { useEffect, useRef, useState } from 'react';
import './newPrompt.css'
import Upload from '../upload/Upload';
import { IKImage } from 'imagekitio-react';
import model from '../../lib/gemini';
import Markdown from 'react-markdown';

const NewPrompt = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {},
        aiData: {}
    })

    // chat object for gemini api
    const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Hello" }],
          },
          {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
          },
        ],
      });

    const endRef = useRef(null);

    // whenever any of the new components is added, it'll scroll to the bottom
    useEffect(() => {
        endRef.current.scrollIntoView({ behaviour: "smooth" });
    }, [question, answer, img.dbData]);

    const add = async(text) => {
        setQuestion(text);

        // calling the gemini model
        const result = await chat.sendMessageStream(
            Object.entries(img.aiData).length ? [img.aiData, text] : [text]
        );

        let accumulatedText = "";
        for await (const chunk of result.stream) {
            const chunkText = chunk.text();
            accumulatedText += chunkText;
            setAnswer(accumulatedText);
        }
        setImg({
            isLoading: false,
            error: "",
            dbData: {},
            aiData: {}
        });
    };

    const handleSubmit = async(e) => {
        // preventing page refresh
        e.preventDefault();

        const questionText = e.target.text.value;
        if(!questionText) return;
        add(questionText)
    }

    return (
        <div className="newPrompt">
            {/* ADD NEW CHAT */}

            {img.isLoading && (
                <div>Loading...</div>
            )}

            {/* if dbData and filePath exist */}
            {img.dbData?.filePath && (
                <IKImage
                    urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                    path={img.dbData?.filePath}
                    width="380"
                />
            )} 

            {/* if question is set */}
            {question &&  (<div className="message user">{question}</div>) }
            {answer &&  (<div className="message"><Markdown>{answer}</Markdown></div>) }

            <div className="endChat" ref={endRef}></div>

            <form className='newForm' onSubmit={handleSubmit}>
                <Upload setImg={setImg}/>
                <input id="file" type="file" multiple={false} hidden/>
                <input type="text" name="text" placeholder='Ask me anything...' />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default NewPrompt