import styles from "./search.module.css";

function Search() {
    return (
        <div className={styles.inputCastom}>
            <input  type="text"  placeholder="Поиск по сайту" name="search"  autocomplete="off" />
        </div>
    );
  } 
  
  export default Search;
  