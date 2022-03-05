import { Icon } from "..";
import styles from "./SearchForm.module.scss";

export const SearchForm = () => {
  return (
    <form className={styles.search}>
      <label htmlFor="search">
        Search for a user <Icon.GitHub className={styles.githubIcon} />
      </label>
      <div className={styles.searchBar}>
        <input type="search" name="search" id="search" />
        <button type="submit">
          <Icon.Search />
        </button>
      </div>
    </form>
  );
};
