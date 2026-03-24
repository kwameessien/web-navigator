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