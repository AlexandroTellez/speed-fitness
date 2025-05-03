import styles from './products.module.css';
import Link from 'next/link';

export default function Products() {
    return (
        <div className={styles.products}>
            <div className={`${styles.wrapper} container`}>
                <h2>Highest Rated Products</h2>
                <p>Check out below a curated list of the products that received the highest
                    ratings from our customers</p>
                <ul className={styles['product-list']}>
                    <p> Product go here</p>
                </ul>
                <Link href="/products">
                <button> View all products</button>
                </Link>
            </div>
        </div>
    )
}
