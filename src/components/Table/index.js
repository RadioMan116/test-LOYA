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

const Edit = ( ) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2.05458C16.0005 1.64834 15.8787 1.25111 15.65 0.913192C15.4214 0.575273 15.0962 0.311871 14.7157 0.156349C14.3351 0.000827191 13.9164 -0.0398177 13.5124 0.0395625C13.1084 0.118943 12.7374 0.314777 12.4463 0.60226L2.6873 10.2263C2.62295 10.2898 2.57711 10.3692 2.55458 10.4562L1.74416 13.5865C1.72184 13.6727 1.72325 13.7632 1.74823 13.8486C1.7732 13.9341 1.82085 14.0115 1.88625 14.0727C1.95165 14.134 2.03243 14.1769 2.12027 14.1971C2.20811 14.2173 2.29981 14.214 2.38593 14.1875L5.42507 13.2551C5.5035 13.231 5.57482 13.1885 5.63291 13.1312L15.392 3.50705C15.5856 3.31662 15.7391 3.09019 15.8435 2.84088C15.9479 2.59156 16.0011 2.3243 16 2.05458ZM5.00445 12.337L2.95094 12.9671L3.50254 10.8364L12.0428 2.41409L13.5546 3.9049L5.00445 12.337ZM14.6751 2.80006L14.2715 3.198L12.7597 1.70707L13.1632 1.30912C13.3637 1.11141 13.6356 1.00034 13.9191 1.00034C14.2027 1.00034 14.4746 1.11141 14.6751 1.30912C14.8755 1.50684 14.9882 1.77499 14.9882 2.05459C14.9882 2.3342 14.8755 2.60235 14.6751 2.80006ZM10.9585 16H0.50693C0.372484 16 0.243544 15.9473 0.148476 15.8536C0.0534086 15.7598 0 15.6327 0 15.5001C0 15.3675 0.0534086 15.2403 0.148476 15.1466C0.243544 15.0528 0.372484 15.0001 0.50693 15.0001H10.9585C11.0929 15.0001 11.2219 15.0528 11.3169 15.1466C11.412 15.2403 11.4654 15.3675 11.4654 15.5001C11.4654 15.6327 11.412 15.7598 11.3169 15.8536C11.2219 15.9473 11.0929 16 10.9585 16Z" fill="#969494"/>
    </svg>
);

const Schedule = ( ) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7061 4.25261L10.7058 4.25263C10.3996 4.27396 10.1421 4.04914 10.1208 3.75154L10.1208 3.75099L10.1207 3.75045C10.0967 3.44911 10.3235 3.18779 10.6219 3.16647L10.6222 3.16645L14.4169 2.88093L14.4172 2.88091C14.7185 2.85691 14.9798 3.08362 15.0012 3.38207L15.0012 3.38258L15.2867 7.17677L15.2867 7.17706L15.2867 7.17735C15.3106 7.47758 15.085 7.73715 14.7846 7.7614C14.7212 7.76622 14.5769 7.75113 14.4479 7.677C14.3265 7.60722 14.2168 7.48509 14.2005 7.26008L14.0098 4.73024L9.29942 11.4846L9.29902 11.4852C9.20512 11.6163 9.06059 11.6992 8.90275 11.7152L8.90177 11.7153L8.9008 11.7154C8.74408 11.7337 8.58674 11.6765 8.47021 11.5655L8.47005 11.5653L5.64552 8.84104L2.99685 12.7111C2.83451 12.9143 2.66919 12.9588 2.53846 12.9544C2.39805 12.9497 2.2813 12.8875 2.23612 12.8565C1.98741 12.6852 1.92396 12.3462 2.09444 12.0985L5.11206 7.68994L5.11229 7.6896C5.20298 7.55623 5.34681 7.47096 5.50699 7.45494L5.50821 7.45482L5.50942 7.45468C5.66424 7.43631 5.82387 7.49149 5.93876 7.6037L5.93905 7.60399L8.77004 10.3347L13.142 4.06897L10.7061 4.25261ZM1.0888 0.544398V14.9112H15.4556C15.7574 14.9112 16 15.1538 16 15.4556C16 15.7574 15.7574 16 15.4556 16H0.544398C0.242627 16 0 15.7574 0 15.4556V0.544398C0 0.242627 0.242627 0 0.544398 0C0.84617 0 1.0888 0.242627 1.0888 0.544398Z" fill="#969494"/>
    </svg>
);

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
                                <div className={styles.control__icon}>
                                    <Edit/>
                                </div>
                                <div className={styles.control__icon}>
                                   <Schedule/>
                                </div>
                                <a href="#" className={styles.control__auth}>Авторизоваться</a>
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
