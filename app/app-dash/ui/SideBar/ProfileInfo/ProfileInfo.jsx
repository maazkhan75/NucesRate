import styles from "./ProfileInfo.module.css";
import profilepic from "../22L-6567.jpg"
const ProfileInfo =()=>{

    return(
        <div className={styles.card}>
            <div className={styles.roundimageContainer}>
                <img className={styles.roundimage} src="https://img.freepik.com/premium-vector/man-with-glasses-beard-wearing-glasses_481747-88999.jpg?w=740"></img>
            </div>
            <centre>Hey</centre>
            <div>Muhammad Hassan Javed</div>
        </div>
    )
}
export default ProfileInfo;

