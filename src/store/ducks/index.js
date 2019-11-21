import { combineReducers } from "redux";
import tools from "./tools";
import popups from "./popups";
import searchbar from "./searchbar";
import error from "./error";

export default combineReducers({
	tools,
	popups,
	searchbar,
	error
});
