<script>
    let name
    let beltColour
    let age
    // let fighting = false
    // let sneaking = false
    // let running = false
    let skills = []

    const handleSubmit = () =>{
        console.log(name, beltColour, age, skills)
    }
</script>

<!-- with out preventDefault it will automatically refresh the page it will not print the things in that  -->
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="number" bind:value={age}>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Skills:</label>
<!-- 
    <input type="checkbox" bind:checked={fighting}>Fighting<br>
    <input type="checkbox" bind:checked={sneaking}>sneaking<br>
    <input type="checkbox" bind:checked={running}>running<br> -->

    
    <input type="checkbox" bind:group={skills} value="fighting">Fighting<br>
    <input type="checkbox" bind:group={skills} value="sneaking">sneaking<br>
    <input type="checkbox" bind:group={skills} value="running">running<br>

    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Belt color:</label>
    
    <select bind:value={beltColour}>
        <option value="black">black</option>
        <option value="orange">orange</option>
        <option value="white">white</option>
    </select>
    <button>Add person</button>
</form>