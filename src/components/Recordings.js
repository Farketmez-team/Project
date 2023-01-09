import React from 'react';
import { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import pause from '../assets/pause.svg'
import play from '../assets/play.svg'
import record from '../assets/record.svg'
import microphone from '../assets/record.svg'
import Record from '../components/Record';


const Recordings = (props) => {

    const styles = useStyles();
    const [records, setrecords] = useState(props.records)


    useEffect(() => {
        setrecords(props.records)
    
    }, [props.records])
    const recordArray = [
        {
            id: 0,
            Title: "Note1",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus sagittis condimentum. Duis eget gravida nisi, vitae lobortis diam. Sed auctor imperdiet lorem. Vivamus non massa in lectus facilisis aliquet. Fusce id sagittis elit, id porta turpis. Curabitur massa risus, posuere at sapien at, malesuada fringilla est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tortor ligula, efficitur vitae dui sed, consectetur efficitur lorem. In ut tristique leo. Maecenas luctus mattis laoreet. Proin pellentesque dapibus tellus id sollicitudin. Ut mauris risus, fringilla a porttitor sit amet, ullamcorper non mi. Suspendisse viverra malesuada magna, nec maximus velit elementum non. Sed tristique ligula ut erat semper facilisis."
        },
        {
            id: 1,
            Title: "Note2",
            Text: "Etiam quis ligula enim. Fusce viverra lobortis felis quis tempor. Morbi fringilla consectetur volutpat. Aenean efficitur tellus in orci cursus, vel tincidunt massa cursus. Nunc lacinia est vel augue hendrerit, quis suscipit nisl congue. Fusce at venenatis ex. Fusce ut fermentum nunc. Ut ut purus sit amet velit venenatis finibus ut sed urna."
        },
        {
            id: 2,
            Title: "Note3",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id: 3,
            Title: "Note4",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id: 4,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id: 5,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"

        },]





    return (
        <>
            <div className={styles.container}>
                <div className={styles.formBody}>
                    <div className={styles.header}>
                        <label className={styles.TitleFont}> Voice Recordings</label>
                    </div>
                    <div className={styles.recordBody}>
                        <ul>
                            {(records)?records.map((record) => {
                                return <li className={styles.listItem} key={record.id}>
                                    <label className={styles.ListItemLabel} onClick={()=>{props.onClick(record.path)}}
                                    >  Note {record.id}
                                    </label>
                                </li>
                            }):<></>}

                        </ul>


                    </div>

                </div>
               
            {/* <Record/> */}
            </div>

        </>
    )
}
const useStyles = createUseStyles({
    play_pause_Button: {
        width: '15px',
        margin: '-2.4px 7px',
        cursor: "pointer",
        display: 'relative'
        //backgroundColor:'#6FAEEB'
    },

    container: {
        width: '52%',
        top: '2%',
        left: '1%',
        height:'100px',
        display: 'flex',flexDirection: 'column',
        position: 'relative',
        //backgroundColor: '#FF0000',

    },
    formBody: {
        //height:'',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#7FADEB',
        padding: '4.5% 4%',
        margin: '1%',
        marginTop:'1%',
        zIndex: 2,
        borderRadius:'10px',
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        height: "65%",

    },
    header: {
        height: "30px"
    },
    recordBody: {
        overflowX: 'hidden',
        overflowY: 'scroll',
        "&::-webkit-scrollbar": {
            width: '22px',

        },
        "&::-webkit-scrollbar-track": {
            background: 'none',
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: '#6A6A6A',
            backgroundClip: 'padding-box',
            border: '3px solid rgba(0, 0, 0, 0)',
            borderRadius: '20000px'
        }
    },
    TitleFont: {

    },

    listItem: {
        margin: "20px 0px"
    },
    ListItemLabel: {
        "&:hover": {
            cursor: 'pointer',
            fontWeight: "450"
        },
        
        fontWeight: "300"

        //fontWeight:isHover?  "300" : "600"
    },
    
});

export default Recordings;