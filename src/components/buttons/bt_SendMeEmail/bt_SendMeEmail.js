import React, {Component} from 'react'
import styles from './styles.css'

class bt_SendMeEmail extends Component {
    render() {
        return (
            <input value="send me EMAIL" className={styles.bt_SendMeEmail} onclick="showSendForm">
            </input>
        )
    }
}
export default bt_SendMeEmail