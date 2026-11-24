function ProjectCard({image, imageAlt, title, summary, tags, slug}) {
    return (
        <article>
            <img src={image} alt={imageAlt}/>
            <h3>{title}</h3>
            <p>{summary}</p>
            <ul>
                {tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </article>
    )
}
export default ProjectCard