import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SearchActions } from "../../store/ducks/searchbar";

import { Container } from "./styles";
import IconSearch from "../../assets/images/Icon-Search-2px.svg";

class SearchField extends Component {
  static propTypes = {
    updateText: PropTypes.func.isRequired
  };

  render() {
    return (
      <Container>
        <img src={IconSearch} alt="Search" />
        <form>
          <input
            type="text"
            placeholder="search"
            onChange={e => this.props.updateText(e.target.value)}
          />
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(SearchActions, dispatch);

export default connect(null, mapDispatchToProps)(SearchField);
