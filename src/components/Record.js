import React, { useState } from 'react'
import { createUseStyles } from 'react-jss';
import pause from '../assets/pause.svg'
import play from '../assets/play.svg'
import record from '../assets/record.svg'
import microphone from '../assets/microphone.svg'


const Record = () => {

    const styles = useStyles();

    return (
        <>

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
        </>

    )
}
const useStyles = createUseStyles({
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
    formBody: {
        marginTop: '2.7%',
        marginLeft: '1%',
        width: '91%',
        display: 'flex',
        flexDirection: 'column',
        height: "1.4%",

    },
    recBody:
    {
        width: '100%',
        backgroundColor: '#8792A1',
        padding: '6px',
        margin: '-0.5% 17.3%',
        marginTop: '-0.1%',
        borderRadius: '5px',
        "&:hover": {
            cursor: 'pointer',

        },
    },





})

export default Record