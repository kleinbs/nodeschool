function countWords(inputWords) {

	return inputWords.reduce(function(prev, curr){
			if(prev[curr]){
				prev[curr] += 1;
			} else {
				prev[curr] = 1;
			}
			return prev;
		}, {});
}

module.exports = countWords
