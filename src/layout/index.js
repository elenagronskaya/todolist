import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function Layout({ children }) {
    return(
        <div className={styles.layout}>
            {children}
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
}