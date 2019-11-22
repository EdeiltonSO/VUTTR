/* eslint-disable no-undef */
import { runSaga } from "redux-saga";
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";
import { getTools, addTool } from "../../store/sagas/tools";
import { Creators as ToolsActions } from "../../store/ducks/tools";

const apiMock = new MockAdapter(api);

describe("tools saga test", () => {
	it("should be able to fetch tools", async () => {
		const dispatched = [];

		apiMock.onGet("/tools").reply(200, ["tool 1", "tool 2"]);

		await runSaga(
			{
				dispatch: action => {
					dispatched.push(action);
				}
			},
			getTools
		).toPromise();

		expect(dispatched).toContainEqual(
			ToolsActions.getToolsSuccess(["tool 1", "tool 2"])
		);
	});
});
