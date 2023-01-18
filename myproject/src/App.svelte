<script>
	let people = [
    { name: 'yoshi', beltColour: 'black', age: 25, id: 1 },
    { name: 'mario', beltColour: 'orange', age: 45, id: 2 },
    { name: 'luigi', beltColour: 'brown', age: 35, id: 3 }
  	]

	const handleClick = (e,id) => {
		// have to reassign or else it won't update the UI and filter the people array 
		people = people.filter((person) => person.id != id)
		console.log(e)
	}

	let age = 15
</script>


{#if age > 20}
	<p>The age is greater than 20</p>
	{:else if age >5}
	<p>age is greater than 5</p>
	{:else}
	<p>age is below 5</p>
{/if}

<main>
	{#each people as person (person.id)}
		<div>
			<h4>{person.name}</h4>
			{#if person.beltColour === 'black'}
				<h4><strong>Strongest Ninja</strong></h4>
			{/if}
			<p>{person.age} years old, {person.beltColour} belt.</p>

			<!-- on click if we directly call the fuction till will excute in runtime so making () => works  -->
			<button on:click={(e) => handleClick(e, person.id)}> Delete </button>
		</div>
		{:else}
		<p>There are no people to show</p>
	{/each}
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