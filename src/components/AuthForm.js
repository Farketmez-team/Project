import React from 'react';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const AuthForm = () => {

    const navigate = useNavigate();

    const [isLogin, setisLogin] = useState(true);
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    const [error, setError] = useState("");

    const styles = useStyles();

    const handleSubmit = async () => {
        if (isLogin) { 
            let isLoggedin = await AuthService.login({username:username, password:password})
            if(isLoggedin){
                console.log(isLoggedin)
                navigate("/patients")
            }
            setpassword("");
            setError("Wrong Email-Password Combination");
        }
        else{
            let isSignedup = AuthService.signup({name:name,username:username, password:password,email:email})
            if(isSignedup){
                setpassword("");
                setisLogin(true);
            }
        }
    }



    return (
        <form className={styles.container}>
            <div className={styles.formBody}>
            {(!isLogin)?<div className={styles.formGroup}>
                    <label className={styles.formLabel}>Name</label>
                    <input className={styles.formInput} type="text" value={name} onChange={(e) => { setname(e.target.value) }}></input>
                </div>:<></>}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Username</label>
                    <input className={styles.formInput} type="text" value={username} onChange={(e) => { setusername(e.target.value) }}></input>
                </div>
                {(!isLogin)?<div className={styles.formGroup}>
                    <label className={styles.formLabel}>E-Mail</label>
                    <input className={styles.formInput} type="text" value={email} onChange={(e) => { setemail(e.target.value) }}></input>
                </div>:<></>}
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Password</label>
                    <input className={styles.formInput} type="password" value={password} onChange={(e) => { setpassword(e.target.value) }}></input>
                </div>
                {(error.length > 0) ? <div className={styles.formError}>
                    <label className={styles.formErrorLabel}>{error}</label>
                </div> : <></>}
                {(!isLogin) ? <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Re-type Password</label>
                    <input className={styles.formInput} type="password" onChange={(e) => { if (password !== e.target.value) { setError("Passwords should match") } else { setError("") } }}></input>
                </div> : <></>}

                <div className={styles.formGroup}>
                    <button className={styles.formBtn} onClick={() => { handleSubmit() }}>
                        <label className={styles.formBtnLabel}>{(!isLogin) ? "Create account" : "Log in"}</label>
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.formForgotBtn} onClick={() => { console.log("Forgot password") }}>
                        <label className={styles.formBtnLabel}>Forgot Password</label>
                    </button>
                </div>

                <div className={styles.seperator}></div>

                <div className={styles.formGroup}>
                    <button className={styles.formChangeBtn} onClick={() => { setisLogin(!isLogin) }}>
                        <label className={styles.formBtnLabel}>{(isLogin) ? "Don't have an account?\nCreate one" : "Already have an account?\nLog in"}</label>
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
        marginBottom: '5px'
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
    formChangeBtn: {
        display: 'inline-block',
        textAlign: 'center',
        background: 'none',
        borderRadius: '5px',
        borderWidth: '0px',
        marginInline: '5%',
        "&:hover": {
            cursor: 'pointer'
        }
    },
    formErrorLabel: {
        display: 'block',
        color: "#FF0000",
        fontSize: '12px',
    },
    formError: {
        display: 'block',
        width: '100%',
        marginBottom: "-5px",
        padding: '5px'
    },
})

export default AuthForm