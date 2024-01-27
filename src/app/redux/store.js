// redux store --> all the configuration will be here
// whatever data come from reducer ww will configure in store

const { configureStore } = require("@reduxjs/toolkit");
import reducer from './slice'
// configureStore --> is a function where we can pass the object with reducer.

export const store = configureStore({
    // reducer : reducer // if both name are same re can write reducer it will make a direct object example are below
    reducer
})