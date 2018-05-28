import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "react-emotion";

const styles = fullMode => ({
  root: css`
    max-width: ${!fullMode && "510px"};
    margin: 160px auto;
    text-align: right;
    label: root;
    @media (max-width: 480px) {
      width: 90%;
      margin: 50px auto;
    }
  `,
  fullRoot: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 9;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.3s all ease;
  `,
  textfieldArea: css`
    width: 100%;
    display: grid;
    display: -ms-grid;
    grid-template-rows: 1fr 50px;
    -ms-grid-rows: 1fr 5px 50px;
    grid-template-columns: 1fr;
    -ms-grid-columns: 1fr;
    grid-gap: 5px;
    text-align: center;
    justify-content: center;
    -ms-grid-row-align: center;
    -ms-grid-column-align: center;
    color: gray;
    label: textfieldArea;
    @media (max-width: 480px) {
      margin-top: 50px;
      grid-template-columns: 1fr;
    }
    &:after {
      position: relative;
      top: 0;
      z-index: 2;
      content: "";
      display: block;
      height: 2px;
      width: 0;
      background: transparent;
      transition: width 0.5s ease, background-color 0.5s ease;
    }
    &:hover:after {
      width: 100%;
      background: #000;
    }
  `,
  title: css`
    margin: 0;
    color: #3a3c30;
    font-size: 2.5rem;
    -ms-grid-row: 1;
    label: title;
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  `,
  form: css`
    position: ${!fullMode && "relative"};
    -ms-grid-row: 3;
    label: form;
    &:after {
      width: 100%;
      position: relative;
      top: 5px;
      z-index: 2;
      content: "";
      display: block;
      margin: auto;
      height: 2px;
      background: #aaa;
    }
    ${fullMode && fullInput};
  `,
  transparent: css`
    background: transparent;
    border: none;
    color: inherit;
    outline: 0;
    label: transparent;
  `,
  button: css`
    font-size: 1.6em;
    label: button;
  `,
  input: css`
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    padding-left: 45px;
    label: input;
  `,
  icon: css`
    width: 20px;
    height: 20px;
    position: absolute;
    left: ${fullInput ? "10px" : 0};
    top: 50%;
    transform: translateY(-50%);
    fill: #aaa;
    label: icon;
  `,
  clearHistory: css`
    background: transparent;
    color: #ef0909;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.6rem;
    cursor: pointer;
    margin-top: 15px;
    border-radius: 2px;
    transition: 0.3s background ease;
    padding: 10px;
    border: none;
    outline: none;
    opacity: ${fullMode && 0};
    label: clearHistory;
    &:hover {
      background: #ef090938;
    }
  `
});

const fullInput = css`
  width: 100%;
  position: fixed;
  -ms-grid-row: 3;
  top: 0;
  left: 0;
  z-index: 9;
  background: #fff;
  height: 50px;
  &:after {
    top: 0;
  }
`;

class SearchBar extends React.Component {
  // Initial state that contains input value and fullMode
  // fullMode is an state that works after scrolling down
  state = { name: this.props.value || "", fullMode: false };

  // A function that keeps input value
  onChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  // Attaching an event to `window.scroll`
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Check `window.scroll` and if more that 320 then shows a full-width
  // text-input at the top of the page
  handleScroll = () => {
    this.setState({
      fullMode: window.scrollY > 320
    });
  };

  // Pass input value to parent component
  handleSearch = event => {
    if (event) event.preventDefault();
    if (this.state.name !== "") this.props.onSubmit(this.state.name);
  };

  render() {
    const props = this.props;
    const style = styles(this.state.fullMode);
    return (
      <div className={style.root}>
        <div className={style.textfieldArea}>
          <h1 className={style.title}>Search for your favorite artist</h1>
          <form
            type="get"
            action="search"
            className={style.form}
            onSubmit={this.handleSearch}
          >
            <input
              id="artist-input"
              name="name"
              className={cx(style.input, style.transparent)}
              type="search"
              placeholder={props.placeholder}
              value={this.state.name}
              onChange={this.onChange}
              autoComplete="off"
            />
            <svg className={style.icon} viewBox="0 0 16 16">
              <path d="M15.56 15.56c-0.587 0.587-1.538 0.587-2.125 0l-2.652-2.652c-1.090 0.699-2.379 1.116-3.771 1.116-3.872 0-7.012-3.139-7.012-7.012s3.14-7.012 7.012-7.012c3.873 0 7.012 3.139 7.012 7.012 0 1.391-0.417 2.68-1.116 3.771l2.652 2.652c0.587 0.587 0.587 1.538 0 2.125zM7.012 2.003c-2.766 0-5.009 2.242-5.009 5.009s2.243 5.009 5.009 5.009c2.766 0 5.009-2.242 5.009-5.009s-2.242-5.009-5.009-5.009z" />
            </svg>
          </form>
        </div>
        {props.value && (
          <button
            id="clear-history"
            className={style.clearHistory}
            onClick={props.onClearHistory}
          >
            Clear History
          </button>
        )}
      </div>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  /**
   * Input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Input value
   * Can be either string or integer
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A callback function to remove search history from browser
   */
  onClearHistory: PropTypes.func
};
