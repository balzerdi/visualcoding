import styles from '@/styles/About.module.css'

export default function About() {

    return (
        <section className={styles.about}>
            <div className='wrapper'>
                <div className={styles.container}>
                    <h1 className={styles.title}>About me and stuff</h1>
                    <p>
                        During the winter of 2022/23, my fellow students and I<br/>
                        created several small projects using p5.js,<br/>
                        learning the basics of HTML, CSS, and JavaScript.<br/>
                        This website is a small library of the projects I created.<br/>
                        <br/>
                        Structuring data and visualizing it in an interesting way<br/>
                        while clearly communicating the information and<br/>
                        its meaning has always fascinated me.<br/>
                        <br/>
                        Even though I would consider myself more of an<br/>
                        advanced web developer (at the time of writing this paragraph),<br/>
                        it&apos;s always fascinating to take another look at the basics and<br/>
                        discuss different approaches with other experts.<br/>
                        <br/>
                        I hope to dive deeper in to data science and how to<br/>
                        represent information by telling a visual story.
                    </p>
                </div>
            </div>
        </section>
    )
}