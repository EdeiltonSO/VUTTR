export const Types = {
	UPDATE_TEXT: "searchbar/UPDATE_TEXT",
	CHECK_TAGSONLY: "searchbar/CHECK_TAGSONLY"
};

const INITIAL_STATE = {
	textBar: "",
	tagsOnly: false
};

// REDUCER
export default function searchbar(state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.UPDATE_TEXT:
		return { ...state, textBar: action.payload.data };
	case Types.CHECK_TAGSONLY:
		return state.tagsOnly
			? { ...state, tagsOnly: false }
			: { ...state, tagsOnly: true };
	default:
		return state;
	}
}

// ACTIONS
export const Creators = {
	updateText: data => ({
		type: Types.UPDATE_TEXT,
		payload: { data }
	}),
	checkTags: () => ({
		type: Types.CHECK_TAGSONLY
	})
};
