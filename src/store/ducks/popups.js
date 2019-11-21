export const Types = {
	SHOW_ADDPOPUP: "popups/SHOW_ADDPOPUP",
	SHOW_REMOVEPOPUP: "popups/SHOW_REMOVEPOPUP"
};

const INITIAL_STATE = {
	showAddPopUp: false,
	showRemovePopUp: false,
	idWaitingToRemove: false
};

export default function popups(state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.SHOW_ADDPOPUP:
		return state.showAddPopUp
			? { ...state, showAddPopUp: false }
			: { ...state, showAddPopUp: true };
	case Types.SHOW_REMOVEPOPUP:
		return state.showRemovePopUp
			? { ...state, showRemovePopUp: false, idWaitingToRemove: false }
			: {
				...state,
				showRemovePopUp: action.payload.title,
				idWaitingToRemove: action.payload.id
				  };
	default:
		return state;
	}
}

export const Creators = {
	showAddPopUpAction: () => ({ type: Types.SHOW_ADDPOPUP }),

	showRemovePopUpAction: (id, title) => ({
		type: Types.SHOW_REMOVEPOPUP,
		payload: { id, title }
	})
};
