import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { callAPIMiddleware } from "../../redux/middleware/callAPI";
import reducers from "../../redux/reducers/reducers";

import Movies from "./Movies";

const initialState = {};
const mockStore = configureStore([thunk, callAPIMiddleware]);

describe("My Connected React-Redux Component", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      movies: {
        movies: [
          { id: 12, title: "Chihiro" },
          { id: 14, title: "Mononoke" },
        ],
      },
    });

    component = renderer.create(
      <Provider store={store}>
        <Movies />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
