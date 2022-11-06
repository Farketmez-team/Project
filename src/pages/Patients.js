import React from 'react';
import Navbar from '../components/Navbar';
import { createUseStyles } from 'react-jss';

function Patients() {

  const styles = useStyles();

  return (
    <><Navbar></Navbar>
    <div className={styles.container}>
      
    </div>
    </>
  )
}

const useStyles = createUseStyles({
  container: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#363738',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '400px'
  },
})

export default Patients