import React from 'react'
import styles from './styles.css'

export default function ProjectCard(props) {
    return (
        <React.Fragment>
            <div className={styles.project}>
                <div className={styles.project__second__layer}>
                    <div className={styles.project__second__layer_done}>
                        {props.projectDone}
                    </div>
                    <div className={styles.project__second__layer_title}>
                        <h3>{props.projectTitle}</h3>
                    </div>
                    <div className={styles.project__second__layer_description}>
                        <u>Area: {props.projectArea}</u><br/>
                    <i>{props.projectDescription}</i>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}