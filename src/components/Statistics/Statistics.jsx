import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };