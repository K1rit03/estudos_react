import styles from './Banner.module.css';
import circuloColorido from '../../assets/Banner/circulo_colorido.png';
import minhaFoto from '../../assets/Banner/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo</h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Thiago Oliveira, Estudante de Engenharia de Software da FIAP. Aqui compartilho meu progresso, espero que aproveitem.
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Círculo colorido decorativo"
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto da pessoa'
                />
            </div>
        </div>
    );
}
