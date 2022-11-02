import React from 'react';
import { createUseStyles } from 'react-jss';


const AuthForm = () => {
    const styles = useStyles();
    return (
        <form className={styles.container}>
            <div className={styles.formBody}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email</label>
                    <input className={styles.formInput} type="text"></input>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input className={styles.formInput} type="password"></input>
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.formBtn} onClick={() => { console.log('signin') }}>
                        <label className={styles.formBtnLabel}>Sign In</label>
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.formForgotBtn} onClick={() => { console.log('forgot') }}>
                        <label className={styles.formBtnLabel}>Forgot Password</label>
                    </button>
                </div>

                <div className={styles.seperator}></div>

                <div className={styles.formGroup}>
                    <button className={styles.formBtn} onClick={() => { console.log('signin') }}>
                        <label className={styles.formBtnLabel}>Log In</label>
                    </button>
                </div>
            </div>

        </form>
    )
}

const useStyles = createUseStyles({
    container: {
        width: 300,
        display: 'flex',
        position: 'relative',


    },
    formBody: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8792A1',
        padding: '30px',
        margin: '5px',
        zIndex: 2,
        borderRadius: '5px',
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    },
    formGroup: {
        display: 'block',
        width: '100%',
        marginBottom: '10px',
        padding: '5px'
    },
    formLabel: {
        display: 'block',
        color: '#EEE',
        fontSize: '12px',
        marginBottom: '5px',
    },
    formInput: {
        display: 'block',
        width: '85%',
        padding: '10px 10px',
        backgroundColor: '#D9E8FC',
        borderRadius: '5px',
        transition: '0.4s',
        outline: 'none',
        boxShadow: 'none',
        borderWidth: '0px',
        borderColor: '#1D64C2',
        "&:focus": {
            outline: 'solid',
            outlineColor: '#1D64C2',
            outlineWidth: '3px'
        }
    },
    formBtn: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        width: '93%',
        padding: '8px 10px',
        backgroundColor: '#1D64C2',
        borderRadius: '5px',
        borderWidth: '0px',
        "&:hover": {
            cursor: 'pointer'
        },
        "&:active": {
            outline: 'solid',
            outlineColor: '#1D64C2',
            outlineWidth: '3px'
        }
    },
    formBtnLabel: {
        display: 'block',
        color: '#EEE',
        fontSize: '12px',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    seperator: {
        borderTop: '1px solid white',
        marginBottom:'5px'
    }
    ,
    formForgotBtn: {
        display: 'inline-block',
        textAlign: 'center',
        background: 'none',
        borderRadius: '5px',
        borderWidth: '0px',
        marginInline: '25%',
        "&:hover": {
            cursor: 'pointer'
        }
    },
})

export default AuthForm