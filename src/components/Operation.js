import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const mouseStateEnum = {
    normal:1,
    botox:2,
    lifting:3
  }

const Operation = (props) => {

    const onClick = props.onClick;
    const tableRef = useRef();

  useEffect(() => {
    // Get all of the cells in the table
    let cells = tableRef.current.querySelectorAll('td');

    // Add an event listener to each cell
    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener('click', function() {
        // Get the row and column numbers of the cell that was clicked
        let row = this.parentNode.rowIndex+1;
        let col = this.cellIndex+1;
        console.log(row,col)
        onClick(row*col,mouseStateEnum.botox);

        // Do something with the row and column numbers here
      });
    }
  }, []); // The empty array ensures that the effect only runs once
  const styles =useStyles();

  return (
          <table className={styles.tableStyle} ref={tableRef}>
          <tr>
             <td><label className={styles.ListItemLabel} >+</label></td>
             <td><label className={styles.ListItemLabel} >+</label></td>
             <td><label className={styles.ListItemLabel} >+</label></td>
          </tr>
       <tr>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
         <td><label className={styles.ListItemLabel} >+</label></td>
       </tr>
</table>
       

  )
}
const useStyles = createUseStyles({
    container: {
        width: 200,
        display: 'flex',
        position: 'relative',
        backgroundColor:'#7FADEB'

    },
    formBody: {
        width: '100%',
        position: 'relative',
        top:"-660px",
        left:"200px",
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
    paddingLeft: "20px",
    backgroundColor:'#7FADEB',
    borderRadius:'10px'
  }
});
export default Operation