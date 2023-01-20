<script>
	import Header from "./Components/Header.svelte";
	import Footer from "./Components/Footer.svelte";
	import Tabs from "./Shared/Tabs.svelte";
	import CreatePollForm from "./Components/CreatePollForm.svelte";

	let items = ["Current Polls", "Add a new Poll"]
	let activeItem = "Current Polls"

	const tabChange = (e) =>{
		activeItem = e.detail
	}
</script>

<Header></Header>
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}></Tabs>
	{#if activeItem=== items[0]}
	<p>Poll component goes here</p>
	{:else if activeItem === items[1]}
	<CreatePollForm></CreatePollForm>
	{/if}
</main> 
<Footer></Footer>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>