import React from "react";
import { toast } from "react-toastify";
import SearchBar from "../../components/SearchBar";
import {
  addToFavorite,
  isFavorite,
  getSearchData,
  addSearchData,
  removeSearchData,
  getLastArtistName
} from "../../helpers";
import ArtistAPI from "../../api";
import ArtistDetails from "../../components/ArtistDetails";
import Spinner from "../../components/Spinner";
import MessageBox from "../../components/MessageBox";

class Search extends React.Component {
  // Initial state that contains artistDetail and fetchStatus
  // INVALID fetchStatus means we have not recieved any response
  state = { artistDetail: null, fetchStatus: "INVALID" };

  // Check if there is the data on the localStorage
  // Then uses cached data rather than sending another request
  componentDidMount() {
    if (getSearchData()) {
      this.setState({
        artistDetail: getSearchData(),
        fetchStatus: "CACHED"
      });
    }
  }

  // Set fetchStatus LOADING and then send the request to API
  handleSubmit = data => {
    this.setState(
      {
        artistDetail: null,
        fetchStatus: "LOADING"
      },
      () => {
        ArtistAPI(data, this.searchSuccessful, this.handleError);
      }
    );
  };

  // Callback funtion to handle search request if that is a successful response
  // Set getchStatus FETCHED and then move screen scrollbar to the response data
  // And save response data on localStorage
  searchSuccessful = data => {
    this.setState(
      {
        artistDetail: { ...this.state.artistDetail, ...data },
        fetchStatus: "FETCHED"
      },
      () => {
        if (data.events)
          window.scroll({
            top: 520,
            left: 0,
            behavior: "smooth"
          });
        addSearchData(data);
      }
    );
  };

  // Callback funtion to handle search request if that contains an error
  handleError = err => {
    this.setState({ fetchStatus: "FAILED" });
  };

  // Callback function that handles save `Event` on localStorage
  // Showing a toast to give the user an information about event saving status
  handleSaveEvent = data => {
    if (isFavorite(Object.keys(data)[0])) {
      toast.info("You have already saved this event", {
        position: toast.POSITION.TOP_CENTER
      });
    } else {
      toast.success("The event has been added successfully", {
        position: toast.POSITION.TOP_CENTER
      });
      addToFavorite(data);
    }
  };

  // A funnction that removes search data from localStorage
  handleClearHistory = () => {
    removeSearchData();
    this.setState({
      fetchStatus: "INVALID"
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          value={getLastArtistName()}
          onSubmit={this.handleSubmit}
          onClearHistory={this.handleClearHistory}
        />
        <hr />
        {this.state.fetchStatus === "LOADING" && <Spinner />}
        {(this.state.fetchStatus === "FETCHED" ||
          this.state.fetchStatus === "CACHED") && (
          <ArtistDetails
            data={this.state.artistDetail}
            onSaveEvent={this.handleSaveEvent}
          />
        )}
        {this.state.fetchStatus === "FAILED" && (
          <MessageBox text="Something is wrong. Please try again." />
        )}
      </div>
    );
  }
}
export default Search;
