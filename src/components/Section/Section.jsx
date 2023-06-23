import styles from './Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <>
            <h2 className={styles.feadBackTittle}>{title}</h2>
            {children}
        </>
    );
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
  };