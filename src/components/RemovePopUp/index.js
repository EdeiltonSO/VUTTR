import React, { Component } from "react";
import PropTypes from "prop-types";
import { Viewport, Wrapper, Header, Content, Fields, Actions } from "./styles";
import RemoveDarkIcon from "../../assets/images/remove_dark.png";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";

class RemovePopUp extends Component {
	render() {
		return (
			<Viewport>
				<Wrapper>
					<Header>
						<img src={RemoveDarkIcon} alt="Remove Icon" />
						<h2>Remove tool</h2>
					</Header>

					<Content>
						<Fields>
							<h3>Are you sure you want to remove {this.props.toolName}?</h3>
						</Fields>

						<Actions>
							<SecondaryButton
								onClick={() =>
									this.props.onClickCancel(
										this.props.toolId,
										this.props.toolName
									)
								}
								styleBtn="danger"
							>
								<span>Cancel</span>
							</SecondaryButton>

							<PrimaryButton
								onClick={() => this.props.onClickRemove(this.props.toolId)}
								styleBtn="danger"
							>
								<span>Yes, remove</span>
							</PrimaryButton>
						</Actions>
					</Content>
				</Wrapper>
			</Viewport>
		);
	}
}

RemovePopUp.propTypes = {
	onClickCancel: PropTypes.func.isRequired,
	onClickRemove: PropTypes.func.isRequired,
	toolId: PropTypes.number.isRequired,
	toolName: PropTypes.string
};

RemovePopUp.defaultProps = {
	toolName: "this tool"
};

export default RemovePopUp;
