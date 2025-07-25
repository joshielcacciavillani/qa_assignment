const axios = require('axios');
const { expect } = require('chai');

describe('backend scenarios', async function () {
    it('Scenario 1: GET Pokémon data and validate moves and types', async () => {
        const baseApiUrl = 'https://pokeapi.co/api/v2/pokemon';
        const targetPokemon = 'pikachu'; // input not hardcoded in URL directly
        const expectedType = 'electric';

        let response;

        try {
            // Axios call following the standard pattern from the docs
            response = await axios({
                method: 'get',
                url: `${baseApiUrl}/${targetPokemon}`,
                headers: {
                    'Accept': 'application/json'
                }
            });
        } catch (error) {
            throw new Error(`Failed to fetch Pokémon data: ${error.message}`);
        }

        // Validate HTTP status is OK
        expect(response.status).to.equal(200);

        const pokemonData = response.data;

        // ---- Validate "moves" section ----
        const pokemonMoves = pokemonData.moves;

        // Should be a non-empty array
        expect(pokemonMoves).to.be.an('array');
        expect(pokemonMoves.length).to.be.greaterThan(0);

        // Optional: log the number of moves to understand the scale
        console.log(`${targetPokemon} has ${pokemonMoves.length} moves.`);

        // ---- Validate "types" section ----
        const pokemonTypes = pokemonData.types;

        // Extract type names from the structure returned by the API
        const typeNames = pokemonTypes.map(typeSlot => typeSlot.type.name);

        // Assert the expected type is included
        expect(typeNames).to.include(expectedType);
        expect(typeNames.length).to.be.greaterThan(0);
    });
});
