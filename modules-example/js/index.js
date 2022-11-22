import { getJokes } from './modules/api.js';
import { display } from './modules/display.js';

async function start() {
    const jokes = await getJokes();
    display(jokes);
}

start();