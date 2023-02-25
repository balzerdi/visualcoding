import Card from '@/components/modules/Card'
import styles from '@/styles/Home.module.css'

export default function About() {

    return (
        <main className={styles.main}>
            <section className={styles.algorithms}>
                <h2 className={styles.subtitle}>Algorithms</h2>
                <p className={`${styles.body}`}>
                    In Lucas Vogel&apos;s &quot;Visual Stories with Code and Data&quot; course, we took our<br/>
                    first steps in web development and explored the endless possibilities of<br/>
                    creating astonishing data-driven visualizations with <a href="https://p5js.org/" target='_blank'>p5.js</a>.<br/>
                    <br/>
                    As part of the course, we developed several creative algorithms to unite<br/>
                    code and art. Below you can see the fruits of the hard labor.
                </p>
                <div className={styles.grid}>
                    <Card 
                        image='/map.jpg'
                        title='Map Generator'
                        description='Thanks to the Perlin Noise Algorithm, this program generates a map that can be used primarily as inspiration for fantasy worlds.'
                        target='/algorithm/map-generator'
                    />
                    <Card 
                        image='/bikes.jpg'
                        title='Stolen Bikes'
                        description='How many and which bicycles were stolen in Berlin in November 2022. Find out with this interactive graphic!'
                        target='/algorithm/stolen-bikes'
                    />
                    <Card 
                        image='/tic-tac-toe.jpg'
                        title='Tic Tac Toe'
                        description='Think outside the Tic-Tac-Toe box and explore the endless points and curves of deformed color blobs.'
                        target='/algorithm/tic-tac-toe'
                    />
                    <Card 
                        image='/sunmoon.jpg'
                        title='Sun and Moon'
                        description='Day and night have never been closer than in the first steps of programming in the course.'
                        target='/algorithm/sun-and-moon'
                    />
                </div>
            </section>
        </main>
    )
}