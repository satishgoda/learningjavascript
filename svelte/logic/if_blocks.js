<script>
	let user = { loggedIn: true };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

{#if user.loggedIn}
<button on:click={toggle}>
	Log out
</button>
{/if}

{#if !user.loggedIn}
<button on:click={toggle}>
	Log in
</button>
{/if}
