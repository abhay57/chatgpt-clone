import { Outlet, useNavigate } from 'react-router-dom'
import './dashboardLayout.css'
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react';

const DashboardLayout = () => {
    // returns a userId if page isLoaded and user is signed in
    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        // if user is not signed in
        if(isLoaded && !userId) {
            navigate("/sign-in");
        }
    }, [isLoaded, userId, navigate]);  // dependencies

    if(!isLoaded) return "Loading...";

    return (
        <div className='dashboardLayout'>
            <div className='menu'>Menu</div>
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardLayout