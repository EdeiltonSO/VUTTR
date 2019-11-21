export const Types = {
	GET_REQUEST: "tools/GET_REQUEST",
	GET_SUCCESS: "tools/GET_SUCCESS",
	DELETE_REQUEST: "tools/DELETE_REQUEST",
	DELETE_SUCCESS: "tools/DELETE_SUCCESS",
	ADD_REQUEST: "tools/ADD_REQUEST",
	ADD_SUCCESS: "tools/ADD_SUCCESS",
	CHANGE_LOADING: "tools/CHANGE_LOADING"
};

const INITIAL_STATE = {
	data: [],
	loading: false,
	idToRemove: null
};

export default function tools(state = INITIAL_STATE, action) {
	switch (action.type) {
	// ---------------------------------------------
	case Types.GET_REQUEST:
		return { ...state, loading: true };
	case Types.GET_SUCCESS:
		return { ...state, loading: false, data: action.payload.data };
		// ---------------------------------------------
	case Types.DELETE_REQUEST:
		return { ...state, idToRemove: action.payload.id, loading: true };
	case Types.DELETE_SUCCESS:
		return {
			...state,
			loading: false,
			idToRemove: null,
			data: action.payload.data
		};
		// ---------------------------------------------
	case Types.ADD_REQUEST:
		return { ...state, loading: true };
	case Types.ADD_SUCCESS:
		return {
			...state,
			loading: false,
			data: [...state.data, action.payload.data]
		};
		// ---------------------------------------------
	case Types.CHANGE_LOADING:
		return state.loading
			? {
				...state,
				loading: false
			}
			: {
				...state,
				loading: true
			};

	default:
		return state;
	}
}

export const Creators = {
	getToolsRequest: () => ({ type: Types.GET_REQUEST }),

	getToolsSuccess: data => ({
		type: Types.GET_SUCCESS,
		payload: { data }
	}),

	deleteToolRequest: id => ({
		type: Types.DELETE_REQUEST,
		payload: { id }
	}),

	deleteToolSuccess: data => ({
		type: Types.DELETE_SUCCESS,
		payload: { data }
	}),

	addToolRequest: data => ({
		type: Types.ADD_REQUEST,
		payload: { data }
	}),

	addToolSuccess: data => ({
		type: Types.ADD_SUCCESS,
		payload: { data }
	}),

	changeLoading: () => ({
		type: Types.CHANGE_LOADING
	})
};
