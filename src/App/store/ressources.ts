import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import { REST_ADR, REST_RESSOURCES } from '../constantes/config';
interface IRessourcesState{
    memes:Array<MemeInterface>;
    images: Array<ImageInterface>
}

const initialState: IRessourcesState = {
    memes:[],
    images:[]

}

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {}
});

//export const {} = ressources.actions
export const loadRessources=createAsyncThunk('ressources/load',async()=>{
    const prm=(await fetch(`${REST_ADR}${REST_RESSOURCES.memes}`));
     const pri=(await fetch(`${REST_ADR}${REST_RESSOURCES.images}`));
     const prAll=await Promise.all([prm, pri]);
    return {memes: await prAll[0].json(), images: await prAll[1].json()};
});

export default ressources.reducer