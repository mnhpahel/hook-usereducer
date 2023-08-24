import React from "react";
import { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "error":
      return {
        loading: false,
        post: {},
        error: "There was an error fetching!",
      };
    default:
      return state;
  }
};

const GetPostReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "success", result: data });
      })
      .catch(() => {
        dispatch({ type: "error" });
      });
  }, []);

  return (
    <div>
        { state.loading ? "Loading...": state.post.title}
        {state.error || null}
    </div>
  );
};

export default GetPostReducer;
