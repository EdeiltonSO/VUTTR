/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

import Main from "../../pages/Main";

const mockStore = createStore();

const INITIAL_STATE = {
	error: {
		visible: false,
		message: null,
		type: null
	},
	popups: {
		showAddPopUp: false,
		showRemovePopUp: false,
		idWaitingToRemove: false
	},
	searchbar: {
		textBar: "",
		tagsOnly: false
	},
	tools: {
		data: [
			{
				id: 1,
				title: "Notion",
				link: "https://notion.so",
				description: "All in one tool to organize teams and ideas.",
				tags: [
					"organization",
					"planning",
					"collaboration",
					"writing",
					"calendar"
				]
			},
			{
				id: 2,
				title: "json-server",
				link: "https://github.com/typicode/json-server",
				description: "Fake REST API based on a json schema.",
				tags: ["api", "json", "schema", "node", "github", "rest"]
			}
		],
		loading: false,
		idToRemove: null
	}
};

const store = mockStore(INITIAL_STATE);

it("should render main page", () => {
	const wrapper = mount(
		<Provider store={store}>
			<Main />
		</Provider>
	);

	// render test
	expect(wrapper.find("div[id='wrapper']").exists()).toBe(true);
	expect(wrapper.find("div[id='header']").exists()).toBe(true);
	expect(wrapper.find("div[id='tool-list']").exists()).toBe(true);

	// redux integration test
	expect(wrapper.find("Tool").length).toBe(2);
});
