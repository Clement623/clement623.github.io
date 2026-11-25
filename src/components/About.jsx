import SkillGroup from "./SkillGroup"
function About() {
    return (
        <section id="a-propos">
            <h2>À propos</h2>
            <p>Présentation en queques lignes</p>
            <h3>Compétences</h3>
            <ul>
                <li><SkillGroup 
                    title="Langages"
                    skills={["HTML","CSS", "JavaScript"]}
                    />
                </li>
                <li><SkillGroup 
                    title="Bibliothèques et outils"
                    skills={["REACT","Vite", "Git/Github"," Figma"]}
                    />
                </li>
                <li><SkillGroup 
                    title="en cours d'apprentissage"
                    skills={["TypeScript","C#"]}
                    />
                </li>
            </ul>
        </section>
    )
}

export default About