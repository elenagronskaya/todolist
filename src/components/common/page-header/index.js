import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function PageHeader({ children,title }){
    return(
        <div className={styles.pageHeader}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
};

PageHeader.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
    children: null,
};
