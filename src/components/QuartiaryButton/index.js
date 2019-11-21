import React from "react";
import PropTypes from "prop-types";
import { Button } from "./styles";

const QuartiaryButton = ({
	onClick,
	styleBtn,
	children,
	extraLarge,
	disabled
}) => {
	return (
		<Button
			styleBtn={styleBtn}
			onClick={onClick}
			extraLarge={extraLarge}
			disabled={disabled}
		>
			{children}
		</Button>
	);
};

QuartiaryButton.propTypes = {
	onClick: PropTypes.func,
	styleBtn: PropTypes.string,
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	extraLarge: PropTypes.bool
};

export default QuartiaryButton;
