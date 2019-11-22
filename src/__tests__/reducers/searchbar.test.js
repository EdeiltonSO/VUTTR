/* eslint-disable no-undef */
import searchbar, {
	Creators as SearchActions
} from "../../store/ducks/searchbar";

describe("searchbar reducer test", () => {
	it("should be able to turn on tagsOnly", () => {
		const state = searchbar({ tagsOnly: false }, SearchActions.checkTags());

		expect(state.tagsOnly).toBe(true);
	});

	it("should be able to turn off tagsOnly", () => {
		const state = searchbar({ tagsOnly: true }, SearchActions.checkTags());

		expect(state.tagsOnly).toBe(false);
	});

	it("should be able to change textBar", () => {
		const state = searchbar({ textBar: "" }, SearchActions.updateText("tag"));

		expect(state.textBar).toBe("tag");
	});

	it("should return the default case", () => {
		expect(searchbar(undefined, {})).toEqual({
			textBar: "",
			tagsOnly: false
		});
	});
});
