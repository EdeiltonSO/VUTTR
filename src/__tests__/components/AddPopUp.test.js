/* eslint-disable no-undef */
import React from "react";
import { mount } from "enzyme";

import AddPopUp from "../../components/AddPopUp";

it("should render addpopup elements", () => {
	const wrapper = mount(
		<AddPopUp onClickCancel={() => {}} onClickSubmit={() => {}} />
	);

	expect(wrapper.find("div[id='viewport']").exists()).toBe(true);
	expect(wrapper.find("div[id='wrapper']").exists()).toBe(true);

	expect(wrapper.find("input[id='title']").exists()).toBe(true);
	expect(wrapper.find("input[id='link']").exists()).toBe(true);
	expect(wrapper.find("textarea[id='description']").exists()).toBe(true);
	expect(wrapper.find("input[id='tags']").exists()).toBe(true);

	expect(wrapper.find("PrimaryButton[id='ok-button']").exists()).toBe(true);
	wrapper.find("PrimaryButton[id='ok-button']").simulate("click");

	expect(wrapper.state().missingSomeField).toBe(true);

	wrapper.find("input[id='title']").simulate("change", {
		target: { value: "tool title" }
	});

	wrapper.find("input[id='link']").simulate("change", {
		target: { value: "http://www.google.com" }
	});

	wrapper.find("textarea[id='description']").simulate("change", {
		target: { value: "tool description" }
	});

	wrapper.find("input[id='tags']").simulate("change", {
		target: { value: "tool, tags, #test" }
	});

	wrapper.find("PrimaryButton[id='ok-button']").simulate("click");
	expect(wrapper.state().missingSomeField).toBe(false);
	expect(wrapper.state().currentTool.title).toBe("tool title");
	expect(wrapper.state().currentTool.link).toBe("http://www.google.com");
});
