import React from "react";
import { storiesOf } from "@storybook/react";
import { withRedux } from "../../.storybook/decorators";
import { action } from "@storybook/addon-actions";

import { Creators as ToolsActions } from "../../src/store/ducks/tools";

import Tool from "../../src/components/Tool";

const tool = {
	id: 123,
	title: "Tool number one",
	link: "#",
	description: "This is a example of tool in Storybook",
	tags: ["tag1", "testing", "example", "vuttr"]
};

storiesOf("Componentes|Tool", module)
	.addDecorator(withRedux())
	.addDecorator(withRedux(null, ToolsActions))
	.addDecorator(story => story())
	.add(
		"<Tool />",
		() => (
			<Tool
				key={tool.id}
				id={tool.id}
				name={tool.title}
				link={tool.link}
				description={tool.description}
				tags={tool.tags.map(tag => tag)}
				hideShowRemove={action("popup de exclusão aberta/fechada")}
			/>
		),
		{
			info: {
				text:
          "Propriedades:\n\n" +
          "id: numérico, requerido; \n\n" +
          "link: string, opcional; \n\n" +
          "name: string, requerido; \n\n" +
          "description: string, requerido; \n\n" +
          "tags: array de strings, requerido; \n\n" +
          "hideShowRemove: função, requerida; \n\n"
			}
		}
	);
