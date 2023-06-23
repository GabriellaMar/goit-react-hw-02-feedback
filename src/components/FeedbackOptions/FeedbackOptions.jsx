import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.feedbackBtnList}>
      {options.map((option) => (
        <li key={option}>
          <button
            type="button"
            className={styles.feedbackBtnItem}
            onClick={() => onLeaveFeedback(option)}
          >
            {/* {option} */}
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  )
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options:PropTypes.array.isRequired,
};