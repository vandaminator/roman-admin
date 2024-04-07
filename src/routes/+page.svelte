<script lang="ts">
  let email = "";
  let password = "";
</script>

<form class="flex flex-col gap-3" method="post" action="?/login">
  <label class="label" for="email">
    <span>Email</span>
    <input
      class="input p-3"
      id="email"
      name="email"
      type="email"
      bind:value={email}
    />
  </label>

  <label class="label" for="password">
    <span>Password</span>
    <input class="input p-3" id="password" name="password" type="password" bind:value={password} />
  </label>

  <button class="btn variant-filled-primary mt-9" type="submit">Login</button>
</form>
