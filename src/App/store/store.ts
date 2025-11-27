import { configureStore } from "@reduxjs/toolkit";
import currentReducer from "./current";
import ressourcesReducer, { loadRessources } from "./ressources";
//import { emptyMeme } from "orsys-tjs-meme";


export const store=configureStore ({reducer:{current:currentReducer,ressources:ressourcesReducer}});

store.subscribe (() =>{
    console.log('%c%s', 'state changed', store.getState());
    console.log(store.getState());
});
//store.dispatch(update({...emptyMeme, titre:'toto'}));
store.dispatch(loadRessources());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;