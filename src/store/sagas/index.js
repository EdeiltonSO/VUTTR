import { all, takeLatest } from "redux-saga/effects";

import { Types as ToolsTypes } from "../ducks/tools";
import { getTools, deleteTool, addTool } from "./tools";

export default function* rootSaga() {
	yield all([
		takeLatest(ToolsTypes.GET_REQUEST, getTools),
		takeLatest(ToolsTypes.DELETE_REQUEST, deleteTool),
		takeLatest(ToolsTypes.ADD_REQUEST, addTool)
	]);
}
