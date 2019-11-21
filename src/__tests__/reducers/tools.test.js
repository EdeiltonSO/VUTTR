/* eslint-disable no-undef */
import tools, { Creators as ToolsActions } from "../../store/ducks/tools";

describe("tools reducer test", () => {
	it("should be able to change loading", () => {
		const state = tools({ loading: false }, ToolsActions.changeLoading());

		expect(state.loading).toBe(true);
	});
});
