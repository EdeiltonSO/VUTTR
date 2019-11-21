import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";

const PrimaryButton = ({
	onClick,
	styleBtn,
	children,
	extraLarge,
	disabled
}) => {
	return (
		<Button
			styleBtn={styleBtn}
			extraLarge={extraLarge}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	);
};

PrimaryButton.propTypes = {
	onClick: PropTypes.func,
	styleBtn: PropTypes.string,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	extraLarge: PropTypes.bool
};

export default PrimaryButton;
