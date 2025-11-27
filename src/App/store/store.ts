import { configureStore } from "@reduxjs/toolkit";
import currentReducer, { update } from "./current";
import { emptyMeme } from "orsys-tjs-meme";

export const store=configureStore ({reducer:{current:currentReducer}});

store.subscribe (() =>{
    console.log('%c%s', 'state changed', store.getState());
    console.log(store.getState());
});
store.dispatch(update({...emptyMeme, titre:'toto'}));