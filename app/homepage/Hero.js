import Image from 'next/image'
import styles from './hero.module.css'

function Hero() {
    return (
        <div className={styles.hero}>
            <Image
                src="/hero.png"
                alt="Hero Image"
                width={1438}
                height={527}
            />
        </div>
    )
}

export default Hero
