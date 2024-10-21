import styles from './card.module.css';  

const Card = ({ title, info }) => {  
    return (  
        <div className={styles.container}>  
            <div className={styles.title}>{title}</div>  
            <div className={styles.info}>{info}</div>  
        </div>  
    );  
};  


export default Card;