import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const styles = {
  event: css`
    display: flex;
    min-height: 50px;
    background: #eeeeee85;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    transition: 0.3s all ease;
    text-align: center;
    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
    label: event-root;
  `,
  eventText: css`
    flex: 1;
    font-size: 1.2rem;
    color: #545454;
    label: eventText;
    @media (max-width: 758px) {
      font-size: 1rem;
    }
  `,
  eventLink: css`
    background: #48c5b6;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 10px;
    white-space: pre;
    transition: 0.3s all ease;
    margin-left: 5px;
    cursor: pointer;
    label: eventLink;
    @media (max-width: 758px) {
      font-size: 1rem;
    }
    &:hover {
      background: #3fa99c;
    }
  `
};
const EventCard = props => {
  return (
    <div className={styles.event}>
      <span className={styles.eventText}>
        <strong>{props.country}</strong>
      </span>
      <span className={styles.eventText}>{props.city}</span>
      <span className={styles.eventText}>{props.date}</span>
      <span className={styles.eventLink} onClick={props.onSaveEvent}>
        Save
      </span>
      <a className={styles.eventLink} href={props.url} target="_blank">
        Book
      </a>
    </div>
  );
};

export default EventCard;

EventCard.defaultProps = {
  country: "Iran",
  city: "Tehran",
  date: "1-1-2018"
};

EventCard.propTypes = {
  /**
   * The country of an event
   */
  country: PropTypes.string.isRequired,
  /**
   * The city of an event
   */
  city: PropTypes.string.isRequired,
  /**
   * The date of an event
   */
  date: PropTypes.string.isRequired,
  /**
   * The url of an event
   */
  url: PropTypes.string,
  /**
   * A callback function that saves the favorite event
   */
  onSaveEvent: PropTypes.func
};
