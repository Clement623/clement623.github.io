import ProjectCard from "./ProjectCard"
function ProjectGrid() {
    return (
        <section id="projets">
            <h2>Mes projets</h2>
            <p>phrase d'accroche</p>
            <ul>
                <li><ProjectCard
                    image="/images/"
                    imageAlt="Photo projet1"
                    title="Projet1"
                    summary="résumé projet"
                    tags={["skill1", "skill2", "skill3"]}
                    />
                </li>
                <li><ProjectCard
                    image="/images/"
                    imageAlt="Photo projet2"
                    title="Projet2"
                    summary="résumé projet"
                    tags={["skill1", "skill2", "skill3"]}/>
                </li>
                <li><ProjectCard
                    image="/images/"
                    imageAlt="Photo projet3"
                    title="Projet3"
                    summary="résumé projet"
                    tags={["skill1", "skill2", "skill3"]}/>
                </li>
            </ul>
        </section>
    )
}
export default ProjectGrid