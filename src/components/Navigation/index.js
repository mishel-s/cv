import React, {Component} from 'react'
import styles from './styles.css'
import {NavLink} from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div className={styles.navWrapper}>
                <NavLink exact to="/" activeClassName={styles.selected}>Profile</NavLink>
                <NavLink to="/experience" activeClassName={styles.selected}>Experience</NavLink>
                <NavLink to="/skills" activeClassName={styles.selected}>Skills</NavLink>
                <NavLink to="/projects" activeClassName={styles.selected}>Projects</NavLink>
                <NavLink to="/contacts" activeClassName={styles.selected}>Contacts</NavLink>
            </div>
        )
    }
}
export default Navigation