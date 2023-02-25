import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    showPopUp: false,
    popUpData: {},
    homeGamesArray: [],
    homeGamesArrayTotalLength: 0,
    pageDetails:
     { title: '', byLine: '',
      secondTitle: '', paragraph: '',
       backgroundImage: null, dividercolor: '' },
  
};





export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {

        changePopUpStatus: (state, { payload }) => {
            state.showPopUp = !state.showPopUp
            state.popUpData = { ...payload }
        },
   
        pageDetails: (state, { payload }) => {
            state.pageDetails = payload
        }
    }
});

export const {

    changePopUpStatus,

    pageDetails

} = gameSlice.actions;

export const gameSelector = (state) => { return state.gameSlice };


export default gameSlice.reducer;
