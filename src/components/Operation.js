import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const mouseStateEnum = {
  normal : 1,
  DISPORT : 2,
  BOTOX : 3,
  XEZAMIN : 4,
  FACELIFT : 5
}

const Operation = (props) => {

    const onClick = props.onClick;

  const styles =useStyles();

  return (
          <>{(!props.lifting)?<table className={styles.tableStyle}>
            <tbody>
          <tr>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(1,2)}}>+<sub>1</sub></label></td>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(1,3)}}>■<sub>1</sub></label></td>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(1,4)}}>○<sub>1</sub></label></td>
          </tr>
       <tr>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(2,2)}}>+<sub>2</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(2,3)}}>■<sub>2</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(2,4)}}>○<sub>2</sub></label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(3,2)}}>+<sub>2</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(3,3)}}>■<sub>2</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(3,4)}}>○<sub>2</sub></label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(4,2)}}>+<sub>3</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(4,3)}}>■<sub>3</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(4,4)}}>○<sub>3</sub></label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(5,2)}}>+<sub>4</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(5,3)}}>■<sub>4</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(5,4)}}>○<sub>4</sub></label></td>
       </tr>
       <tr>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(6,2)}}>+<sub>5</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(6,3)}}>■<sub>5</sub></label></td>
         <td><label className={styles.ListItemLabel} onClick={()=>{onClick(6,4)}}>○<sub>5</sub></label></td>
       </tr></tbody>
</table>:
        <table className={styles.tableStyle} ><tbody>
          <tr>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(1,5)}}>▲<sub>1</sub></label></td>
          </tr>
          <tr>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(2,5)}}>▲<sub>2</sub></label></td>
          </tr>
          <tr>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(3,5)}}>▲<sub>3</sub></label></td>
          </tr>
          <tr>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(4,5)}}>▲<sub>4</sub></label></td>
          </tr>
          <tr>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(5,5)}}>▲<sub>5</sub></label></td>
          </tr>
          <tr>
             <td><label className={styles.ListItemLabel} onClick={()=>{onClick(6,5)}}>▲<sub>6</sub></label></td>
          </tr></tbody>
        </table>}</>
       

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