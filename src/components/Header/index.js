import React, {useState} from 'react';
import styles from './Header.module.scss'
import Burger from "../Burger";
import Search from "../Search";
import Select from "react-select";

const lang = [
    {value: 'Ru', label: 'Ru'},
    {value: 'En', label: 'En'},
    {value: 'Kz', label: 'Kz'}
]

const Ellipsis = ({bg,circle} ) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="23.9998" width="24" height="24" rx="4" transform="rotate(-180 24 23.9998)" fill='#FCFCFC'/>
        <circle r="1.5" transform="matrix(-1 -9.7641e-08 -7.82739e-08 1 18.5 11.4998)" fill={'#585757'}/>
        <circle r="1.5" transform="matrix(-1 -9.7641e-08 -7.82739e-08 1 12.5 11.4998)" fill={'#585757'}/>
        <circle r="1.5" transform="matrix(-1 -9.7641e-08 -7.82739e-08 1 6.5 11.4998)" fill={'#585757'}/>
    </svg>
);

const Header = () => {
    const [state, setState] = useState({
        lang: null,
        personal: false
    });


    return (
        <header className={styles.header}>
            <Burger/>
            <img src={'../../logo.svg'} alt="" className={styles.logo}/>
            <Search txt={'поиск по номеру телефона, имени'} className={styles.search}/>
            <Select options={lang} placeholder={'Ru'} value={state.lang} onChange={(e) => {
                setState(prev => ({...prev, lang: e.target}))
            }} className={styles.lang} classNamePrefix={'lang'}/>
            <div className={styles.social}>
                <a href="#">
                    <img src={'../../question.svg'} alt=""/>
                </a>
                <a href="#">
                    <img src={'../../message.svg'} alt=""/>
                </a>
                <a href="#">
                    <img src={'../../api.svg'} alt=""/>
                </a>
            </div>
            <div className={styles.personal}>
                <img src={'../../personal.svg'} alt=""/>
                <div className={`${styles.personal__button} ${state.personal ? styles.active : ''}`}
                     onClick={() => setState(prevState => ({...prevState, personal: !prevState.personal}))}>
                    <Ellipsis bg={'#FCFCFC'} circle={'#585757'}/>
                </div>
                {state.personal && <div className={styles.personal__menu}>
                    <span>
                        Menu
                    </span>
                </div>}
            </div>
        </header>
    );
};

export default Header;
