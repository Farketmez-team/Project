import React from 'react';
import { createUseStyles } from 'react-jss';
import AuthForm from '../components/AuthForm';

const Auth = () => {
    const styles = useStyles();
    
    return (
      <div className={styles.container}><AuthForm></AuthForm></div>
        
    )
}

const useStyles = createUseStyles({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#363738',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth:'400px'
    },
})

export default Auth