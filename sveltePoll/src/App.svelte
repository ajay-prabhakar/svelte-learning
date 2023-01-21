<script>
	import Header from "./Components/Header.svelte";
	import Footer from "./Components/Footer.svelte";
	import Tabs from "./Shared/Tabs.svelte";
	import CreatePollForm from "./Components/CreatePollForm.svelte";
	import PollList from "./Components/PollList.svelte";

	let items = ["Current Polls", "Add a new Poll"]
	let activeItem = "Current Polls"

	let polls = [
		{
			id: 1, 
			question: 'Phython or javaScript',
			answerA: 'Phython',
			answerB: 'JavaScript',
			votesA: 9, 
			votesB: 15,
		}
	]

	const tabChange = (e) =>{
		activeItem = e.detail
	}

	const addPoll = (e) => {
		let poll = e.detail
		polls = [poll,...polls]
		activeItem = items[0]
	}

	const handleVote = (e) => {
		const { id, option } = e.detail;
		
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find(poll => poll.id == id);
		if(option === 'a'){
		upvotedPoll.votesA++;
		}
		if(option === 'b'){
		upvotedPoll.votesB++;
		}
		polls = copiedPolls;
    };
</script>

<Header></Header>
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}></Tabs>
	{#if activeItem=== items[0]}
	<PollList {polls} on:vote = {handleVote}></PollList>
	{:else if activeItem === items[1]}
	<CreatePollForm on:add = {addPoll}></CreatePollForm>
	{/if}
</main> 
<Footer></Footer>

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>