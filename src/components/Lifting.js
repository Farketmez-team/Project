import React from 'react'
import { createUseStyles } from 'react-jss';
const Lifting = () => {

  const styles =useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.formBody}>
      <div className={styles.NotesBody}>
          <table className={styles.tableStyle}>
          <tr>
             <th><label className={styles.ListItemLabel} >^</label></th>
             <th><label className={styles.ListItemLabel} >^</label></th>
             <th><label className={styles.ListItemLabel} >^</label></th>
          </tr>
       <tr>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
       </tr>
       <tr>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
       </tr>
       <tr>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
       </tr>
       <tr>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
       </tr>
       <tr>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
         <th><label className={styles.ListItemLabel} >^</label></th>
       </tr>
</table>
        </div>
       

    </div>
</div>
  )
}
const useStyles = createUseStyles({
    container: {
        width: 200,
        display: 'flex',
        position: 'relative',


    },
    formBody: {
        width: '100%',
        position: 'relative',
        top:"-40px",
        right:"530px",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#7FADEB',
        padding: '10px',
        margin: '50px',
        zIndex: 2,
        borderRadius: '5px',
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
        height: "230px",
        
    },
   
    listItem:{
      margin:"5px 0px"
  },
  ListItemLabel:{
      cursor:"pointer",
      fontWeight:"3000"
  },
  tableStyle:{
    width: "150px",
    height:"180px",
    textalign:"center",
    padding: "0px",
    margin:"-10px",
   
  }
});
export default Lifting
