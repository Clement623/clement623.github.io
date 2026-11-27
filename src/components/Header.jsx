import styles from "./Header.module.css"
function Header() {
    return (
    <header className={styles.head}>
        <p>Clément Adrot</p>
        <nav>
            <ul className={styles.menu}>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#a-propos">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> 
        </nav>
    </header>)
}
export default Header