import React from 'react'
import styles from './styles.css'

export default function CreateIndicator(props) {
    return (
        <div className={styles.indicator}>
            <h4 className={styles.indicator_title}>{props.indicator_title}</h4>
            <div className={styles.meter}>
                <span style={{ width : props.indicator_level}}>{props.indicator_level}</span>
            </div>
        </div>

    )
}