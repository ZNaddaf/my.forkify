import Search from './models/Search';
import * as searchView from './views/searchView';
import {
    elements,
    renderLoder,
    clearLoader
} from './views/base';


/** GLOBAL STATE
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const conrolSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();
    console.log(query);

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoder(elements.searchRes);

        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results in UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    conrolSearch();
})

search.getResults();