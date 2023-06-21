import styles from './Statistics.module.css';
export const Statistics = ({ good, neutral, bad, total, positivePercentage })=>{
    return (
        <>
        <p className={styles.StatisticsItem}>Good: {good}</p>
        <p className={styles.StatisticsItem}>Neutral: {neutral}</p>
        <p className={styles.StatisticsItem}>Bad: {bad}</p>
        <p className={styles.TotalItem}>Total: {total}</p>
        <p className={styles.PercentageItem}> Рercentage: {positivePercentage} %</p>
        </>
    )
};