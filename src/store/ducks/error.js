export const Types = {
	SET_ERROR: "popups/SET_ERROR",
	CLOSE_ERROR: "popups/CLOSE_ERROR"
};

const INITIAL_STATE = {
	visible: false,
	message: null,
	type: null
};

export default function popups(state = INITIAL_STATE, action) {
	switch (action.type) {
	case Types.SET_ERROR:
		return {
			...state,
			visible: true,
			message: action.payload.message,
			type: action.payload.type
		};
	case Types.CLOSE_ERROR:
		return { ...state, visible: false };
	default:
		return state;
	}
}

export const Creators = {
	setError: (message, type) => ({
		type: Types.SET_ERROR,
		payload: { message, type }
	}),

	closeError: () => ({ type: Types.CLOSE_ERROR })
};
