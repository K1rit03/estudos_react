import styles from './Post.module.css'

export default function Post(post) {
    return(
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt='imagem de capa do post'
            />
        </div>
    )
}