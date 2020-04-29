<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
	  //numbers.push(numbers[numbers.length-1] + 1);
		//numbers = numbers
		numbers = [...numbers, numbers[numbers.length-1]+1]
	}

	function removeNumber() {
		numbers.pop();
		if (numbers.length === 0) {
			numbers = [0]
		}else{
			numbers = numbers
		}
	}
	
	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>

<button on:click={removeNumber}>
	Remove a number
</button>
