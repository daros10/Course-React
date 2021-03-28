import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { counterReducer } from './redux/reducer';
import thunk from 'redux-thunk';
import ReduxApp from './container/ReduxApp';

export const store: Store = createStore(counterReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
}

export default App;
