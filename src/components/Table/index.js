import React, {useEffect, useState} from 'react';
import styles from './Table.module.scss'
import {company, sortInfo, tableHeader} from "./json";
import Search from "../Search";


const searchHandler = (state, fn, searchArr) => {
    const {search, status} = state
    let array = []
    if (search !== '') {
        let i
        for (i = 0; i < searchArr.length; ++i)
            if (searchArr[i].title !== null &&
                (searchArr[i].title.toLowerCase().includes(search.toLowerCase()) ||
                    searchArr[i].title.toUpperCase().includes(search.toUpperCase()))) {
                array.push(searchArr[i])

            }
    } else {
        array = searchArr
    }
    if (status !== 'all') {
        array = array.filter(el => el.status === status)
    }
    fn(prev => ({...prev, sort: array}))
}

const SortButton = ({onClick, active}) => {
    return (<div className={styles.sort}>
        {sortInfo.map((el, i) => <div className={`${styles.sort_link} ${active === el.label ? styles.active : ''}`}
                                      key={`${el.title}-${i}`}
                                      onClick={() => onClick(el.label)}>{el.title}</div>)}
    </div>)
}

const List = ({arr}) => {
    return (
        <div className={styles.list}>
            <div className={styles.list__header}>
                {tableHeader.map(el => <span className={`${styles.list__caption} ${styles[el.id]}`}
                                             key={el.id}>{el.title}</span>)}
            </div>
            <div className={styles.list__body}>
                {arr.length !== 0 ? arr.map(el => (
                        <div className={`${styles.list__row}`} key={el.title}>
                            <div className={`${styles.list__box} ${styles.logo}`}>
                                <img src={'../../table-logo.svg'} alt=""/>
                            </div>
                            <div className={`${styles.list__box} ${styles.company}`}>{`Логин  ${el.title}`}
                            </div>
                            <div className={`${styles.list__box} ${styles.visitors}`}>{el.visitors}
                            </div>
                            <div className={`${styles.list__box} ${styles.transactions}`}>${el.transactions}
                            </div>
                            <div className={`${styles.list__box} ${styles.control}`}>
                                <img src={'../../control-icon.svg'} alt="" style={{marginRight: '24px'}}/>
                                <img src={'../../auth.svg'} alt=""/>
                            </div>
                        </div>))
                    : <div className={styles.empty}/>
                }
            </div>
        </div>
    )
}

const Table = () => {
    const [mainState, setMainState] = useState({
        sort: [],
        status: 'all',
        search: '',
        load: false,
    });

    useEffect(() => {
        setMainState(prev => ({...prev, load: true}))
    }, []);

    useEffect(() => {
        if (mainState.load) searchHandler(mainState, setMainState, company)
    }, [mainState.search, mainState.load, mainState.status]);

    return (
        <div className={styles.table}>
            <Search txt={'поиск компании'} className={styles.search}
                    onChange={(e) => setMainState(prev => ({...prev, search: e.target.value}))}/>
            <SortButton onClick={(e) => setMainState(prev => ({...prev, status: e}))} active={mainState.status}/>
            <List arr={mainState.sort}/>
        </div>
    );
};

export default Table;
