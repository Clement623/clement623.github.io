import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
import styles from "./ProjectGrid.module.css"
function ProjectGrid() {
    return (
        <section id="projets" className={styles.corps}>
            <h2>Mes projets</h2>
            <p>phrase d'accroche</p>
            <ul className={styles.grille}>
                {projects.map((project) => (
                    <li key={project.slug}>
                        <ProjectCard {...project}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default ProjectGrid