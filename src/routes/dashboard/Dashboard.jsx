import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="placeholderCards">
            <div className="logo">
                <img src="/logo.png" alt="" />
                <h1>GEM AI</h1>
            </div>
            <div className="cards">
                <div className="card">
                    <img src="/chat.png" alt="" />
                    <span>Create a New Chat</span>
                </div>
                <div className="card">
                    <img src="/image.png" alt="" />
                    <span>Analyze Images</span>
                </div>
                <div className="card">
                    <img src="/code.png" alt="" />
                    <span>Help me with my Code</span>
                </div>
            </div>
        </div>

        <div className="formContainer">
            <form action="">
                <input type="text" placeholder="Ask me anything..."/>
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </div>
    </div>
  )
}

export default Dashboard