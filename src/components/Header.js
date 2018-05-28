import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "react-emotion";

const styles = {
  navigation: css`
    width: 100%;
    text-align: right;
    display: flex;
    align-items: center;
    background: #6b6b6b0d;
    ul {
      flex: 1;
    }
    label: navigation;
  `,
  listItem: css`
    list-style: none;
    display: inline-block;
    height: 4.28em;
    line-height: 4.28em;
    list-style: none;
    background: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: none;
    overflow: hidden;
    text-align: center;
    label: listItem;
  `,
  icon: css`
    display: none !important;
  `,
  link: css`
    display: inline-block;
    text-decoration: none;
    padding: 0 20px;
    background: #bfbfbf;
    color: #fff;
    margin-right: 10px;
    min-width: 70px;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s ease;
    label: link;
    &:hover {
      background: #3fa99c;
    }
  `,
  activeLink: css`
    background: #49c5b6;
    &:hover {
      background: #3fa99c;
    }
  `,
  logo: css`
    flex: 1;
    text-align: left;
    font-size: 2.3rem;
    font-weight: 800;
    text-decoration: underline;
    font-style: italic;
    padding-left: 10px;
    label: logo;
    @media (max-width: 480px) {
      display: none;
    }
  `
};

const Header = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <span className={styles.logo}>Brandsintown search</span>
        <ul>
          <li className={styles.listItem}>
            <NavLink
              to="/"
              exact
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              <span>Search</span>
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink
              to="/favorite"
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              <span>Favorites</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
