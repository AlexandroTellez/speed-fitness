import styles from './categories.module.css';

export default function Categories() {
    return (
        <div className={styles.categories}>

            <h2>Our Categories</h2>
            <ul className={`${styles.wrapper} container`}>
                <li className={styles.category}> Running Apparel </li>
                <li className={styles.category}> Running Shoes </li>
                <li className={styles.category}> Running Accessories </li>
            </ul>

        </div>
    )
}

