<script>
	import Modal from "./Modal.svelte";
	import AddPerson from "./AddPerson.svelte";

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

	let showModal = false
	
	const openModal = () => {
		showModal = !showModal
	}
</script>

<Modal message="Hello There" isPromo = {true} showModal = {showModal} on:click={openModal}>
	<AddPerson></AddPerson>
</Modal>



<main>
	<button on:click={openModal}> Show Modal</button>
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