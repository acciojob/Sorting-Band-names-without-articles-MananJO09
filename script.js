//your code here
function removeArticles(name) {
	return name.replace(/^(a |an |the )/i, '');
}

let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

bandNames.sort((a, b) => {
    return removeArticles(a).localeCompare(removeArticles(b));
});