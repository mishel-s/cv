import React, {Component} from 'react'
import styles from './styles.css'
import mishel from './mishel.jpg'
import logoemail from './logoemail.png'
import logophone from './logophone.png'
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    togleMenuDd = () => {
        let menuDd = document.getElementById('menuDd');
        if (menuDd.style.right === '100%') {menuDd.style.right = '60%'}
        else menuDd.style.right = '100%';
    }
    render() {
        return (
            <React.Fragment>
                <div className={styles.sideBar}>
                    <img src={mishel} className={styles.logoMishel} alt="logo" />
                    <h3>Savastru Mishel</h3>
                    <p className={styles.email}><img src={logoemail} className={styles.logoemail} alt="email" />s_mishel_s@ukr.net</p>
                    <p className={styles.phone}><img src={logophone} className={styles.logophone} alt="phone" />+38 0... <NavLink to="/contacts" className={styles.phonelink}>in "Contacts"</NavLink></p>
                    <p><a target="_blank"  rel="noopener noreferrer" href="mailto:s_mishel_s@ukr.net">
                        <input type="button" value="send me EMAIL" className={styles.bt_menu} />
                    </a></p>
                    <div className={styles.menuDd}>
                        <div className={styles.menuDd_lines}   onClick={this.togleMenuDd}>
                            <div className={styles.menuDd_first}></div>
                            <div className={styles.menuDd_second}></div>
                            <div className={styles.menuDd_third}></div>
                            <div id="menuDd" className={styles.navWrapper}>
                                <div className={styles.navWrapper__innerBlock}>
                                    <NavLink to="/" activeClassName={styles.selected}>Profile</NavLink>
                                    <NavLink to="/experience" activeClassName={styles.selected}>Experience</NavLink>
                                    <NavLink to="/skills" activeClassName={styles.selected}>Skills</NavLink>
                                    <NavLink to="/projects" activeClassName={styles.selected}>Projects</NavLink>
                                    <NavLink to="/contacts" activeClassName={styles.selected}>Contacts</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Menu