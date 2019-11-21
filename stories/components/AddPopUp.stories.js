import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AddPopUp from "../../src/components/AddPopUp";

storiesOf("Componentes|AddPopUp", module)
	.addParameters({
		centered: {
			disable: true
		}
	})
	.add("default view", () => (
		<AddPopUp
			onClickCancel={action("popup closed")}
			onClickSubmit={action("data sent")}
		/>
	));
