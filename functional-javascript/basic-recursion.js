function reduce(arr, fn, initial) {

	if(!arr.length){
		return initial;
	}

	var curr = arr[0];
	var next = arr.slice(1);

	return reduce(next, fn, fn(initial, curr));
}

module.exports = reduce