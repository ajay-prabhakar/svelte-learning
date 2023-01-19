<script>
	import Header from "./Components/Header.svelte";
	import Footer from "./Components/Footer.svelte";
	import Tabs from "./Shared/Tabs.svelte";

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
	<p>new Poll component</p>	
	{/if}
</main> 
<Footer></Footer>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>