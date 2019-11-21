import React from "react";
import { storiesOf } from "@storybook/react";
import { withRedux } from "../../.storybook/decorators";

import { Creators as SearchActions } from "../../src/store/ducks/searchbar";

import SearchBar from "../../src/components/SearchBar";

storiesOf("Componentes|SearchBar", module)
	.addDecorator(withRedux())
	.addDecorator(withRedux(null, SearchActions))
	.addDecorator(story => story())
	.add("<SearchBar />", () => <SearchBar />, {
		info: {
			text:
        "A SearchBar não é conectada ao Redux, mas utiliza uma Checkbox (que é conectada).\n\n " +
        "A utilização desse componente não requer atributos ou parâmetros."
		}
	});
