import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import todoReducer from "./components/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
// https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
// https://github.com/rt2zz/redux-persist

function configureStore(initialState = {}) {
  const reducer = combineReducers({
    todo: todoReducer
  });

  const store = createStore(
    persistReducer(
      {
        key: "root",
        storage
      },
      reducer
    ),
    composeWithDevTools(applyMiddleware(logger))
  );

  // console.log("initialState", store.getState());

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    // console.log("restoredState", store.getState());
  });

  return { store, persistor };
}

export default configureStore;
