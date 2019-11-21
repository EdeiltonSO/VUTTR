import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ToolsActions } from "../ducks/tools";
import { Creators as ErrorActions } from "../ducks/error";

export function* getTools() {
	try {
		const response = yield call(api.get, "/tools");
		yield put(ToolsActions.getToolsSuccess(response.data));
	} catch (error) {
		yield put(ErrorActions.setError("Error fetching tools!", "error"));
	}
}

export function* deleteTool(action) {
	try {
		yield call(api.delete, "/tools/" + action.payload.id);
		const response = yield call(api.get, "/tools");
		yield put(ToolsActions.deleteToolSuccess(response.data));
	} catch (error) {
		yield put(ErrorActions.setError("Error deleting tool!", "error"));
	}
}

export function* addTool(action) {
	try {
		const tool = action.payload.data;
		const response = yield call(api.get, "/tools");
		tool.id = response.data[response.data.length - 1].id + 1;

		yield call(api.post, "/tools", tool);
		yield put(ToolsActions.addToolSuccess(tool));
	} catch (error) {
		ErrorActions.setError("Error adding tool!", "error");
	}
}
