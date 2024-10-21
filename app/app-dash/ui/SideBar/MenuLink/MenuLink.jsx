"use client";  
import Link from 'next/link';  
import styles from './MenuLink.module.css';  
import { usePathname } from "next/navigation";  

const MenuLink = ({ item }) => {  
    const pathname = usePathname(); // Get current pathname  

    return (  
        <Link   
            href={item.path}   
            className={`${styles.container} ${pathname === item.path ? styles.active : ''}`}  
        >  
            <div className={styles.icon}>  
                {item.icon}  
            </div>  
            <div className={styles.name}>  
                {item.title}  
            </div>  
        </Link>  
    );  
}  

export default MenuLink;