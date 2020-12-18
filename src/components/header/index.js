import Navigation from '../navigation';

import styles from './styles.module.css';


const navItems = [
    {name :'Main', path :'/', isRootLink: true},
    {name :'Todos', path :'/todos'},
];

export default function Header(props) {
    
    const tempActiveItem = navItems[0].name;
    return(
        
        <header className={styles.header}>
            
            <Navigation direction="horizontal" activeItemName={tempActiveItem} items={navItems}></Navigation>
        </header>
        
    
    )
}

