import React from 'react'
import styles from './styles.css'

export default function ExperienceYear(props) {
    return (
        <React.Fragment>
        <div className={styles.experience__2013__img_divider} style={{ display : props.display, backgroundColor: props.backgroundColor_divider}}></div>
        <div className={styles.experience__2013} style={{ marginTop: props.marginTop_block}}>
            <div className={styles.experience__2013__year}>{props.year}</div>
            <div className={styles.experience__2013__img}>
                <div className={styles.experience__2013__img_cylinder} style={{ backgroundColor: props.backgroundColor_cylinder, backgroundColorHover: 'red'}}></div>
            </div>
            <div className={styles.experience__2013__description}>
                <p><i><b>{props.period}</b><u>{props.company}</u></i><br/>
                    {props.companyPosition}
                </p>
            </div>
        </div>
        </React.Fragment>
    )
}