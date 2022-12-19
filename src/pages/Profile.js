import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { createUseStyles } from 'react-jss';
import userService from '../services/UserService';

const Profile = () => {

    const [user, setfirst] = useState(JSON.parse(localStorage.getItem('user')))
    const [name, setname] = useState(user.name)
    const [email, setemail] = useState(user.email)
    const styles = useStyles();

    const handleSubmit = async ({name,email})=>
    {   
        let isUpdated = await userService.update({name,email});
        if(!isUpdated)alert("Could not update user");
        else {
            let updatedUser = user;
            updatedUser.name = name;
            updatedUser.email = email;
            setfirst(updatedUser);
            localStorage.setItem('user', JSON.stringify(user));
            setname("")
            setemail("")
            alert("Update user successfully");
        }
    }

    return (
        <><Navbar></Navbar>
            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.header}>
                        <label className={styles.titleLabel}>Profile</label>
                    </div>
                    <div className={styles.cardBody}>
                    <div className={styles.formGroup2}>
                    <div className={styles.fakeProfilePic}><label className={styles.profileName}>{user.name[0]}</label></div>
                </div>
                    <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Name</label>
                    <input className={styles.formInput} type="text" value={name}  onChange={(e) => { setname(e.target.value) }}></input>
                </div>
                
                
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>E-mail</label>
                    <input className={styles.formInput} type="text" value={email}  onChange={(e) => { setemail(e.target.value) }}></input>
                </div>

                <div className={styles.seperator}></div>

                <div className={styles.formGroup}>
                    <button className={styles.formBtn} onClick={() => {handleSubmit({name,email})}}>
                        <label className={styles.formBtnLabel}>Save</label>
                    </button>
                </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const useStyles = createUseStyles({
    container: {
      width: '100vw',
      minWidth: '1000px',
      height: 'calc(100vh - 50px)',
      backgroundColor: '#363738',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      //justifyContent: 'center',
    },
    profileName:{
        color: '#FFFFFF',
        fontSize: '35px',
        fontWeight: 'light'
    },

    background: {
      display: 'flex',
      flexDirection: 'column',
      width: '80vw',
      minWidth: '800px',
      height: '600px',
      backgroundColor: "#8792A1",
      borderRadius: "10px",
      boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
      marginTop: '50px',
      alignItems:'center'
    },
    header :{
        width: '88%',
        height: '75px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
    },
    fakeProfilePic:{
        height: '100px',
        width: '100px',
        background:'none',
        backgroundColor: '#7FADEB',
        borderRadius: '50%',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    titleLabel: {
        marginRight: '10px',
        color: '#FFFFFF',
        fontSize: '22px',
        fontWeight: 'bold'
    },
    cardBody:{
        width: '350px',
        position: 'relative',
        minHeight:'450px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#D9E8FC',
        margin: '5px',
        zIndex: 2,
        borderRadius: '5px',
        alignItems:'center',
        justifyContent:'center'
    },
    formGroup: {
        display: 'block',
        width: '100%',
        marginBottom: '10px',
        padding: '5px'
    },
    formGroup2: {
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        marginBottom: '10px',
        padding: '5px'
    },
    formLabel: {
        display: 'block',
        color: '#000',
        fontSize: '12px',
        marginBottom: '5px',
        marginLeft:'10px'
    },
    formInput: {
        display: 'block',
        marginLeft:'10px',
        width: '85%',
        padding: '10px 10px',
        backgroundColor: '#8792A1',
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
        },
        "&::-webkit-input-placeholder":{
            color: '#BDBDBD'
        }
    },
    formBtn: {
        display: 'block',
        marginLeft:'10px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
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
});


export default Profile