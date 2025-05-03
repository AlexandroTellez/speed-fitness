import styles from './categories.module.css';

export default function Categories() {
    return (
        <div className={styles.categories}>

            <h2>Our Categories</h2>
            <ul className={`${styles.wrapper} container`}>
                <li className={styles.category}> Clothes </li>
                <li className={styles.category}> Shoes </li>
                <li className={styles.category}> Accessories </li>
            </ul>

        </div>
    )
}

