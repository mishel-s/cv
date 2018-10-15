import React, {Component} from 'react'
import styles from './styles.css'
import logoemail from '../Menu/logoemail.png'
import logofb from '../Menu/logofb.png'
import logogithub from '../Menu/logogithub.png'
import logophone from '../Menu/logophone.png'

class Contacts extends Component {
    render() {
        return (
            <div className={styles.contacts}>
                <div className={styles.contacts__main}>
                    <h3 className={styles.contacts__main_title}>HAVE A GOOD MOOD</h3>
                    <hr/>
                    <div className={styles.contacts__main__description}>
                        <div className={styles.contacts__main__description_info}>
                            <a target="_blank" rel="noopener noreferrer" href="mailto:s_mishel_s@ukr.net">
                                <p className={styles.email}><img src={logoemail} className={styles.logoemail} alt="email" />s_mishel_s@ukr.net</p>
                            </a>
                            <a href="https://www.facebook.com/mishel.savastru" target="_blank" rel="noopener noreferrer">
                                <p className={styles.fb}><img src={logofb} className={styles.logofb} alt="fb" />facebook.com/mishel.savastru</p>
                            </a>
                            <a href="https://github.com/mishel-s" target="_blank" rel="noopener noreferrer">
                                <p className={styles.github}><img src={logogithub} className={styles.logogithub} alt="github" />github.com/mishel-s</p>
                            </a>
                            <a href="tel:+380934366454" target="_blank" rel="noopener noreferrer">
                                <p className={styles.phone}><img src={logophone} className={styles.logophone} alt="phone" />+38 (093) 436-64-54</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contacts