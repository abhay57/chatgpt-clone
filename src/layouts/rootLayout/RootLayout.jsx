import { Outlet, Link } from 'react-router-dom'
import './rootLayout.css'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

const RootLayout = () => {
    return (
        <div className='rootLayout'>
            <header>
                <Link to="/" className='logo'>
                    <img src="/logo.png" alt="" />
                    <span>GEM AI</span>
                </Link>
                <div className="user">
                    <SignedOut>
                        <SignInButton
                        />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default RootLayout