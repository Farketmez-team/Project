import React from 'react';
import Navbar from '../components/Navbar';
import { createUseStyles } from 'react-jss';
import { useState, useRef, useEffect } from 'react';
import {
  useParams, useLocation, useNavigate
} from "react-router-dom";

import Recordings from '../components/Recordings';
import Record from '../components/Record';
import Details from "../components/Details";

import { useReactMediaRecorder } from "react-media-recorder";
import treatmentService from '../services/TreatmentService';
import Operation from '../components/Operation';

const mouseStateEnum = {
  normal: 1,
  DISPORT: 2,
  BOTOX: 3,
  XEZAMIN: 4,
  FACELIFT: 5
}

const symbols = ['+', "■", "○", "▲"]

const names = ['DISPORT',
  'BOTOX',
  'XEZAMIN',
  'FACELIFT', "NONE"];

class OperationDTO {
  positionX
  positionY
  type
  treatmentSize
  patientId
}

const Treatment = () => {


  const navigate = useNavigate();

  const [points, setpoints] = useState([])
  const [mouseState, setMouseState] = useState(mouseStateEnum.normal)
  const [treatmentLvl, setTreatmentLvl] = useState(null)
  const myRef = useRef(null);
  const [audioURL, setaudioURL] = useState();
  const [recordings, setrecords] = useState([]);
  const [operations, setOperations] = useState([]);
  const [recorded, setrecorded] = useState(true)
  const [sessionId, setSessionId] = useState(null)
  const [midwayy, setmidwayy] = useState(null)

  const { status, startRecording, stopRecording, pauseRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const handleRemove = (name) => {
    navigate(-1)
  }

  const handleSave = async () => {
    console.log(operations)
    treatmentService.addTreatments(operations).then((resp) => {
      console.log(resp)
    })
  }

  const onUploadVoiceNote = async () => {
    treatmentService.uploadAudioNote({ session: 128, patient: 36, mediaUrl: mediaBlobUrl }).then((resp) => {
      console.log(resp)
    })
  }

  const handleCancel = async () => {
    navigate(-1)
  }


  const handleClickOnFace = (e) => {

    if (mouseState === mouseStateEnum.normal) {
      return;
    }
    //console.log(e.nativeEvent.offsetX,e.nativeEvent.offsetY)
    const element = myRef.current;
    const x = element.getBoundingClientRect().left;
    const y = element.getBoundingClientRect().top;
    const midway = Math.round((element.getBoundingClientRect().right + element.getBoundingClientRect().left) / 2)
    const offsetX = e.nativeEvent.offsetX
    const offsetY = e.nativeEvent.offsetY
    console.log(offsetX + x)
    setmidwayy(midway);
    if (offsetX + x < midway)
      if (offsetX + x < 354) {
        setpoints([...points, { x: Math.round(offsetX + x + (95 + ((midway - (offsetX + x)) * 0.30))), y: offsetY + y - 5, operation: mouseState, lvl: treatmentLvl }, { x: offsetX + x, y: offsetY + y, operation: mouseState, lvl: treatmentLvl }])
      }
      else
        setpoints([...points, { x: Math.round(offsetX + x - (145 + ((midway - (offsetX + x)) * 0.20))), y: offsetY + y + 5, operation: mouseState, lvl: treatmentLvl }, { x: offsetX + x, y: offsetY + y, operation: mouseState, lvl: treatmentLvl }])
    else {
      if (offsetX + x > 640) {
        setpoints([...points, { x: Math.round(offsetX + x - (95 + (((offsetX + x) - midway) * 0.30))), y: offsetY + y - 5, operation: mouseState, lvl: treatmentLvl }, { x: offsetX + x, y: offsetY + y, operation: mouseState, lvl: treatmentLvl }])
      }
      else
        setpoints([...points, { x: Math.round(offsetX + x + (150 + (((offsetX + x) - midway) * 0.18))), y: offsetY + y + 5, operation: mouseState, lvl: treatmentLvl }, { x: offsetX + x, y: offsetY + y, operation: mouseState, lvl: treatmentLvl }])
    }
    const op = new OperationDTO();
    op.patientId = patientID
    op.positionX = Math.round(offsetX + x)
    op.positionY = Math.round(offsetY + y)
    op.type = names[mouseState - 2];
    op.treatmentSize = treatmentLvl;
    setOperations([...operations, op])
  }
  const onOperationClick = (level, operation) => {
    console.log(`Trestment level:${level}, Operation:${names[operation - 1]}`)
    setMouseState(operation)
    setTreatmentLvl(level)
  }

  const onOperationCancel = () => {
    setMouseState(mouseStateEnum.normal)
    setTreatmentLvl(0)
  }

  const onVoiceNoteSelect = (voiceNote) => {
    console.log(voiceNote)
    setaudioURL(voiceNote)
    setrecorded(false)
  }

  useEffect(() => {
    const element = myRef.current;
    const x = element.getBoundingClientRect().left;
    const y = element.getBoundingClientRect().top;
    const midway = Math.round((element.getBoundingClientRect().right + element.getBoundingClientRect().left) / 2)
    if (treatmentID == 999) {
      const op = new OperationDTO();
      op.patientId = patientID
      op.positionX = 0
      op.positionY = 0
      op.type = "NONE";
      op.treatmentSize = 10;
      treatmentService.addTreatments([op]).then((response) => {
        setSessionId(response[0].sessionId)
        treatmentService.getAudioNotes(patientID).then((data) => {
          //console.log(data)
          setrecords(data)
        })
      })
    }
    else {
      console.log(treatmentID, sessionId)
      setSessionId(treatmentID)
      treatmentService.getAudioNotes(patientID).then((data) => {
        //console.log(data)
        setrecords(data)
      })
      treatmentService.getTreatments(treatmentID, patientID).then((data) => {
        data.map((treatment) => {
          let temp = points
          temp.push({ x: treatment.positionX, y: treatment.positionY, operation: names.indexOf(treatment.type) + 2, lvl: treatment.treatmentSize })
          console.log(treatment)
          setpoints(temp)
          //     if(treatment.positionX < midway){
          //   if(treatment.positionX<354){
          //     setpoints([...points,{x:Math.round(treatment.positionX+(95+((midway-(treatment.positionX))*0.30))),y:treatment.positionY-5+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize},{x:treatment.positionX,y:treatment.positionY+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize}])
          //   }
          //   else
          //   setpoints([...points,{x:Math.round(treatment.positionX-(145+((midway-(treatment.positionX))*0.20))),y:treatment.positionY+5+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize},{x:treatment.positionX,y:treatment.positionY+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize}])
          // }else{
          //   if(treatment.positionX>640){
          //     setpoints([...points,{x:Math.round(treatment.positionX-(95+(((treatment.positionX)-midway)*0.30))),y:treatment.positionY-5+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize},{x:treatment.positionX,y:treatment.positionY+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize}])
          //   }
          //   else
          //   setpoints([...points,{x:Math.round(treatment.positionX+(150+(((treatment.positionX)-midway)*0.18))),y:treatment.positionY+5+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize},{x:treatment.positionX,y:treatment.positionY+y,operation:names.indexOf(treatment.type)+1, lvl:treatment.treatmentSize}])
          // }
        })
      })
    }



  }, [])


  const [noteText, setnoteText] = useState("");
  const styles = useStyles();

  let { patientID, treatmentID } = useParams();
  //console.log( patientID,treatmentID)

  return (
    <>
      <Navbar />
      {status}
      <div className={styles.container} style={{ cursor: (mouseState !== mouseStateEnum.normal) ? 'crosshair' : 'default' }}>
        <div className={styles.background}>
          <div className={styles.mainScreen}>
            <Operation onClick={onOperationClick} lifting={true}></Operation>
            {points.map((point) => {
              return <label style={{ top: point.y, left: point.x, position: 'absolute', color: '#d44', fontWeight: 'bold' }}>{symbols[point.operation - 2]}<sub style={{ color: '#d44' }}>{point.lvl}</sub></label>
            })}
            <img ref={myRef} className={styles.faces} src={window.location.origin + '/assets/faces.png'} onClick={handleClickOnFace}></img>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Operation onClick={onOperationClick} lifting={false}></Operation>
              {(mouseState !== mouseStateEnum.normal) ? <button className={styles.formBtnnn} onClick={onOperationCancel}><label>Cancel</label></button> : <></>}
            </div>
          </div>
          {/* <Notes onClick={handleSelectedNote}/> */}
          <div className={styles.bottomLevelBody}>
            <div className={styles.bottombody}>
              <Recordings records={recordings} onClick={onVoiceNoteSelect} />
              <Details initaltext={noteText} />
            </div>
            <div className={styles.recording}>
              < Record startRecording={startRecording} stopRecording={stopRecording} pauseRecording={pauseRecording} onUpload={onUploadVoiceNote} media={mediaBlobUrl} media2={audioURL} recorded={recorded} setRecorded={setrecorded} />
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


          </div>
        </div>
      </div>
    </>

  )
}

const useStyles = createUseStyles({
  bottomLevelBody: {
    width: '97%',
    height: '250px',
    marginTop: '25px',
    marginLeft: '0%',
    backgroundColor: '#7FADEB',
    borderRadius: '15px',

  },
  formBtnnn: {
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    width: '93%',
    padding: '8px 10px',
    backgroundColor: '#DD7777',
    borderRadius: '5px',
    borderWidth: '0px',
    "&:hover": {
      cursor: 'pointer'
    },
    "&:active": {
      outline: 'solid',
      outlineColor: '#DD2222',
      outlineWidth: '3px'
    },
    margin: '5px'
  },
  bottombody: {
    marginTop: '5px',
    width: '97%',
    height: '150px',
    marginLeft: '1.2%',
    backgroundColor: '#D9E8FC',
    display: 'flex',
    borderRadius: '20px',

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
  recording: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'row'

  },
  points: {
    position: 'absolute',
    backgroundColor: '#F00',
    width: '5px',
    height: '5px',
    borderRadius: '50%'
  },
  background: {
    display: 'flex',
    flexDirection: 'column',
    width: '90vw',
    minWidth: '1000px',
    height: '700px',
    backgroundColor: "#8792A1",
    borderRadius: "10px",
    boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    marginTop: '25px',
    alignItems: 'center'
  },
  mainScreen: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    minWidth: '1000px',
    height: '100%',
    backgroundColor: "#D9E8FC",
    borderRadius: "10px",
    boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    marginTop: '25px',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  formBody2: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: "end"
  },
  faces: {
    height: '400px'
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
    boxShadow: '1px 1px rgba(0, 0, 0, 0.2)',
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
    boxShadow: '1px 1px rgba(0, 0, 0, 0.2)',
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
    boxShadow: '1px 1px rgba(0, 0, 0, 0.2)',
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
    fontWeight: "700",
    "&:hover": {
      cursor: 'pointer'
    }
  },
  formBtnLabel2: {
    display: 'block',
    color: '#fff',
    fontSize: '12px',
    fontWeight: "700",
    "&:hover": {
      cursor: 'pointer'
    }
  },
  formBtnLabel3: {
    display: 'block',
    color: '#fff',
    fontSize: '12px',
    fontWeight: "700",
    "&:hover": {
      cursor: 'pointer'
    }
  },
});

export default Treatment;