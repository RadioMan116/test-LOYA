import React from 'react';
import styles from './Header.module.scss'
import Burger from "../Burger";
import Search from "../Search";


const Header = () => {
    return (
        <header className={styles.header}>
            <Burger/>
            <img src={'../../logo.svg'} alt="" className={styles.logo}/>
            <Search txt={'поиск по номеру телефона, имени'} className={styles.search}/>
            <img src={'../../lang.svg'} className={styles.lang} alt=""/>
            <img src={'../../social.svg'} className={styles.social} alt=""/>
            <img src={'../../personal.svg'} className={styles.personal} alt=""/>
        </header>
    );
};

export default Header;
