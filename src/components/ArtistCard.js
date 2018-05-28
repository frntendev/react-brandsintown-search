import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const styles = {
  root: css`
    display: flex;
    position: relative;
    width: 100%;
    height: 400px;
    background: #eeeeee85;
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin-bottom: 20px;
    transition: 0.3s all ease;
    overflow: hidden;
    label: artistRoot;
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
    @media (max-width: 758px) {
      flex-flow: column;
      height: auto;
    }
  `,
  icon: css`
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 15px;
    fill: #48c5b6;
    cursor: pointer;
  `,
  artistImage: css`
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    border-radius: 4px;
    overflow: hidden;
    background: #dcdcdc;
    label: artistImage;
    @media (max-width: 758px) {
      height: 300px;
    }
    img {
      @media (max-width: 480px) {
        width: 100%;
      }
    }
  `,
  artistDetails: css`
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    label: artistDetails;
    @media (max-width: 758px) {
      margin-top: 20px;
    }
    span {
      font-size: 1.5rem;
      color: #545454;
      font-style: italic;
      margin-left: 20px;
      @media (max-width: 758px) {
        font-size: 1rem;
        padding: 5px;
      }
    }
  `
};

const ArtistCard = props => {
  return (
    <div id="artist-card" className={styles.root}>
      {props.showClose && (
        <svg
          className={styles.icon}
          viewBox="0 0 16 16"
          onClick={() => props.onClose(props.id)}
        >
          <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z" />
        </svg>
      )}
      <div className={styles.artistImage}>
        <a href={props.url} target="_blank">
          <img src={props.image} alt={props.name} />
        </a>
      </div>
      <div className={styles.artistDetails}>
        <span>
          <strong>{props.name}</strong>
        </span>
        {props.detailsInfo.map((item, index) => {
          return <span key={`detailsInfo-${index}`}>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default ArtistCard;

ArtistCard.defaultProps = {
  showClose: false,
  id: "1"
};

ArtistCard.propTypes = {
  /**
   * To show close icon at the top of the component
   */
  showClose: PropTypes.bool,
  /**
   * Callback function after clicking on close icon
   */
  onClose: PropTypes.func,
  /**
   * Name of the artist
   */
  name: PropTypes.string,
  /**
   * ID of the artist
   */
  id: PropTypes.string.isRequired,
  /**
   * Image of the artist
   */
  image: PropTypes.string,
  /**
   * Extra details of an artist
   * It's an array that contains some strings
   */
  detailsInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Page url of the artist on Brandsintown
   */
  url: PropTypes.string
};
