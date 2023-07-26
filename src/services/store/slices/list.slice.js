import { createSlice } from "@reduxjs/toolkit";
import { getList } from "../actions/getList.action";

export const listSlice = createSlice({
    name: "list",
    initialState: {
        isLoading: false,
        error: null,
        listArray: [],
    },
    reducers: {
     
    }, 
    extraReducers: builder => {
        builder.addCase(getList.pending, state => {
            state.isLoading = true
        })
        .addCase(getList.fulfilled, (state, action) => {
            state.isLoading = false
            state.listArray = action.payload
        })
        .addCase(getList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
            state.listArray = []
        })
    }
})

export const { actions, reducer} = listSlice