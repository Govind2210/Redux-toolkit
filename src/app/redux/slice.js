// so here will be action and reducer.
// we will export the action and reducer into store.

// important import
const { createSlice, nanoid } = require("@reduxjs/toolkit");

// what is slice ?
/**
 * - A slice is a collection of redux logic and action for a single feature in your App.
 * - In slice we defined action and reducer in single file.
 * 
 * imporatant -> action and reducer should be single feature
 */


const initialState = {
    users : []
};

// there are three parameters for Slice
const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        // here ww will push the data in redux store

        // add user 
        addUser:(state, action)=>{
            console.log(action)
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
        }

        // update user
    }
});

export const {addUser} = Slice.actions; // this will call on button
export default Slice.reducer; // this wil call on the store

