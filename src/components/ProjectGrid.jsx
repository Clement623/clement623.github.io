import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects"
function ProjectGrid() {
    return (
        <section id="projets">
            <h2>Mes projets</h2>
            <p>phrase d'accroche</p>
            <ul>
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