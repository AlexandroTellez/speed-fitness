import styles from './header.module.css'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (

        <header className={styles['app-header']}>
            <div className={`${styles.wrapper} container`}>

                <aside>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Website Logo"
                            width={150}
                            height={150}
                        />
                    </Link>
                </aside>

                <aside>
                    <nav>
                        <ul>
                            <Link href="/"><li>Home</li></Link>
                            <Link href="/products"><li>Products</li></Link>
                            <Link href="/running"><li>Shopping Bag</li></Link>
                        </ul>
                    </nav>
                </aside>

            </div>
        </header>
    )
}

export default Header
