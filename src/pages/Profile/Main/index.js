import React, { Component } from 'react'
import styles from './styles.css'

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.profile__description}>
                    <div className={styles.profile__description__left}>
                        <div className={styles.profile__description__left__main}>
                            <p><b>Age: </b>30</p>
                            <p><b>Location: </b>Kiev (Ukraine)</p>
                        </div>
                    </div>
                    <div className={styles.profile__description__right}>
                        <div className={styles.profile__description__right__other}>
                            <p><b>Hobbies: </b>GYM, Tennis, Running, Traveling and</p>
                            <p>Football - player and organizer of the team, amateur footbal league 11x11.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.profile__quote}>
                    <div className={styles.profile__quote_text}>
                        <p>" If you want to become better, and achieve your goals - act!<br/>
                        Most people think a lot, but only think ...<br/>
                        ACT! "</p>
                        <p className={styles.profile__quote_author}><i>Unknown author</i></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Main

/* Russian
Если хочешь стать лучше, достичь цели, добиться желаемого - действуй!
Большинство людей много думают, но только думают...
Действуй!*/
