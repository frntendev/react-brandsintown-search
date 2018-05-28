import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import ArtistCard from "./ArtistCard";
import EventCard from "./EventCard";

const styles = {
  root: css`
    width: 80%;
    margin: 0 auto;
    label: root;
    @media (max-width: 758px) {
      width: 95%;
    }
  `
};

class ArtistDetails extends React.Component {
  handleSaveEvent = data => {
    this.props.onSaveEvent(data);
  };

  render() {
    const props = this.props;
    const { artist, events } = props.data;
    return (
      <div className={styles.root}>
        {artist && (
          <ArtistCard
            image={artist.image_url}
            name={artist.name}
            detailsInfo={[artist.facebook_page_url, artist.url, artist.id]}
            url={artist.url}
          />
        )}
        {events && (
          <div>
            {events.map((item, index) => {
              const id = item.id;
              const dateTime = new Date(item.datetime);
              const year = dateTime.getFullYear();
              const month = dateTime.getMonth() + 1;
              const day = dateTime.getDate();
              const date = `${year}-${month}-${day}`;
              const city = item.venue.city;
              const url = item.url;
              const country = item.venue.country;
              const currentEvent = {
                [id]: {
                  id: id,
                  name: artist.name,
                  imageUrl: artist.image_url,
                  country,
                  date,
                  city,
                  url
                }
              };
              return (
                <EventCard
                  key={`event-${index}`}
                  country={country}
                  city={city}
                  date={date}
                  url={url}
                  onSaveEvent={() => this.handleSaveEvent(currentEvent)}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ArtistDetails;

ArtistDetails.propTypes = {
  /**
   * A callback function to save the favorite event
   */
  onSaveEvent: PropTypes.func,
  /**
   * An object that contains artist details and events information
   * It contains `artist` and `events` objects
   */
  data: PropTypes.object.isRequired
};
