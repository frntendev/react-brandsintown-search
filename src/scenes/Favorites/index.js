import React from "react";
import { css } from "react-emotion";
import ArtistCard from "../../components/ArtistCard";
import { getFavorites, removeFavorite } from "../../helpers";
import MessageBox from "../../components/MessageBox";

const styles = {
  root: css`
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
    label: root;
    @media (max-width: 480px) {
      width: 95%;
    }
  `
};

class Favorites extends React.Component {
  // Initial state that contains favorites
  // Favorites can be either an empty object or an object with cached favorites 
  state = { favorites: getFavorites() || {} };

  // A function that handle `OnClose` event on `ArtistCard` component
  // And removes an event from localStorage
  handleClose = id => {
    removeFavorite(id);
    this.setState({
      favorites: getFavorites()
    });
  };

  // Rendering the user favorite events based on component state
  // If there is no favorite event then show `MessageBox` component
  renderFavorites = () => {
    let favorites = [];
    const array = Object.keys(this.state.favorites).map(
      itm => this.state.favorites[itm]
    );
    if (array.length > 0)
      Object.values(this.state.favorites).map((item, index) => {
        return favorites.push(
          <ArtistCard
            key={`artist-card-${item.id}`}
            id={item.id}
            image={item.imageUrl}
            name={item.name}
            url={item.url}
            detailsInfo={[item.date, item.city, item.id]}
            showClose
            onClose={this.handleClose}
          />
        );
      });
    else {
      favorites.push(
        <MessageBox
          key="message"
          text="You have not added a favorite event yet"
        />
      );
    }
    return favorites;
  };

  render() {
    return <div className={styles.root}>{this.renderFavorites()}</div>;
  }
}

export default Favorites;
