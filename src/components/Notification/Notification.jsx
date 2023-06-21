import styles from './Notification.module.css';
export const Notification= ({message})=>{
   
    return (
<>
<h2 className={styles.notification}>{message}</h2>
</>
    )
    
}