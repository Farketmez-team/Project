import { React, useState } from 'react';
import { createUseStyles } from 'react-jss';
import homeIcon from '../assets/homeicons.svg';
import menuIcon from '../assets/menuicon.svg'
import DropDownItem from './DropDownItem';

function Navbar() {

    const styles = useStyles();

    const [menuOpen, setmenuOpen] = useState(false);

    return (
        <ul className={styles.navbar}>
            <img src={homeIcon} className={styles.homeButton} alt='HomeIcon' />
            <div className={styles.drowdownContainer}>
                <img src={menuIcon} className={styles.menuButton} alt='MenuIcon' onClick={()=>{setmenuOpen(!menuOpen)}} />
                {(menuOpen)?<div className={styles.drowdownMenu}>
                    <DropDownItem label={"test"} onClick={()=>{console.log("item1")}}/>
                    <DropDownItem label={"test1"}/>
                    <DropDownItem label={"test2"}/>
                </div>:<></>}
            </div>
        </ul>
    )
}

const useStyles = createUseStyles({
    navbar: {
        listStyleType: 'none',
        width: '100vw',
        height: '50px',
        margin: '0px',
        padding: '0px',
        overflow: 'hidden',
        backgroundColor: '#8792A1',
        justifyContent: 'center'
    },
    homeButton: {
        float: 'left',
        width: '40px',
        height: '40px',
        margin: '5px 5px 5px 15px',
        '&:hover': {
            cursor: 'pointer',
        }
    },

    menuButton: {
        float: 'right',
        width: '40px',
        height: '40px',
        margin: '5px 15px 5px 5px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    drowdownContainer:{
        position:'absolute',
        top:'0px',
        right:'20px',
        
        
    },
    seperator: {
        borderTop: '1px solid white',
        marginBottom: '50px'
    },
    drowdownMenu: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'250px',
        minWidth:'200px',
        backgroundColor: '#8792A1',
        transform: 'translate(20px,60px)',
        borderRadius:'5px 0px 5px 5px',
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    }

})

export default Navbar;