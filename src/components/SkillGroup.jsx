function SkillGroup({title, skills}) {
    return (
        <div>
            <h4>{title}</h4>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default SkillGroup