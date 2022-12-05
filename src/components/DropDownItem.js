import React from 'react'
import { createUseStyles } from 'react-jss';


function DropDownItem(props) {

    const styles = useStyles();

  return (
    <li className={styles.listItem} onClick={props.onClick}>
        <h5 className={styles.itemLabel}>{props.label}</h5>
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