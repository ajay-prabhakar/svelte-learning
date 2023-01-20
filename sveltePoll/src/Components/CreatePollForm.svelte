<script>
    let feilds = {question: '', answerA: '', answerB: ''}

    const submitHandler = () => {
        console.log(feilds)
    }
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-feild">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={feilds.question}>
    </div>
    <div class="form-feild">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={feilds.answerA}>
    </div>
    <div class="form-feild">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={feilds.answerB}>
    </div>
    <button>Add Poll</button>
</form>

<style>
    form{
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .form-feild{
        margin: 18px auto;
    }
    input{
        width: 400px;
        border-radius: 6px;
    }
    label{
        margin: 10px auto;
        text-align: left;
    }
</style>