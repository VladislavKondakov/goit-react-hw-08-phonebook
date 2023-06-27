import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        axios.defaults.headers.common.Authorization = '';
    }
}
export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token)
        return data; 
    } catch (error) {
        
        throw error; 
    }
});


export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token)
        return data; 
    } catch (error) {
       
        throw error; 
    }

    
});


export const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
         await axios.post('/users/logout')
         token.unset()
    } catch (error) {
        
        throw error; 
    }
});


export const currentUser = createAsyncThunk('auth/current', async (_,thunkAPI) => {
    const state = thunkAPI.getState()
    const persistToken = state.auth.token
    if (token === null) {
        return
    }
    token.set(persistToken);
    try {
        const { data } = await axios.get('/users/current')
        return data
    } catch(error) {
        throw error; 
    }
});
