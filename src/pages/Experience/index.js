import React, {Component} from 'react'
import styles from './styles.css'
import ExperienceYear from '../../components/experienceYear'

class Experience extends Component {
    render() {
        return (
            <div className={styles.experience}>
                <div className={styles.experience__header}>
                    <span><b>Nowadays</b></span>
                    <div className={styles.experience__header_arrow}></div>
                </div>
                <ExperienceYear year="2018" display="none" marginTop_block="0"
                                period="till now - April 2018, " company='IT / DIGITAL-Marketing:'
                                companyPosition="till now learning front-end/back-end, DIGITAL-Marketing finished in July." />
                <ExperienceYear year="2017"
                                period="2017 - July 2016, " company='Freelance, organization and development own projects:'
                                companyPosition="www.fima4u.com, amateur football league 11x11 in Kiev." />
                <ExperienceYear year="2016"
                                period="July 2016 - March 2016, " company='Morning Bakery:'
                                companyPosition="manager." />
                <ExperienceYear year="2015"
                                period="2015 - May 2014, " company='Organization and development own projects:'
                                companyPosition="Areas: www.fima4u.com, coffee-shop, reselling fresh vegetables and fruits, amateur football league 11x11 in Kiev." />
                <ExperienceYear year="2014"
                                period="May 2014 - May 2013, " company='Private enterprise "MARKOM":'
                                companyPosition="foreign trade accountant." />
                <ExperienceYear year="2013"
                                display="block" backgroundColor_divider="deepskyblue"
                                period="January 2013 - June 2011, " company='PJSC "UkrSibbank":'
                                companyPosition="personal financial consultant (grow from intern to PFC, third position)." />
                <div className={styles.experience__footer}>
                    {/*<div className={styles.experience__footer_arrow}></div>*/}
                    <span><b>Education</b></span>
                </div>
            </div>
        )
    }
}
export default Experience