/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";

const INITIAL_STATE = {};
const mockStore = createStore();
const store = mockStore(INITIAL_STATE);

import Checkbox from "../../components/Checkbox";

it("should render checkbox disabled", () => {
	const wrapper = mount(
		<Provider store={store}>
			<Checkbox title="test" disabled />
		</Provider>
	);

	expect(wrapper.find("Checkbox").exists()).toBe(true);
	expect(wrapper.find("Checkbox").props().disabled).toBe(true);
});
