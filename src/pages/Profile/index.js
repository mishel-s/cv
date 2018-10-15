import React, { Component } from 'react'
import styles from './styles.css'
import Main from "./Main";
import Education from "./Education";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: <Main/>,
            active: 'main',
        }
    }
    getStyles = (name) => {
        const {active} = this.state;
        return active === name ? styles.active : '';
    }

    render() {
        return (
            <div className={styles.profile}>
                <div className={styles.profile__title}>
                    <h2>Mishel Savastru</h2>
                </div>
                <div className={styles.profile__tabs}>
                    <div className={styles.profile__tabs__buttons}>
                        <button id="main" className={styles.profile__tabs__buttons_main + " " + this.getStyles("main")} onClick={ (e)=> { this.setState( { tab: <Main />, active: e.target.id } ) } }>Main</button>
                        <button id="education" className={styles.profile__tabs__buttons_education + " " + this.getStyles("education")} onClick={ (e)=> { this.setState( { tab: <Education />, active: e.target.id } ) } }>Education</button>
                    </div>
                </div>
                {this.state.tab}
            </div>
        )
    }
}
export default Profile