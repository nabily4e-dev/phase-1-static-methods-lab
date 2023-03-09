class Formatter {
	//add static methods here

	// capitalize the first letter of a string
	static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	// remove all non-alphanumeric characters except for dashes, single quotes and spaces
	static sanitize(string) {
		return string.replace(/[^A-Za-z0-9 '-]/g, '')
	}

	// capitalize all words in a sentence except the exceptions and always capitalize the first word
	static titleize(string) {
		// define an array of exceptions
		let exceptions = [
			'the',
			'a',
			'an',
			'but',
			'of',
			'and',
			'for',
			'at',
			'by',
			'from',
		]
		// split the string into an array of words
		let words = string.split(' ')
		// map over the words array and capitalize each word unless it is an exception
		let titleizedWords = words.map((word, index) => {
			// always capitalize the first word
			if (index === 0) {
				return this.capitalize(word)
			}
			// check if the word is an exception
			else if (exceptions.includes(word)) {
				return word
			}
			// otherwise capitalize the word
			else {
				return this.capitalize(word)
			}
		})
		// join the titleized words with spaces and return the result
		return titleizedWords.join(' ')
	}
}
