<script lang="ts">
        export let data;
    let email = ""
    let password = ""
</script>

<form method="post" action="?/login">
    <label for="email">Email: </label>
    <input class="dark:bg-surface-400-500-token" id="email" name="email" type="email" bind:value={email}>
    
    <label for="password">Password: </label>
    <input id="password" name="password" type="password" bind:value={password}>

    <button type="submit">Login</button>
</form>