import React from "react";
import { storiesOf } from "@storybook/react";
import { withRedux } from "../../.storybook/decorators";

import { Creators as ErrorActions } from "../../src/store/ducks/error";

import ErrorBox from "../../src/components/ErrorBox";

const INITIAL_STATE = {
	error: { visible: true, message: "Mensagem de erro", type: "" }
};

storiesOf("Componentes|ErrorBox", module)
	.addParameters({
		centered: {
			disable: true
		}
	})
	.addDecorator(withRedux())
	.addDecorator(withRedux(INITIAL_STATE, ErrorActions))
	.addDecorator(story => story())
	.add("<ErrorBox />", () => <ErrorBox />, {
		info: {
			text:
        "A ErrorBox funciona com duas propriedades:\n " +
        "1. uma função para o botão de fechar (via Redux);\n " +
        "2. um objeto (via Redux) contendo: \n\n" +
        "2.1. visible (bool que informa se o erro estará visível); \n\n" +
        "2.2. message (string com mensagem de erro); \n\n" +
        "2.3. type (string com o tipo de erro); \n\n" +
        "O erro pode ser do tipo \"success\" (verde), \"error\" (vermelho), \"warning\" (amarelo) ou, caso não informado, cinza. \n\n" +
        "A alteração de tipo pode ser feita por meio do botão \"Edit State\" na aba \"Redux State\""
		}
	});
