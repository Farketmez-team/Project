import React from 'react';
import { createUseStyles } from 'react-jss';
import AuthForm from '../../components/AuthForm';

const Auth = () => {
    const styles = useStyles();
    return (
      <div className={styles.container}><AuthForm></AuthForm></div>
        
    )
}

const useStyles = createUseStyles({
    container: {
        
        position:'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
})

export default AuthForm