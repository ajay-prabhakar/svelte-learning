import { Writable } from "svelte/store";

const PollStore = Writable(
    [
		{
			id: 1, 
			question: 'Phython or javaScript',
			answerA: 'Phython',
			answerB: 'JavaScript',
			votesA: 9, 
			votesB: 15,
		}
	]
);