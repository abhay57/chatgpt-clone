import './chatList.css'
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className='chatList'>
        <div className="title">DASHBOARD</div>
        <Link to="/dashboard">Create a new Chat</Link>
        <Link to="/">Explore Gem AI</Link>
        <Link to="/">Contact</Link>
        <hr/>


        <div className="title">RECENT CHATS</div>
        <div className="list">
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
            <Link to="/">New Chat</Link>
        </div>
        <hr />

        <div className="upgrade">
            <img src="/logo.png" alt="" />
            <div className="upgradeText">
                <span>Upgrade to Gem AI Pro</span>
                <span>Get unlimited access to all features</span>
            </div>
        </div>
    </div>
  )
}

export default ChatList