import React from 'react'
import { createUseStyles } from 'react-jss';


function DropDownItem(props) {

    const styles = useStyles();

  return (
    <li className={styles.listItem}>
        <h5 className={styles.itemLabel} onClick={props.onClick}>{props.label}</h5>
    </li>
  )
}

const useStyles = createUseStyles({
    listItem:{

        borderBottom:'1px solid white',
        "&:last-child":{
            borderBottom:'none',
        },
        minWidth:'150px',
        textAlign:'center',
    },
    itemLabel:{
        color:'#D9E8FC',
        "&:hover":{
            cursor:'pointer'
        }
    }
});

export default DropDownItem;