import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Title, Description, Tags, Tag } from "./styles";
import QuartiaryButton from "../QuartiaryButton";
import RemoveRedIcon from "../../assets/images/remove_red.png";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ToolActions from "../../store/ducks/tools";

const Tool = ({ id, link, name, description, tags, hideShowRemove }) => {
	return (
		<Container>
			<Header>
				<Title href={link}>{name}</Title>
				<QuartiaryButton
					styleBtn="danger"
					onClick={() => hideShowRemove(id, name)}
				>
					<img src={RemoveRedIcon} alt="remove-icon" />
					<span>Remove</span>
				</QuartiaryButton>
			</Header>
			<Description>{description}</Description>
			<Tags>
				{tags.map((tag, index) =>
					tag.substring(0, 1) === "#" ? (
						<Tag key={index}>{tag}</Tag>
					) : (
						<Tag key={index}>#{tag}</Tag>
					)
				)}
			</Tags>
		</Container>
	);
};

Tool.propTypes = {
	id: PropTypes.number.isRequired,
	link: PropTypes.string,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	tags: PropTypes.array.isRequired,
	hideShowRemove: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(ToolActions, dispatch);

export default connect(null, mapDispatchToProps)(Tool);
