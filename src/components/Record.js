import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
//import patientService from '../services/PatientService';
import pause from '../assets/pause.svg'
import play from '../assets/play.svg'
import record from '../assets/record.svg'
import microphone from '../assets/microphone.svg'


const Record = () => {

    const styles = useStyles();

    const navigate = useNavigate();

    const handleRemove = (name) => {
        /*PatientService.removePatient({name}).then((data)=>{
            alert(data.resultMessage)
            PatientService.getPatients().then((res)=>{
            setpatientList(res)
            })
        })*/
    }

    const handleSave = async () => {
       /* let added = await patientService.addPatient({name,
            age,
            gender})
        if (added) {
            console.log(added)
            navigate("/treatment")
        }
        else alert('Couldnt add patient')*/
    }

    const handleCancel = async () => {
       // navigate("/treatment")
    }

    return (
        <div className={styles.container}>
            
            <div className={styles.formBody}>

                <img src={microphone} className={styles.micbutton} alt='microphone' onClick={() => console.log("mic")}>
                </img>
                <img src={record} className={styles.recordbutton} alt='record' onClick={() => console.log("record")}>
                </img>
                <img src={pause} className={styles.pausebutton} alt='pause' onClick={() => console.log("pause")}>
                </img>
                <img src={play} className={styles.playbutton} alt='play' onClick={() => console.log("play")}>
                </img>
                <div className={styles.recBody}>

                </div>
            </div>

            <div className={styles.formBody2}>
                <div className={styles.formGroup}>
                    <button className={styles.formBtn} onClick={() => { handleRemove() }}>
                        <label className={styles.formBtnLabel}>Remove</label>
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.formBtn2} onClick={() => { handleSave() }}> 
                        <label className={styles.formBtnLabel2}>Save</label>
                    </button>
                </div>
                <div className={styles.formGroup}>
                    <button className={styles.formBtn3} onClick={() => { handleCancel() }}>
                        <label className={styles.formBtnLabel3}>Cancel</label>
                    </button>
                </div>
            </div>

        </div>

    )
}
const useStyles = createUseStyles({
    container: {
        width: 2000,
        height: '100%', 
        position: 'relative',
        display: 'flex',
        marginBottom: '15px',
    },
    formBody: {
        width: '49%',
        marginTop: '1%',
        marginLeft: '1%',
        display: 'flex',
        flexDirection: 'column',
        height: "1.4%",
    },
    playbutton: {
        width: '2.4%',
        margin: '-1.9% 13.3%',
        "&:hover": {
            cursor: 'pointer',

        },
        display: 'flex',
        flexDirection: 'column',
    },
    pausebutton: {
        width: '2.7%',
        margin: '-0.7% 9.2%',
        "&:hover": {
            cursor: 'pointer',

        },

    },
    recordbutton: {
        width: '3%',
        margin: '-2.1%  5%',
        "&:hover": {
            cursor: 'pointer',

        },

    },
    micbutton: {
        width: '3%',
        margin: '-1% 1%',
        "&:hover": {
            cursor: 'pointer',

        },

    },
    recBody:
    {
        width: '74%',
        backgroundColor: '#8792A1',
        padding: '6px',
        margin: '-0.5% 17.3%',
        marginTop: '-0.1%',
        borderRadius: '5px',
        "&:hover": {
            cursor: 'pointer',

        },
    },
    
    formBody2: {
        
        backgroundColor:'#transparent',
        position: 'relative',
        display: 'flex',
        flexDirection: 'label',
        
    },
    formGroup: {
        display: 'block',
        width: '100%',
        marginBottom: '10px',
        padding: '5px'
    },
    formBtn: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        width: '130px',
        height: '40px', 
        padding: '8px 10px',
        backgroundColor: '#CE8181',
        borderRadius: '5px',
        borderWidth: '0px',
        boxShadow:'1px 1px rgba(0, 0, 0, 0.2)',
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
        width: '130px',
        height: '40px', 
        padding: '8px 10px',
        backgroundColor: '#95E39D',
        borderRadius: '5px',
        borderWidth: '0px',
        boxShadow:'1px 1px rgba(0, 0, 0, 0.2)',
        "&:hover": {
            cursor: 'pointer'
        },
        "&:active": {
            outline: 'solid',
            outlineColor: '#1D64C2',
            outlineWidth: '3px'
        }
    },
    formBtn3: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        width: '130px',
        height: '40px', 
        padding: '8px 10px',
        backgroundColor: '#8792A1',
        borderRadius: '5px',
        borderWidth: '0px',
        boxShadow:'1px 1px rgba(0, 0, 0, 0.2)',
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
        color: '#fff',
        fontSize: '12px',
        fontWeight:"700",
        "&:hover": {
            cursor: 'pointer'
        }
    },
    formBtnLabel2: {
        display: 'block',
        color: '#fff',
        fontSize: '12px',
        fontWeight:"700",
        "&:hover": {
            cursor: 'pointer'
        }
    },
    formBtnLabel3: {
        display: 'block',
        color: '#fff',
        fontSize: '12px',
        fontWeight:"700",
        "&:hover": {
            cursor: 'pointer'
        }
    },
    // formForgotBtn: {
    //     display: 'inline-block',
    //     textAlign: 'center',
    //     background: 'none',
    //     borderRadius: '5px',
    //     borderWidth: '0px',
    //     marginInline: '25%',
    //     "&:hover": {
    //         cursor: 'pointer'
    //     }
    // },
    // formChangeBtn: {
    //     display: 'inline-block',
    //     textAlign: 'center',
    //     background: 'none',
    //     borderRadius: '5px',
    //     borderWidth: '0px',
    //     marginInline: '5%',
    //     "&:hover": {
    //         cursor: 'pointer'
    //     }
    // },
    // formErrorLabel: {
    //     display: 'block',
    //     color: "#FF0000",
    //     fontSize: '12px',
    // },
    // formError: {
    //     display: 'block',
    //     width: '100%',
    //     marginBottom: "-5px",
    //     padding: '5px'
    // },



})

export default Record