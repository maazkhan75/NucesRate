import { MdReviews } from "react-icons/md";  
import { FaRegUser } from "react-icons/fa";  
import { MdPendingActions } from "react-icons/md";
import MenuLink from './MenuLink/MenuLink'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import styles from './SideBar.module.css'
const ItemsList = [  
    {  
        title: 'Profile',  
        path: 'Profile',  
        icon: <FaRegUser />  
    },  
    {  
        title: 'Reviews',  
        path: 'Reviews',  
        icon: <MdReviews />  
    } ,
    {
        title: 'Pending Reviews',  
        path: 'Pending',  
        icon: <MdPendingActions />      
    }
];  

const Sidebar = () => {  
    return (  
        <div className={styles.container}>  
            <div><ProfileInfo/></div>  
            <div>
            <ul>  
                {ItemsList.map(i => (  
                    <li key={i.title}><MenuLink item={i}/></li>  
                ))}  
            </ul>  
            </div>
        </div>  
    );  
}  

export default Sidebar;