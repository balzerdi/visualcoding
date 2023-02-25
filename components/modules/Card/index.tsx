import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

const Card = ({image, title, description, target} : {
    image: string,
    title: string,
    description: string
    target: string
}) => {

    return (
        <Link href={target} className={styles.container}>
            <Image src={image} width={500} height={300} alt={description} />
            <h3>{ title }</h3>
            <p>{ description }</p>
        </Link>
    )
}

export default Card