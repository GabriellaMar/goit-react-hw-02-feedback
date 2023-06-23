import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {

    return (
        <>
            <h2 className={styles.notification}>{message}</h2>
        </>
    )

}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };