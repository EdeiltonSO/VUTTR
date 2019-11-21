import React from "react";
import GlobalStyle from "../src/styles/global";
import Main from "../src/pages/Main";
import store from "./store";
import { Provider } from "react-redux";
import "./config/reactotron";

const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Main />
		</Provider>
	);
};

export default App;
