import React from "react";
import { storiesOf } from "@storybook/react";
import { withRedux } from "../../.storybook/decorators";

import { Creators as SearchActions } from "../../src/store/ducks/searchbar";

import Checkbox from "../../src/components/Checkbox";

storiesOf("Componentes|Checkbox", module)
	.addDecorator(withRedux())
	.addDecorator(withRedux(null, SearchActions))
	.addDecorator(story => story())
	.add("<Checkbox />", () => <Checkbox />, {
		info: {
			text: "Recebendo apenas a função checkTags via Redux, que é obrigatória"
		}
	})
	.add("<Checkbox title=\"example\" />", () => <Checkbox title="example" />, {
		info: { text: "Recebendo função checkTags via Redux + título inline" }
	})
	.add("<Checkbox disabled />", () => <Checkbox disabled />, {
		info: {
			text: "Função checkTags via Redux + parâmetro disabled inline"
		}
	})
	.add(
		"<Checkbox title=\"example\" disabled />",
		() => <Checkbox title="example" disabled />,
		{
			info: { text: "Função checkTags via Redux + título e disabled inline" }
		}
	);
