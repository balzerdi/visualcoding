import styles from './index.module.css'


const Header = () => 
        <footer className={styles.footer}>
            <div className='wrapper'>
                <p>Copyright © {new Date().getFullYear()} Dimitri Balzer - All Rights Reserved.</p>
            </div>
        </footer>

export default Header