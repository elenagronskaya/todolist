import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import LogoItem from './logo';


export default function Navigation({items}) {
    // const classes = useStyles();
  
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar className={styles.toolbar}>
            
            <Box component="span" className={styles.box}>
            <LogoItem/>
              {items.map((item, index) => (
              <Typography   key={`${item.name}--${String(index)}`} variant="h6"  className={styles.title}>
                  <NavLink to={item.path} exact activeClassName={styles.active}>{item.name}</NavLink>
              </Typography>
              ))}
            </Box>
            
            <Box component="span">
              <Button color="inherit" className={styles.button}>Login</Button>
            </Box>
          
          </Toolbar>
        </AppBar>
      </div>
    );
  }