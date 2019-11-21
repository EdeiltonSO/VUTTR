import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ErrorActions } from "../../store/ducks/error";

import { Container, Content } from "./styles";

const ErrorBox = ({ error: { visible, message, type }, closeError }) =>
	visible && (
		<Container type={type}>
			<Content>
				<p>{message}</p>
			</Content>
			<button onClick={() => closeError()}>×</button>
		</Container>
	);

ErrorBox.propTypes = {
	hideError: PropTypes.func,
	error: PropTypes.shape({
		visible: PropTypes.bool,
		message: PropTypes.string,
		type: PropTypes.string
	}).isRequired
};

const mapStateToProps = state => ({
	error: state.error
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
