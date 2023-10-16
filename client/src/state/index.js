import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   setMode: (state) => {
    state.mode = state.mode === "light" ? "dark" : "light";
   },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if(state.user) {
        state.user.friends = action.payload;
      } else {
        console.error ("No user to set friends on");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if(post._id === action.payload._id) return action.payload;
        return post;
      });
      state.posts = updatedPosts;
    }
  }
})


export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;

export default authSlice.reducer;

// This reduces the amount of code we need to write in our components.  These are all the "logic" functions we are going to need for our application 