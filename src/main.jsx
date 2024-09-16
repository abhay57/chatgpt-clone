import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import Home from "./routes/home/Home";
import Dashboard from "./routes/dashboard/Dashboard";
import ChatPage from "./routes/chatPage/ChatPage";
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout';
import SignIn from './routes/signInPage/SignInPage';
import SignUp from './routes/signUpPage/SignUpPage';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
    {
        element: <RootLayout/>, 
        children: [
            {path: "/sign-in/*", element: <SignIn/> },
            {path: "/sign-up/*", element: <SignUp/> },
            {path: "/", element: <Home/> },
            {
                element: <DashboardLayout/>, 
                children: [
                    {path: "/dashboard", element: <Dashboard/> },
                    {path: "/dashboard/chats/:id", element: <ChatPage/> }
                ]
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <RouterProvider router={router} />
        </ClerkProvider>
    </React.StrictMode>,
)

