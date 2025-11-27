import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import { REST_RESSOURCES } from '../constantes/config';
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
export const loadRessources=creatreAsyncThunk('ressources/load',async()=>{
    const pri=(await fetch(`$({REST_ADR}${REST_RESSOURCES.images}`)),
    return await pri.json()
});

export default ressources.reducer