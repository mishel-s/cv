import React, {Component} from 'react'
import styles from './styles.css'
import CreateIndicator from '../../components/skillsIndicators/skillsIndicator.js'

class Skills extends Component {
    render() {
        return (
            <div className={styles.all__skills}>
                <div className={styles.all__skills__it}>
                    <h3 className={styles.all__skills__it_title}>IT</h3>
                    <hr/>
                    <div className={styles.all__skills__it__description}>
                        <div className={styles.all__skills__it__description_left}>
                            <CreateIndicator indicator_title="HTML" indicator_level="70%" />
                            <CreateIndicator indicator_title="CSS" indicator_level="70%" />
                            <CreateIndicator indicator_title="JavaScript" indicator_level="70%" />
                            <CreateIndicator indicator_title="JQuery" indicator_level="70%" />
                            <CreateIndicator indicator_title="Bootstrap" indicator_level="70%" />
                            <CreateIndicator indicator_title="React" indicator_level="60%" />
                            <CreateIndicator indicator_title="Vue" indicator_level="30%" />
                        </div>
                        <div className={styles.all__skills__it__description_right}>
                            <CreateIndicator indicator_title="BEM, ES5, ES6" indicator_level="70%" />
                            <CreateIndicator indicator_title="npm, Git, SASS" indicator_level="70%" />
                            <CreateIndicator indicator_title="Grunt, Gulp, Webpack" indicator_level="60%" />
                            <CreateIndicator indicator_title="Ajax/Fetch" indicator_level="70%" />
                        </div>
                    </div>
                </div>
                <div className={styles.all__skills__other}>
                    <h3 className={styles.all__skills__other_title}>OTHER</h3>
                    <hr/>
                    <div className={styles.all__skills__other__description}>
                        <b>Languages:</b>
                        <p>Russian - high (fluent);</p>
                        <p>Ukrainian - high (free);</p>
                        <p>English - Intermediate.</p>
                        <b>Courses:</b>
                        <p><i><b>Since May – till now,</b> <u>DITS (https://deutsche-it-schule.de):</u></i>
                            <br/>the course covers front-end and back-end development.
                        </p>
                        <p><i><b>April - July 2018,</b> <u>DIGITAL-Marketing (by Genius Marketing):</u></i>
                            <br/>passed and successfully defended the Internet marketing strategy for one of the Genius Marketing partners.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Skills