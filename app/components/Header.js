'use client';

import { useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.appHeader}>
            <div className={`${styles.wrapper} container`}>

                {/* Logo + Title*/}
                <div className={styles.logoSection}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/logo.png"
                            alt="Website Logo"
                            width={50}
                            height={50}
                            className={styles.logoImage}
                        />
                        <span className={styles.siteTitle}>Speed Fitness</span>
                    </Link>
                </div>

                {/* Hamburger button on mobile phones */}
                <button className={styles.burgerButton} onClick={() => setIsOpen(!isOpen)}>
                    <div className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}></div>
                </button>

                {/* Navigation menu*/}
                <nav className={`${styles.navSection} ${isOpen ? styles.showNav : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="/" className={styles.navItemLink}>Home</Link></li>
                        <li><Link href="/products" className={styles.navItemLink}>Products</Link></li>
                        <li><Link href="/running" className={styles.navItemLink}>Shopping Bag</Link></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;
