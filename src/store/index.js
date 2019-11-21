import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import "../config/reactotron";
import sagas from "./sagas";
import reducers from "./ducks";

// Adicionado:
import withReduxEnhancer from "addon-redux/enhancer";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
  	? console.tron.createSagaMonitor()
  	: null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === "development"
  	? compose(
  		applyMiddleware(...middlewares),
  		console.tron.createEnhancer(),

  		// Adicionado:
  		withReduxEnhancer
  	)
  	: applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
