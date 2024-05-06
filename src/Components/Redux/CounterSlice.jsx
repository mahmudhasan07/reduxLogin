
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase.config.jsx';

const initialState = {
    name: '',
    email: "",
    error: "",
    success: ""
}

const auth = getAuth(app)

const hello = {
    name: "mahmud",
    age: 18,
    sex: "male",
    food: "kacchi"
}


const createUser = createAsyncThunk(git 
    "firebase/createUser",
    async ({ email, password }) => {
        console.log(email);
        const data = await createUserWithEmailAndPassword(auth, email, password)
        const res = data.user
        if (res.email) {
            signOut(auth)
        }
        return { name: res.displayName, email: res.email }
    }

)

const logOutUser = createAsyncThunk(
    "firebase/logOutUser",
    async () => {
        const data = await signOut(auth)
        return data
    }
)

// const [loading, setloading] =  useState()
const counterSlice = createSlice({
    name: "firebase",
    initialState,
    reducers: {

        setValue: (state) => {
            state.error = "",
                state.success = ""
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.rejected, (state, action) => {
                console.log(action);
                state.error = action.error.message
            })
            .addCase(createUser.fulfilled, (state, payload) => {
                // console.log(payload);
                state.success = "success"
                // logOutUser()
            })
    }

})


export const { setValue } = counterSlice.actions

export { createUser, logOutUser }

export default counterSlice.reducer