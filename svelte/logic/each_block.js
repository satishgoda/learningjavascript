<script>
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<h1>The Famous Cats of YouTube</h1>

<ul>
	{#each cats as { name, id }, index}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
			{name} ({index})
		</a></li>
	{/each}
</ul>
