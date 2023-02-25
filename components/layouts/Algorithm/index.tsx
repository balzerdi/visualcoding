import Link from 'next/link'
import styles from './index.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Algorithm = ({ title, github, description, sketch, code, tooltip='' } : {
    title: string,
    description: string,
    github: string,
    sketch: string,
    code: string,
    tooltip?: string,
}) => {

    return (
        <section className={styles.algorithm}>
            <div className='wrapper'>
                <section className={styles.hero} >
                    <div className={styles.imageContainer} style={{ backgroundImage: `url(${code})` }} />
                    <div className={styles.container}>
                        <h1 className={styles.title}>{ title }</h1>
                        <div className='row'>
                            <Link href='#sketch' scroll={false} className='button'>Show Sketch</Link>
                            <a href={github} target='_blank' className={styles.linkWithIcon}>
                                View Code on Github 
                                <GitHubIcon />
                            </a>
                        </div>
                        <p className={styles.description}>{ description }</p>
                    </div>
                </section>
                <section className={styles.sketch} id='sketch'>
                    <div>
                        <p>loading...</p>
                        <iframe src={sketch} width='100%' height='100%' />
                    </div>
                </section>
                { tooltip.length !== 0 && <p className={styles.tooltip}>{ tooltip }</p> }
            </div>
        </section>
    )
}

export default Algorithm