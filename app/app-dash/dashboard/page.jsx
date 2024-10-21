"use client"
import NavBar from '../ui/NavBar/NavBar';  
import SideBar from '../ui/SideBar/SideBar';  
import styles from '../dashboard/dashboard.module.css'; 

import { useState } from 'react';  

const DashBoard = () => {  
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);  

    const toggleSidebar = () => {  
        console.log('Sidebar toggled:', !isSidebarOpen);   
        setIsSidebarOpen((prev) => !true);  
    };  
    return (  
        //  <div className={styles.container}>  
        // //     <button onClick={toggleSidebar} className="md:hidden">click</button>  
        // //     <div className={`${styles.menu} bg-gray-800 text-white w-64 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:block hidden`}>  
        // //         <SideBar />  
        // //     </div>  
          <div className={styles.container}>  
                <div className={styles.menu}>
                    <SideBar/>
                </div>
             <div className={styles.content}>  
             
            </div>  
        </div>  
    );  
};  

export default DashBoard;