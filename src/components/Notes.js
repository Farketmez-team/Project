import React from 'react'
import { createUseStyles } from 'react-jss';
const Notes = (props) => {

    const styles = useStyles();

    const noteArray = [
        {
            id:0,
            Title: "Note1",
            Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus sagittis condimentum. Duis eget gravida nisi, vitae lobortis diam. Sed auctor imperdiet lorem. Vivamus non massa in lectus facilisis aliquet. Fusce id sagittis elit, id porta turpis. Curabitur massa risus, posuere at sapien at, malesuada fringilla est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tortor ligula, efficitur vitae dui sed, consectetur efficitur lorem. In ut tristique leo. Maecenas luctus mattis laoreet. Proin pellentesque dapibus tellus id sollicitudin. Ut mauris risus, fringilla a porttitor sit amet, ullamcorper non mi. Suspendisse viverra malesuada magna, nec maximus velit elementum non. Sed tristique ligula ut erat semper facilisis."
        },
        {
            id:1,
            Title: "Note2",
            Text: "Etiam quis ligula enim. Fusce viverra lobortis felis quis tempor. Morbi fringilla consectetur volutpat. Aenean efficitur tellus in orci cursus, vel tincidunt massa cursus. Nunc lacinia est vel augue hendrerit, quis suscipit nisl congue. Fusce at venenatis ex. Fusce ut fermentum nunc. Ut ut purus sit amet velit venenatis finibus ut sed urna."
        },
        {
            id:2,
            Title: "Note3",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:3,
            Title: "Note4",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:4,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:5,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:6,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:7,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:8,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:9,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:10,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },
        {
            id:11,
            Title: "Note5",
            Text: "lskfhkjsdhfkjhskdfjhskfj"
        },

    ]


    return (
        <div className={styles.container}>
            <div className={styles.formBody}>
                <div className={styles.header}>
                    <label className={styles.TitleFont}>Notes</label>
                </div>
                <div className={styles.NotesBody}>
                    <ul>
                        {noteArray.map((note) => {
                            return <li className={styles.listItem} key={note.id}>
                                <label className={styles.ListItemLabel} onClick={()=>{props.onClick(note.Text);console.log(note.Text)}}>{note.Title}</label>
                                </li>
                        })}
                    </ul>
                </div>

            </div>
        </div>
    )
}


const useStyles = createUseStyles({
    container: {
        width: 300,
        display: 'flex',
        position: 'relative',


    },
    formBody: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#7FADEB',
        padding: '30px',
        margin: '5px',
        zIndex: 2,
        borderRadius: '5px',
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        height: "200px",
        
    },
    header: {
        height: "40px"
    },
    NotesBody: {
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
            border: '6px solid rgba(0, 0, 0, 0)',
            borderRadius: '20000px'
        }
    },
    TitleFont: {

    },

    listItem:{
        margin:"5px 0px"
    },
    ListItemLabel:{
        cursor:"pointer",
        fontWeight:"300"
    }
});

export default Notes;