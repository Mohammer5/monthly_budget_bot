import { composeWithDevTools } from 'remote-redux-devtools';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';

const remoteDevToolsConfig = {
	name: 'Monthly Budget Bot',
	realtime: true,
	hostname: 'localhost',
	port: 8000,
	suppressConnectErrors: false,
};

export const configureStore = (rootReducer, rootEpic, dependencies) => {
  const devToolsEnhancer = composeWithDevTools(remoteDevToolsConfig);
  const epicMiddleware = createEpicMiddleware({ dependencies });
  const middleWare = applyMiddleware( epicMiddleware );
  const enhancer = devToolsEnhancer( middleWare );
  const store = createStore( rootReducer, enhancer );

  epicMiddleware.run(rootEpic);
  return store;
};
