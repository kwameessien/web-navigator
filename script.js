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