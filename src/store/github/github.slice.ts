import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface GithubState{
  favourites:string[]   
}

const LS_FAV_KEY= 'rfavk'

const initialState: GithubState = {
    favourites:JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)   
            localStorage.setItem(LS_FAV_KEY,JSON.stringify(state.favourites))
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload)
          localStorage.setItem(LS_FAV_KEY,JSON.stringify(state.favourites))
        }
    },

});

export const gitHubActions = githubSlice.actions
export const gitHubReducer= githubSlice.reducer