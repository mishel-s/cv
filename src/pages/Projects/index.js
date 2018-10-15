import React, {Component} from 'react'
import styles from './styles.css'
import ProjectCard from '../../components/projectsCards'

class Projects extends Component {
    render() {
        return (
            <div className={styles.projects}>
                <div className={styles.projects_line}>
                    <ProjectCard projectDone="in developing" projectTitle="www.metal-site.com" projectArea="build-materials and metalware" projectDescription="HTML, CSS, JS, REACT, REDUX"/>
                    <ProjectCard projectDone="in developing" projectTitle="www.new-site.com" projectArea="Accountant and consulting" projectDescription="HTML, CSS, JS, JQuery, Bootstrap"/>
               </div>
                <div className={styles.projects_line}>
                    <ProjectCard projectDone="in developing" projectTitle="www.sport-site.com" projectArea="sports goods and equipment" projectDescription="HTML, CSS, JS, REACT"/>
                    <ProjectCard projectDone="in developing" projectTitle="www.Personal-site.com" projectArea="lawyer and legal activity" projectDescription="HTML, CSS, JS, REACT"/>
                </div>
            </div>
        )
    }
}
export default Projects