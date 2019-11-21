import React from "react";
import { storiesOf } from "@storybook/react";
import { withRedux } from "../../.storybook/decorators";

import { Creators as SearchActions } from "../../src/store/ducks/searchbar";

import SearchField from "../../src/components/SearchField";

storiesOf("Componentes|SearchField", module)
	.addDecorator(withRedux())
	.addDecorator(withRedux(null, SearchActions))
	.addDecorator(story => story())
	.add("<SearchField />", () => <SearchField />, {
		info: {
			text:
        "O SearchField é conectado ao Redux por utilizar a função updateText(), que atualiza o estado com o texto digitado no campo.\n\n " +
        "A utilização desse componente não requer atributos ou parâmetros."
		}
	});
