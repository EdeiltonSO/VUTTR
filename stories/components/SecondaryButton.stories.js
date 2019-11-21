import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PlusBlue from "../../src/assets/images/plus_blue.png";
import PlusGreen from "../../src/assets/images/plus_green.png";
import PlusRed from "../../src/assets/images/plus_red.png";

import SecondaryButton from "../../src/components/SecondaryButton";

storiesOf("Componentes|SecondaryButton", module)
	.add("Padrão, somente texto", () => (
		<SecondaryButton onClick={action("Botão clicado!")}>
			<span>Button</span>
		</SecondaryButton>
	))
	.add("Padrão, somente ícone", () => (
		<SecondaryButton onClick={action("Botão clicado!")}>
			<img src={PlusBlue} alt="plus-icon" />
		</SecondaryButton>
	))
	.add("Padrão, texto e ícone", () => (
		<SecondaryButton onClick={action("Botão clicado!")}>
			<img src={PlusBlue} alt="plus-icon" />
			<span>Button</span>
		</SecondaryButton>
	))
// --------------------------------------
	.add("Success, somente texto", () => (
		<SecondaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<span>Button</span>
		</SecondaryButton>
	))
	.add("Success, somente ícone", () => (
		<SecondaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<img src={PlusGreen} alt="plus-icon" />
		</SecondaryButton>
	))
	.add("Success, texto e ícone", () => (
		<SecondaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<img src={PlusGreen} alt="plus-icon" />
			<span>Button</span>
		</SecondaryButton>
	))
// --------------------------------------
	.add("Danger, somente texto", () => (
		<SecondaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<span>Button</span>
		</SecondaryButton>
	))
	.add("Danger, somente ícone", () => (
		<SecondaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<img src={PlusRed} alt="plus-icon" />
		</SecondaryButton>
	))
	.add("Danger, texto e ícone", () => (
		<SecondaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<img src={PlusRed} alt="plus-icon" />
			<span>Button</span>
		</SecondaryButton>
	))
// --------------------------------------
	.add(
		"Padrão, texto, desativado",
		() => (
			<SecondaryButton disabled>
				<span>Disabled</span>
			</SecondaryButton>
		),
		{
			info: {
				text:
          "Qualquer botão pode ser desativado por meio do atributo 'disabled'"
			}
		}
	)
	.add(
		"Padrão, texto, com espaço extra",
		() => (
			<SecondaryButton extraLarge>
				<span>Mais espaço</span>
			</SecondaryButton>
		),
		{
			info: {
				text:
          "O recurso de espaço extra pode ser utilizado juntamente com qualquer um dos tipos anteriores"
			}
		}
	);
