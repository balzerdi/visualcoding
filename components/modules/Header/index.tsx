import Link from 'next/link'
import styles from './index.module.css'


const Header = ({ light=false } : { light?: boolean }) => {

    return (
        <header className={`${styles.header} ${light && styles.light}`}>
            <div className='wrapper'>
                <Link href='/' className={styles.logo}>Visual Coding</Link>
                <ul>
                    <li><Link href='/algorithm'>Algorithms</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><a href='https://github.com/balzerdi/visualcoding.git' target='_blank'>Github</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header