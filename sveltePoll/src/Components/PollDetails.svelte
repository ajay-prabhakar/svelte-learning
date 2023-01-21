<script>
  import { createEventDispatcher } from "svelte";


    let dispatch = createEventDispatcher()
    export let poll;
  
    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;

    const handleVote = (option, id) => {
        dispatch("vote", {option: option, id: id})
    }
  </script>
  
  <div class="card">
  <div class="poll">
    <h3>{ poll.question }</h3>
    <p>Total votes: { totalVotes }</p>
    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote('a', poll.id)}>
      <div class="percent percent-a"></div>
      <span>{ poll.answerA } ({ poll.votesA } votes)</span>
    </div>
    <div class="answer" on:click={() => handleVote('b', poll.id)}>
      <div class="percent percent-b"></div>
      <span>{ poll.answerB } ({ poll.votesB } votes)</span>
    </div>
  </div>
</div>
  
<style>
    h3{
      margin: 0 auto;
      color: #555;
    }
    p{
      margin-top: 6px;
      font-size: 14px;
      color: #aaa;
      margin-bottom: 30px;
    }
    .answer{
      background: #fafafa;
      cursor: pointer;
      margin: 10px auto;
      position: relative;
    }
    .answer:hover{
      opacity: 0.6;
    }
    span{
      display: inline-block;
      padding: 10px 20px;
    }
    .card{
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
    }
</style>