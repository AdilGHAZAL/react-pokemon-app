import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk to fetch Pokémon by type
export const fetchPokemonByType = createAsyncThunk(
  'pokemon/fetchByType',
  async (type) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
    return response.data.pokemon.map((p) => p.pokemon);
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonByType: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonByType.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByType.fulfilled, (state, action) => {
        const type = action.meta.arg;
        state.pokemonByType[type] = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPokemonByType.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
