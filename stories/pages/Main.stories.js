import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { bindActionCreators } from "redux";

import { withRedux } from "../../.storybook/decorators";

import { Creators as ToolsActions } from "../../src/store/ducks/tools";
import { Creators as SearchActions } from "../../src/store/ducks/searchbar";
import { Creators as PopUpsActions } from "../../src/store/ducks/popups";

import Main from "../../src/pages/Main";

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{ ...ToolsActions, ...SearchActions, ...PopUpsActions },
		dispatch
	);

storiesOf("Páginas|Main", module)
	.addParameters({
		centered: {
			disable: true
		},
		info: {
			disable: true
		}
	})
	.addDecorator(withRedux())
	.addDecorator(withRedux(null, mapDispatchToProps))
	.addDecorator(story => story())
	.add("default view", () => <Main />);
