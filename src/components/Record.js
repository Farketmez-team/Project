import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
//import patientService from '../services/PatientService';
import pause from '../assets/pause.svg'
import play from '../assets/play.svg'
import record from '../assets/record.svg'
import microphone from '../assets/microphone.svg'
import upload from '../assets/upload.svg'


const Record = (props) => {

    const styles = useStyles();
    return (
        <div className={styles.container}>
            
            <div className={styles.formBody}>
            
                <img src={microphone} className={styles.micbutton} alt='microphone' onClick={() => props.startRecording()}>
                </img>
                <img src={record} className={styles.recordbutton} alt='record' onClick={() => {props.stopRecording(); props.setRecorded(true)}}>
                </img>
                <img src={pause} className={styles.pausebutton} alt='pause' onClick={() => props.pauseRecording()}>
                </img>
                <img src={upload} className={styles.pausebutton} alt='upload' onClick={() => props.onUpload()}>
                </img></div>
                <div className={styles.player}>{(props.recorded)?<video src={props.media} controls height={50} width={400} type="audio/wav"/>:
                <video src={props.media2} controls loop height={50} width={400} type="audio/wav"/>}
                
            </div>

            {/* <div className={styles.formBody2}>
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
            </div> */}

        </div>

    )
}
const useStyles = createUseStyles({
    container: {
        width: '100%',
        height: '100%', 
        position: 'relative',
        display: 'flex',
        marginBottom: '15px',
    },
    formBody: {
        width: '100%',
        marginTop: '5px',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'row',
        height: "20px",
    },
    playbutton: {
        margin:'5px',
        height:'25px',
        "&:hover": {
            cursor: 'pointer',

        },
        display: 'flex',
        flexDirection: 'column',
    },
    player:{
        position:'relative',
        display:'flex',
        marginLeft:"10px",
    },
    pausebutton: {
        margin:'6px',
        height:'25px',
        "&:hover": {
            cursor: 'pointer',

        },

    },
    recordbutton: {
        margin:'5px',
        height:'25px',
        "&:hover": {
            cursor: 'pointer',

        },

    },
    micbutton: {
        height:'25px',
        margin:'5px',
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