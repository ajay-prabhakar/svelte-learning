<script>
	let  firstName = 'Yoshi'
	let  lastName = 'Yoshi'

	let beltcolor = "black"
	$: fullName = `${firstName} ${lastName}`

	var name = firstName + lastName

	const handleClick = () => {
		beltcolor = 'orange'
	}

	const handleInput = (e) => {
		beltcolor = e.target.value
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit this fuck {beltcolor}.</p>
	<button on:click={handleClick}>This is belt color</button>
	<!-- <input type="text" on:input={handleInput} value={beltcolor}> -->

	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>

	<input type="text" bind:value={beltcolor}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em; 
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>