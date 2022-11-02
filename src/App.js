import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./pages/Auth/Auth"

import { createUseStyles } from 'react-jss';

function App() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Auth></Auth>
    </div>

  )
}

const useStyles = createUseStyles({
  root: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#363738',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth:'400px'
  }
})

export default App