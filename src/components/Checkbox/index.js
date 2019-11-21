import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as SearchActions } from "../../store/ducks/searchbar";

import { Container } from "./styles";

class Checkbox extends Component {
  static propTypes = {
    title: PropTypes.string,
    checkTags: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };

  render() {
    return (
      <Container htmlFor="cb">
        {this.props.disabled ? (
          <input
            id="cb"
            type="checkbox"
            onChange={() => this.props.checkTags()}
            disabled
          />
        ) : (
          <input
            id="cb"
            type="checkbox"
            onChange={() => this.props.checkTags()}
          />
        )}
        <span htmlFor="cb" />
        <p htmlFor="cb">{this.props.title}</p>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(SearchActions, dispatch);

export default connect(null, mapDispatchToProps)(Checkbox);
