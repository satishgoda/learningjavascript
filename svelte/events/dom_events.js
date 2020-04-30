<script>
	let m = { x: 0, y: 0 };
	
	$: {
		console.clear();
		console.log(m);
	}
</script>


<style>
	div { width: 100%; height: 100%; }
</style>

<div on:mousemove={e => m = {x: e.clientX, y: e.clientY}}>
	The mouse position is {m.x} x {m.y}
</div>
