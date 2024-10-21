
import SideBar from '../../ui/SideBar/SideBar';  
import Reviews from '../../../../components/User_review/reviews'
import styles from '../dashboard.module.css';  

const Review = () => {  
    return (  
        <div className={styles.container}>  
            <div   
                className={styles.menu}  
            >  
                <SideBar />  
            </div>  

            <div className={styles.content}>  
                <Reviews Status='Pending'></Reviews>
            </div>  
        </div>  
    );  
};  

export default Review;