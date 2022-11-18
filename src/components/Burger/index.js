import React, {useState} from 'react';
import styles from './Burger.module.scss'

const Burger = () => {
    const [state, setState] = useState(false);
    return (
        <div className={`${styles.burger} ${state ? styles.open : ''}`} onClick={()=>setState(prev=>!prev)}>
            {[...Array(4)].map((x,i) =>  <span key={i}/>)}
        </div>
    );
};

export default Burger;
