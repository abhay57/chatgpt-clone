import { useEffect, useRef, useState } from 'react';
import './newPrompt.css'
import Upload from '../upload/Upload';
import { IKImage } from 'imagekitio-react';

const NewPrompt = () => {

    const [img, setImg] = useState({
        isLoading: false,
        error: "",
        dbData: {}
    })

    const endRef = useRef(null);

    useEffect(() => {
        endRef.current.scrollIntoView({ behaviour: "smooth" });
    }, []);

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
                />
            )} 
            <div className="endChat" ref={endRef}></div>

            <form className='newForm'>
                <Upload setImg={setImg}/>
                <input id="file" type="file" multiple={false} hidden/>
                <input type="text" placeholder='Ask me anything...' />
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </div>
    )
}

export default NewPrompt