import styles from "./Hero.module.css"
function Hero() {
    return (
        <section className={styles.corps}>
            <div className={styles.blocGauche}>
            <p>Développeur web</p>
            <h1>Bonjour, je suis Clément Adrot</h1>
            <p>phrase d'accroche</p>
            <ul className={styles.menu}>
                <li><a href="#projets" className={styles.buttonProjet}>Voir mes projets</a></li>
                <li><a href="#contact" className={styles.buttonContact}>Me contacter</a></li>
            </ul>
            </div>
            <img src="/images/photo-profil.jpeg" alt="Photo de profil" className={styles.pdp} />
        </section>
    )
}

export default Hero