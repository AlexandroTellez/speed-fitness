import styles from './footer.module.css';

function Footer() {
    return (
        <footer className={styles[`app-footer`]}>
            &copy; {new Date().getFullYear()} Speed Fitness. All rights reserved.
        </footer>
    )
}

export default Footer

