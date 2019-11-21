import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PlusBlue from "../../src/assets/images/plus_blue.png";
import PlusGreen from "../../src/assets/images/plus_green.png";
import PlusRed from "../../src/assets/images/plus_red.png";

import QuartiaryButton from "../../src/components/QuartiaryButton";

storiesOf("Componentes|QuartiaryButton", module)
	.add("Padrão, somente texto", () => (
		<QuartiaryButton onClick={action("Botão clicado!")}>
			<span>Button</span>
		</QuartiaryButton>
	))
	.add("Padrão, somente ícone", () => (
		<QuartiaryButton onClick={action("Botão clicado!")}>
			<img src={PlusBlue} alt="plus-icon" />
		</QuartiaryButton>
	))
	.add("Padrão, texto e ícone", () => (
		<QuartiaryButton onClick={action("Botão clicado!")}>
			<img src={PlusBlue} alt="plus-icon" />
			<span>Button</span>
		</QuartiaryButton>
	))
// --------------------------------------
	.add("Success, somente texto", () => (
		<QuartiaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<span>Button</span>
		</QuartiaryButton>
	))
	.add("Success, somente ícone", () => (
		<QuartiaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<img src={PlusGreen} alt="plus-icon" />
		</QuartiaryButton>
	))
	.add("Success, texto e ícone", () => (
		<QuartiaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<img src={PlusGreen} alt="plus-icon" />
			<span>Button</span>
		</QuartiaryButton>
	))
// --------------------------------------
	.add("Danger, somente texto", () => (
		<QuartiaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<span>Button</span>
		</QuartiaryButton>
	))
	.add("Danger, somente ícone", () => (
		<QuartiaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<img src={PlusRed} alt="plus-icon" />
		</QuartiaryButton>
	))
	.add("Danger, texto e ícone", () => (
		<QuartiaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<img src={PlusRed} alt="plus-icon" />
			<span>Button</span>
		</QuartiaryButton>
	))
// --------------------------------------
	.add(
		"Padrão, texto, desativado",
		() => (
			<QuartiaryButton disabled>
				<span>Disabled</span>
			</QuartiaryButton>
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
			<QuartiaryButton extraLarge>
				<span>Mais espaço</span>
			</QuartiaryButton>
		),
		{
			info: {
				text:
          "O recurso de espaço extra pode ser utilizado juntamente com qualquer um dos tipos anteriores"
			}
		}
	);
