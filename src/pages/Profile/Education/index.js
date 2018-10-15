import React, { Component } from 'react'
import styles from './styles.css'

class Education extends Component {
    render() {
        return (
            <div className={styles.profile__description}>
                <div className={styles.profile__description__left__main}>
                    <p><i><b>November 2011: Master in finance</b></i><br/>
                        <u>Faculty</u>: finance and economics;<br/>
                        <u>Specialty</u>: finance;<br/>
                        <u>University</u>: Kyiv National Economic University named after V.Hetman (KNEU).
                    </p>
                    <p><i><b>June 2010: Bachelor of finance</b></i><br/>
                        <u>Faculty</u>: finance and economics;<br/>
                        <u>Specialty</u>: finance;<br/>
                        <u>University</u>: Kyiv National Economic University named after V.Hetman (KNEU).
                    </p>
                </div>
            </div>
        )
    }
}
export default Education
