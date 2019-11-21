import React from "react";
import { mount } from "enzyme";

import AddPopUp from "../../components/AddPopUp";

it("should render addpopup title", () => {
	const wrapper = mount(
		<AddPopUp onClickCancel={() => {}} onClickSubmit={() => {}} />
	);

	expect(wrapper.find("div[id='viewport']").exists()).toBe(true);
	expect(wrapper.find("div[id='wrapper']").exists()).toBe(true);

	expect(wrapper.find("input[id='title']").exists()).toBe(true);
	expect(wrapper.find("input[id='link']").exists()).toBe(true);
	expect(wrapper.find("textarea[id='description']").exists()).toBe(true);
	expect(wrapper.find("input[id='tags']").exists()).toBe(true);
});
