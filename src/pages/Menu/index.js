import React, {Component} from 'react'
import styles from './styles.css'
import mishel from './mishel.jpg'
import logoemail from './logoemail.png'
import logophone from './logophone.png'
import {NavLink} from 'react-router-dom'

class Menu extends Component {
    togleMenuDd = () => {
        let menuDd = document.getElementById('menuDd');
        let menuDd_first = document.getElementById('menuDd_first');
        let menuDd_second = document.getElementById('menuDd_second');
        let menuDd_third = document.getElementById('menuDd_third');
        if (menuDd.style.right === '100%') {
            menuDd.style.right = '60%';
            menuDd_second.style.display =  'none';
            menuDd_first.style.transform = 'rotate(45deg)';
            menuDd_first.style.width = '80%';
            menuDd_first.style.top = '2px';
            menuDd_first.style.position = 'relative';
            menuDd_third.style.transform = 'rotate(-45deg)';
            menuDd_third.style.width = '80%';
            menuDd_third.style.bottom = '2px';
            menuDd_third.style.position = 'relative';
        } else {
            menuDd.style.right = '100%';
            menuDd_second.style.display =  'flex';
            menuDd_first.style.position = 'unset';
            menuDd_first.style.transform = 'rotate(0deg)';
            menuDd_first.style.width = '50%';
            menuDd_third.style.position = 'unset';
            menuDd_third.style.transform = 'rotate(0deg)';
            menuDd_third.style.width = '50%';
        }
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
                        <input type="button" value="contact me" className={styles.bt_menu} />
                    </a></p>
                    <div className={styles.menuDd}>
                        <div className={styles.menuDd_lines}   onClick={this.togleMenuDd}>
                            <div id="menuDdblock_lines" className={styles.menuDdblock_lines}>
                                <div id="menuDd_first" className={styles.menuDd_first}></div>
                                <div id="menuDd_second" className={styles.menuDd_second}></div>
                                <div id="menuDd_third" className={styles.menuDd_third}></div>
                            </div>
                            <div id="menuDd" className={styles.navWrapper}>
                                <div className={styles.navWrapper__innerBlock}>
                                    <NavLink to="/cv" activeClassName={styles.selected}>Profile</NavLink>
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