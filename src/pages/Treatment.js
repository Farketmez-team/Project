import React from 'react';
import Navbar from '../components/Navbar';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import searchIcon from '../assets/search.svg';
import {
  useParams,useLocation, useNavigate
} from "react-router-dom";

import Notes from "../components/Notes"

const Treatment = () => {

    const styles = useStyles();

    let { treatmentID } = useParams();
    console.log(treatmentID)

  return (
    <>
        <Navbar/>
        <div className={styles.container}>
            <div className={styles.background}>
                <Notes/>
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
      justifyContent: 'center',
    },
    background: {
      display: 'flex',
      flexDirection: 'column',
      width: '80vw',
      minWidth: '1000px',
      height: '600px',
      backgroundColor: "#8792A1",
      borderRadius: "10px",
      boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
      marginTop: '50px',
      alignItems:'center'
    }
});

export default Treatment;