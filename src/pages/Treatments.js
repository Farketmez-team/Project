import React from 'react';
import Navbar from '../components/Navbar';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import searchIcon from '../assets/search.svg';
import {
  useParams,useLocation, useNavigate
} from "react-router-dom";
import sortIcon from '../assets/sort.svg';
import homeIcon from 'src/assets/back-arrow.svg';

function Treatments() {

  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useState("");
  let { patientID } = useParams();
  const [idreverse, setidreverse] = useState(false);
  const {state} = useLocation();
  const { patient } = state; // Read values passed on state
  const [data, setdata] = useState(patient.sessions)
  const [sortBy, setsortBy] = useState("")
  const [datereverse, setdatereverse] = useState(false);
  

  const handleSortID = () => {
    setsortBy('id')
    const arr = data.sort((a, b) =>
      a.id - b.id
    )
    if (idreverse) arr.reverse()
    setdata(arr);
    setidreverse(!idreverse);
  }

  const handleSortDate = () => {
    setsortBy('date')
    const arr = data.sort((a, b) =>
      {if(a.date>b.date)return 1
      return 0}
    )
    if (datereverse) arr.reverse()
    setdata(arr);
    setdatereverse(!datereverse);
  }

  const IMG = (imgName) => {
    return require(`src/assets/${imgName}`)
  }

  const styles = useStyles();

  return (
    <><Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.header}>
            <div className={styles.itemGroup}>
              <img src={IMG("back-arrow.svg")} className={styles.homeButton} alt='HomeIcon' onClick={() => { navigate("/patients") }} />
              <label className={styles.titleLabel}>Treatments</label>
              <input className={styles.input} type="text" value={searchParam} onChange={(e) => { setSearchParam(e.target.value) }}></input>
              <button className={styles.searchButton} onClick={() => { console.log(searchParam) }}>
                <img src={searchIcon} className={styles.searchIcon} alt='searchIcon' />
              </button>
              <label className={styles.titleSubLabel}> Patient: {patient.name}</label>
            </div>
            <div className={styles.itemGroup}>
              <button className={styles.addButton} onClick={() => { console.log("add") }}>
                <label className={styles.buttonLabel}>Add new treatment</label>
              </button>
            </div>
          </div>
          <div className={styles.cardBody}>
            <table className={styles.patientList}>
              <thead><tr className={styles.patientListItem}>
              <th className={styles.patientListColumn} onClick={() => { handleSortID() }}>
                  <label className={styles.tableLabel}>Id </label>
                  {(sortBy === 'id') ? <img src={sortIcon} className={styles.sortIcon} alt='sortIcon' /> : <></>}
                </th>
                <th className={styles.tableLabel2}onClick={() => { handleSortDate() }}>Date{(sortBy === 'date') ? <img src={sortIcon} className={styles.sortIcon} alt='sortIcon' /> : <></>}</th>
                <th style={{width:'25%', textAlign:'left'}}>Operations</th>
              </tr></thead>
              <tbody>
                {data.map((patient) => {
                  return (

                    <tr className={styles.patientListItem} key={patientID}>
                      <td><label className={styles.listItemText} >{patientID}</label></td>
                      <td style={{width:'25%', textAlign:'left'}} ><label className={styles.listItemText} >{patient.date}</label></td>
                      <td style={{width:'25%', textAlign:'left',overflow:'clip'}} ><label className={styles.listItemText} >{patient.treatments}</label></td>
                      <td>
                        <div className={styles.listButtonContainer}>
                          <button className={styles.listButton} onClick={() => { console.log(patient) }}>
                            <label className={styles.buttonLabel}>Details</label>
                          </button>
                          <button className={styles.listButton2} onClick={() => { console.log(patient) }}>
                            <label className={styles.buttonLabel2}>Remove</label>
                          </button></div>
                      </td>
                    </tr>)
                })}</tbody>
            </table>
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
  },
  header: {
    width: '88%',
    height: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px',
    height: '35px',
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
  buttonLabel: {
    display: 'block',
    color: '#EEE',
    fontSize: '14px',
    "&:hover": {
      cursor: 'pointer'
    }
  },
  buttonLabel2: {
    display: 'block',
    color: '#CE8181',
    fontSize: '14px',
    "&:hover": {
      cursor: 'pointer'
    }
  },
  itemGroup: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  sortIcon: {
    paddingTop:'3px',
    width: "20px",
    height: "20px",
    "&:hover": {
      cursor: 'pointer'
    }
  },
  input: {
    backgroundColor: '#D9E8FC',
    border: 'none',
    borderRadius: '5px',
    width: '200px',
    height: '28px',
    outline: 'none',
    boxShadow: 'none',
    borderWidth: '0px',
    padding: '5px 35px 5px 10px',
    margin: '5px',
    transition: '0.4s',
    "&:focus": {
      outline: 'solid',
      outlineColor: '#1D64C2',
      outlineWidth: '3px'
    },
    fontSize: "14px",
    textOverflow: 'ellipsis',
    zIndex: "3"
  },
  titleLabel: {
    marginRight: '10px',
    color: '#FFFFFF',
    fontSize: '22px',
    fontWeight: 'bold'
  },
  titleSubLabel: {
    marginRight: '10px',
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 'thin'
  },
  searchButton: {
    background: 'none',
    //backgroundColor:'#FFF',
    border: 'none',
    width: '35px',
    height: '35px',
    transform: "translateX(-40px)",
    zIndex: '5',
    "&:hover": {
      cursor: 'pointer'
    }
  },
  searchIcon: {
    width: "20px",
    height: "20px",
  },
  filterIcon: {
    width: "35px",
    height: "35px",
  },
  cardBody: {
    backgroundColor: "#D9E8FC",
    width: "90%",
    height: "80%",
    margin: "0% 3% 0% 5%",
    borderRadius: "8px",
    overflowX: 'hidden',
    overflowY: 'scroll',
    "&::-webkit-scrollbar": {
      width: '22px',
    },
    "&::-webkit-scrollbar-track": {
      background: 'none',
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: '#8792a1',
      backgroundClip: 'padding-box',
      border: '6px solid rgba(0, 0, 0, 0)',
      borderRadius: '20000px'
    }
  },
  patientList: {
    tableLayout: 'fixed',
    margin: '10px 0px',
    padding: '5px 20px',
    width: '100%',
  },
  patientListItem: {
    height: '35px',
    textAlign: 'center',
    fontSize: '18px',
    borderBottom: '1px solid #555555'
  },
  listItemText: {
    color: "#555555"
  },
  patientListColumn: {
    width: '12%'
  },
  listButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '35px',
    marginInline: '20px',
    padding: '8px 5px',
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
    },

  },
  listButtonContainer: {
    display: 'flex',
    padding: '0px 25px',
    justifyContent: 'space-around',
  },
  listButton2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '35px',
    background: 'none',
    backgroundColor: '#D9E8FC',
    marginInline: '20px',
    padding: '8px 5px',
    borderRadius: '5px',
    borderWidth: '2px',
    border: 'solid',
    borderColor: '#CE8181',
    "&:hover": {
      cursor: 'pointer'
    },
    "&:active": {
      outline: 'solid',
      outlineColor: '#CE8181',
      outlineWidth: '3px'
    },
  }
  ,tableLabel: {
    userSelect:'none',
    "&:hover": {
      cursor: 'pointer'
    }
  },
  tableLabel2: {
    userSelect:'none',
    "&:hover": {
      cursor: 'pointer'
    },width:'25%', textAlign:'left'
  },
  homeButton: {
    float: 'left',
    width: '20px',
    height: '20px',
    margin: '5px 5px 5px 15px',
    '&:hover': {
        cursor: 'pointer',
    }
},
})

export default Treatments
