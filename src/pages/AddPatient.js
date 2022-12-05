import React from 'react';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import patientService from '../services/PatientService';
import Navbar from '../components/Navbar'

const AddPatient = () => {
    const styles = useStyles();
    const [name, setname] = useState("");
    const [gender, setgender] = useState("");
    const [age, setage] = useState(18);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        let added = await patientService.addPatient({name,
            age,
            gender})
        if (added) {
            console.log(added)
            navigate("/patients")
        }
        else alert('Couldnt add patient')
    }

    const handleCancel = async () => {
        navigate("/patients")
    }

    return (
        <><Navbar></Navbar>
            <div className={styles.container}>
                
                <form className={styles.formCard}>
            <div className={styles.formBody}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Name</label>
                    <input className={styles.formInput} type="text" value={name} onChange={(e) => { setname(e.target.value) }}></input>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Gender</label>
                    <input className={styles.formInput} type="text" value={gender} onChange={(e) => { setgender(e.target.value) }}></input>
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Age</label>
                    <input className={styles.formInput} type="number" value={age} onChange={(e) => { setage(e.target.value) }}></input>
                </div>



                <div className={styles.formGroup}>
                    <button className={styles.formBtn} onClick={() => { handleSubmit() }}>
                        <label className={styles.formBtnLabel}>Add</label>
                    </button>
                </div>
                <div className={styles.seperator}></div>
                <div className={styles.formGroup}>
                    <button className={styles.formBtn2} onClick={() => { handleCancel() }}>
                        <label className={styles.formBtnLabel2}>Cancel</label>
                    </button>
                </div>

            </div>

        </form>
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
        justifyContent: 'center',
      },
      
    formCard: {
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
    formBtn2: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        width: '93%',
        padding: '8px 10px',
        backgroundColor: '#CE8181',
        borderRadius: '5px',
        borderWidth: '0px',
        "&:active": {
            outline: 'solid',
            outlineColor: '#CE8181',
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
    formBtnLabel2: {
        display: 'block',
        color: '#fff',
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
export default AddPatient