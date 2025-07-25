const axios = require('axios');
const { expect } = require('chai');
const testData = require('../fixtures/apiData.json'); // ✅ path corrected

async function fetchPokemonData(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const response = await axios.get(url, {
    headers: { Accept: 'application/json' }
  });
  return response.data;
}

function extractTypeNames(pokemonData) {
  return pokemonData.types.map(slot => slot.type.name);
}

describe('backend scenarios', async function () {
  it(`Scenario 1: validate ${testData.pokemon} has expected type and moves`, async () => {
    const pokemon = await fetchPokemonData(testData.pokemon);

    // Validate the "moves" array
    expect(pokemon).to.have.property('moves').that.is.an('array').and.is.not.empty;
    expect(pokemon.moves[0]).to.have.nested.property('move.name').that.is.a('string');

    // Validate the "types"
    const typeNames = extractTypeNames(pokemon);
    expect(typeNames).to.include(testData.expectedType);
  });
});
