import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (!response.ok) {
        throw new Error("Error fetching list data")
    }

    const listArray = response.json();
   
    return listArray
}

export const getList = createAsyncThunk('list', async(_, thunkApi) => {
    try {
        const response = await fetchData()
        console.log(response)
        return response
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})