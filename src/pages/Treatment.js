import React from 'react';
import Navbar from '../components/Navbar';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import searchIcon from '../assets/search.svg';
import {
  useParams, useLocation, useNavigate
} from "react-router-dom";

import Notes from "../components/Notes"
import Recordings from '../components/Recordings';
import Record from '../components/Record';
import Details from "../components/Details";

const Treatment = () => {

  const styles = useStyles();

  let { treatmentID } = useParams();
  console.log(treatmentID)

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.background}>
        <Notes />
        <div className={styles.bottomLevelBody}>
          <div className={styles.bottombody}>
            <Recordings />
            <Details/>
          </div>
          </div>
        </div>
      </div>
    </>

  )
}

const useStyles = createUseStyles({
  bottomLevelBody:{
    width:'97%',
    height:'51.5%',
    marginTop:'8%',
    marginLeft:'0%',
    backgroundColor: '#7FADEB',
    borderRadius:'15px',
   
  },
  bottombody: {
    marginTop: '1.6%',
    width: '97%',
    height: '90%',
    marginLeft:'1.2%',
    backgroundColor: '#D9E8FC',
    display: 'flex',
    borderRadius:'20px',

  },
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
    width: '90vw',
    minWidth: '1000px',
    height: '900px',
    backgroundColor: "#8792A1",
    borderRadius: "10px",
    boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    marginTop: '50px',
    alignItems: 'center'
  }
});

export default Treatment;