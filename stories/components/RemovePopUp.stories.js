import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RemovePopUp from "../../src/components/RemovePopUp";

storiesOf("Componentes|RemovePopUp", module)
	.addParameters({
		centered: {
			disable: true
		}
	})
	.add("default view", () => (
		<RemovePopUp
			onClickCancel={action("popup closed")}
			onClickRemove={action("tool deleted")}
			toolName={"Example"}
			toolId={123}
		/>
	));
