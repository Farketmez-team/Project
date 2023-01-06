import React from 'react'
import { createUseStyles } from 'react-jss';
import { useState } from 'react';


const Details = () => {

    const [detail, setDetail] = useState("");

    const styles = useStyles();
    return (
        <div className={styles.container}>
            <div className={styles.formBody}>
            <textarea className={styles.editBody} type="text" id="editTextID" placeholder= "Detailed info about the treatment (A written note, this field is editable text)" value={detail} onChange={(e) => { setDetail(e.target.value) }}></textarea>

            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    container: {
        width: 550,
        display: 'flex',
        marginTop:'1%',
        marginLeft:'7%',
        position: 'relative'
    },
    formBody: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#7FADEB',
        margin: '5px',
        zIndex: 2,
        borderRadius: '5px',
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        height: "240px"
        
    },
    editBody: {
        backgroundColor: '#7FADEB',
        resize: 'none',
        overflow: 'auto',
        border: 'none',
        width: '95%',
        height: '85%',
        outline: 'none',
        boxShadow: 'none',
        borderWidth: '0px',
        padding: '5px',
        margin: '5px',
        transition: '0.4s',
        fontSize: "200%",
        fontWeight:"300",
        whiteSpace: 'initial',
        zIndex: 3,
        "&::-webkit-scrollbar": {
            width: '22px',
        },
        "&::-webkit-scrollbar-track": {
            background: 'none',
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: '#6A6A6A',
            backgroundClip: 'padding-box',
            border: '6px solid rgba(0, 0, 0, 0)',
            borderRadius: '20000px'
        }
      }
});

export default Details;