import { React, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import DropDownItem from './DropDownItem';

function Navbar() {

    const styles = useStyles();

    const navigate = useNavigate()

    const [menuOpen, setmenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.setItem('user', JSON.stringify({ loggedin: false })); navigate("/auth")
    }


    return (
        <ul className={styles.navbar}>
            <img src={window.location.origin + '/assets/homeicons.svg'} className={styles.homeButton} alt='HomeIcon' onClick={() => { navigate("/patients") }} />
            <div className={styles.drowdownContainer}>
                <img src={window.location.origin + '/assets/menuicon.svg'} className={styles.menuButton} alt='MenuIcon' onClick={() => { setmenuOpen(!menuOpen) }} />
                {(menuOpen) ? <div className={styles.drowdownMenu}>
                    <DropDownItem label={"Profile"} onClick={() => {
                        navigate("/profile")
                    }} />
                    <DropDownItem label={"Log Out"} onClick={handleLogout} />
                </div> : <></>}
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
    drowdownContainer: {
        position: 'absolute',
        top: '0px',
        right: '20px',


    },
    seperator: {
        borderTop: '1px solid white',
        marginBottom: '50px'
    },
    drowdownMenu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '250px',
        minWidth: '200px',
        backgroundColor: '#8792A1',
        transform: 'translate(20px,60px)',
        borderRadius: '5px 0px 5px 5px',
        boxShadow: '4px 4px rgba(0, 0, 0, 0.2)',
    }

})

export default Navbar;