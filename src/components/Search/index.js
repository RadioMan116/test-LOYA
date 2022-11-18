import styles from "./Search.module.scss";
import React from "react";

 const Search = ({txt,className,onChange}) => {
    return (
        <label className={`${styles.search} ${className ? className : ''}`}>
            <input type="text" placeholder={txt} onChange={onChange}/>
        </label>
    )
}

export default Search
