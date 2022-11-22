import { getJokes } from './modules/api.js'; /** ./ betyder starta i nuvarande mapp */
import { display } from './modules/display.js';

async function start() {
    const jokes = await getJokes();
    display(jokes);
}

start();