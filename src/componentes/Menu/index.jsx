
import { Link, useLocation } from 'react-router-dom'
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';
export default function(){
    

    

    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to='/'>
                    Inicio
                </MenuLink>
                <MenuLink to= 'sobremim'>
                    Sobre Mim 
                </MenuLink>
                
            </nav>
        </header>    
    )
}