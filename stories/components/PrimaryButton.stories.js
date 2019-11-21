import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PlusLight from "../../src/assets/images/plus_light.png";

import PrimaryButton from "../../src/components/PrimaryButton";

storiesOf("Componentes|PrimaryButton", module)
	.add("Padrão, somente texto", () => (
		<PrimaryButton onClick={action("Botão clicado!")}>
			<span>Button</span>
		</PrimaryButton>
	))
	.add("Padrão, somente ícone", () => (
		<PrimaryButton onClick={action("Botão clicado!")}>
			<img src={PlusLight} alt="plus-icon" />
		</PrimaryButton>
	))
	.add("Padrão, texto e ícone", () => (
		<PrimaryButton onClick={action("Botão clicado!")}>
			<img src={PlusLight} alt="plus-icon" />
			<span>Button</span>
		</PrimaryButton>
	))
// --------------------------------------
	.add("Success, somente texto", () => (
		<PrimaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<span>Button</span>
		</PrimaryButton>
	))
	.add("Success, somente ícone", () => (
		<PrimaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<img src={PlusLight} alt="plus-icon" />
		</PrimaryButton>
	))
	.add("Success, texto e ícone", () => (
		<PrimaryButton styleBtn="success" onClick={action("Botão clicado!")}>
			<img src={PlusLight} alt="plus-icon" />
			<span>Button</span>
		</PrimaryButton>
	))
// --------------------------------------
	.add("Danger, somente texto", () => (
		<PrimaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<span>Button</span>
		</PrimaryButton>
	))
	.add("Danger, somente ícone", () => (
		<PrimaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<img src={PlusLight} alt="plus-icon" />
		</PrimaryButton>
	))
	.add("Danger, texto e ícone", () => (
		<PrimaryButton styleBtn="danger" onClick={action("Botão clicado!")}>
			<img src={PlusLight} alt="plus-icon" />
			<span>Button</span>
		</PrimaryButton>
	))
// --------------------------------------
	.add(
		"Padrão, texto, desativado",
		() => (
			<PrimaryButton disabled>
				<span>Disabled</span>
			</PrimaryButton>
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
			<PrimaryButton extraLarge>
				<span>Mais espaço</span>
			</PrimaryButton>
		),
		{
			info: {
				text:
          "O recurso de espaço extra pode ser utilizado juntamente com qualquer um dos tipos anteriores"
			}
		}
	);
