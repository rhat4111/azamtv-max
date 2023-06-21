import { useState } from "react";
import { Input } from "antd";
import Router from "next/router";
import styles from "./search.module.scss";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className={styles.search}>
      <Input
        prefix={<img src="/images/icons/search.svg" />}
        className={styles.textField}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search"
        onKeyDown={(e) => e.keyCode === 13 && Router.push("/search")}
      />
      {keyword && (
        <img
          src="/images/icons/close.svg"
          className={styles.clear}
          onClick={() => setKeyword("")}
        />
      )}
    </div>
  );
};

export default Search;
