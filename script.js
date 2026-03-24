const Stack = require('stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'google.com';

// ------------------------------
// Helper Functions
// ------------------------------

const showCurrentPage = (action) => {
	const backTop = backPages.isEmpty() ? 'None' : backPages.peek();
	const nextTop = nextPages.isEmpty() ? 'None' : nextPages.peek();

	console.log(`\nAction: ${action}`);
	console.log(`Current page: ${currentPage}`);
	console.log(`Top back page: ${backTop}`);
	console.log(`Top next page: ${nextTop}`);
};

const newPage = page => {
	backPages.push(currentPage);
	currentPage = page;

	while (!nextPages.isEmpty()) {
		nextPages.pop();
	}

	showCurrentPage(`New page: ${page}`);
};

const backPage = () => {
    if (!backPages.isEmpty()) {
        nextPages.push(currentPage);
        currentPage = backPages.pop();
        showCurrentPage('Back');
    } else {
        console.log('\nNo pages to go back to.');
    }
};

const nextPage = () => {
    if (!nextPages.isEmpty()) {
        backPages.push(currentPage);
        currentPage = nextPages.pop();
        showCurrentPage('Next');
    } else {
        console.log('\nNo pages to go forward to.');
    }
};

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------

showCurrentPage('Default');

let finish = false;
let showBack = false;
let showNext = false;

while (finish === false) {
    let instructions = baseInfo;

    if (!backPages.isEmpty()) {
        instructions += `, ${backInfo}`;
        showBack = true;
    } else {
        showBack = false;
    }

    if (!nextPages.isEmpty()) {
        instructions += `, ${nextInfo}`;
        showNext = true;
    } else {
        showNext = false;
    }

    instructions += `, ${quitInfo}`;
    console.log(instructions);
}