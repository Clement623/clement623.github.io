import styles from "./ProjectCard.module.css"
function ProjectCard({image, imageAlt, title, summary, tags, slug}) {
    return (
        <article className={styles.card}>
            <img src={image} alt={imageAlt} className={styles.imgCard}/>
            <h3>{title}</h3>
            <p className={styles.summary}>{summary}</p>
            <ul className={styles.tag}>
                {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </article>
    )
}
export default ProjectCard