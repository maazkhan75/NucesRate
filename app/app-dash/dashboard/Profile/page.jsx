"use client"
import React, { useState } from 'react';  
import SideBar from '../../ui/SideBar/SideBar';  
import Info from '../../ui/Info/Info';  
import styles from '../dashboard.module.css';  
const Profile = () => {  
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);  

    const toggleSidebar = () => {  
        setIsSidebarOpen(!isSidebarOpen);  
    };  

    return (  
        <div className={styles.container}>  
            {/* Button to toggle sidebar on small screens */}  
            <button   
                className="md:hidden p-2 bg-blue-500 text-white rounded"   
                onClick={toggleSidebar}  
            >  
                {isSidebarOpen ? 'Close Menu' : 'Open Menu'}  
            </button>  

            {/* Sidebar */}  
            <div   
                className={`${  
                    isSidebarOpen ? 'block' : 'hidden'  
                } md:block ${styles.menu}`}  
            >  
                <SideBar />  
            </div>  

            {/* Content */}  
            <div className={styles.content}>  
                <Info />  
            </div>  
        </div>  
    );  
};  

export default Profile;