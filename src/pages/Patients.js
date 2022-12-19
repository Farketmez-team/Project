import React from 'react';
import Navbar from '../components/Navbar';
import { createUseStyles } from 'react-jss';
import { useState, useEffect } from 'react';
import searchIcon from '../assets/search.svg';
import sortIcon from '../assets/sort.svg';
import { useNavigate } from 'react-router-dom';
import PatientService from '../services/PatientService';

function Patients() {



  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();
  
  const [idreverse, setidreverse] = useState(false);
  const [namereverse, setnamereverse] = useState(false);
  const [genderreverse, setgenderreverse] = useState(false);
  const [agereverse, setagereverse] = useState(false);

  const [patientList, setpatientList] = useState([])

  const [sortBy, setsortBy] = useState("")


  useEffect(() => {
    PatientService.getPatients().then((data)=>{
      setpatientList(data)
    })
  }, []);

  const handleSortDelete = (name) => {
    PatientService.removePatient({name}).then((data)=>{
      alert(data.resultMessage)
      PatientService.getPatients().then((res)=>{
        setpatientList(res)
      })
    })
  }
  const handleSortID = () => {
    setsortBy('id')
    const arr = patientList.sort((a, b) =>
      a.id - b.id
    )
    if (idreverse) arr.reverse()
    setpatientList(arr);
    setidreverse(!idreverse);
  }
  const handleSortName = () => {
    setsortBy('name')
    const arr = patientList.sort((a, b) =>{
      if(a.name>b.name)return 1
      return -1}
    )
    if (namereverse) arr.reverse()
    //console.log(arr)
    setpatientList(arr);
    setnamereverse(!namereverse);
    
  }
  const handleSortGender = () => {
    setsortBy('gender')
    const array = patientList.sort((a, b) =>{
      if(a.gender>b.gender)return 1
      return -1}
    )
    if (genderreverse) array.reverse()
    setpatientList(array);
    setgenderreverse(!genderreverse);
  }
  const handleSortAge = () => {
    setsortBy('age')
    const array = patientList.sort((a, b) =>
      a.age - b.age
    ).splice(0,patientList.length)
    if (agereverse) array.reverse()
    setpatientList(array);
    setagereverse(!agereverse);
  }

  const styles = useStyles();

  return (
    <><Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.header}>
            <div className={styles.itemGroup}>
              <label className={styles.titleLabel}>Patients</label>
              <input className={styles.input} type="text" value={searchParam} onChange={(e) => { setSearchParam(e.target.value) }}></input>
              <button className={styles.searchButton} onClick={() => { console.log(searchParam) }}>
                <img src={searchIcon} className={styles.searchIcon} alt='searchIcon' />
              </button>
            </div>
            <div className={styles.itemGroup}>
              <button className={styles.addButton} onClick={() => { navigate("/addPatient") }}>
                <label className={styles.buttonLabel}>Add new patient</label>
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
                <th className={styles.patientListColumn} onClick={() => { handleSortName() }}><label className={styles.tableLabel}>Name </label> {(sortBy === 'name') ? <img src={sortIcon} className={styles.sortIcon} alt='sortIcon' /> : <></>}</th>
                <th className={styles.patientListColumn} onClick={() => { handleSortGender() }}><label className={styles.tableLabel}>Gender </label> {(sortBy === 'gender') ? <img src={sortIcon} className={styles.sortIcon} alt='sortIcon' /> : <></>}</th>
                <th className={styles.patientListColumn} onClick={() => { handleSortAge() }}><label className={styles.tableLabel}>Age </label> {(sortBy === 'age') ? <img src={sortIcon} className={styles.sortIcon} alt='sortIcon' /> : <></>}</th>
              </tr></thead>
              <tbody>
                {patientList.map((patient) => {
                  return (

                    <tr className={styles.patientListItem} key={patient.id}>
                      <td><label className={styles.listItemText} >{patient.id}</label></td>
                      <td><label className={styles.listItemText} >{patient.name}</label></td>
                      <td><label className={styles.listItemText} >{patient.gender}</label></td>
                      <td><label className={styles.listItemText} >{patient.age}</label></td>
                      <td>
                        <div className={styles.listButtonContainer}>
                          <button className={styles.listButton} onClick={() => { navigate(`/treatments/${patient.id}`,{state:{ patient:patient}}) }}>
                            <label className={styles.buttonLabel}>Details</label>
                          </button>
                          <button className={styles.listButton2} onClick={() => { handleSortDelete(patient.name) }}>
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
    justifyContent:'left'
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
  sortIcon: {
    paddingTop:'3px',
    width: "20px",
    height: "20px",
    "&:hover": {
      cursor: 'pointer'
    }
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
    },
  },
  tableLabel: {
    userSelect:'none',
    "&:hover": {
      cursor: 'pointer'
    }
  },
  sortTag: {
    "&:hover": {
      cursor: 'pointer'
    },
    WebkitTransform: 'scale(1, -1)'
  },

})

export default Patients