import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Card from '@/components/modules/Card'

export default function Home() {
	return (
		<>
			<Head>
				<title>Visual Coding</title>
				<meta name="description" content="Turning Code and Data into Visual Stories" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<section className={styles.hero}>
					<h1 className={styles.title}>Turning Code and Data<br/> into Visual Stories</h1>
					<p className={`${styles.body} ${styles.dark}`}>Hi, my name is Dimitri Balzer. 👋<br/>I'm an interface design student at the FH;P.<br/>This website showcases my creative algorithms.</p>
					<div className='row'>
						<Link href='/algorithm' scroll={false} className='button'>Have a look</Link>
						<Link href='/about' className='dark'>
							Learn more
						</Link>
					</div>
				</section>
				<section className={styles.algorithms}>
					<h2 className={styles.subtitle}>Algorithms</h2>
					<p className={`${styles.body}`}>
						In Lucas Vogel's "Visual Stories with Code and Data" course, we took our<br/>
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
		</>
	)
}
