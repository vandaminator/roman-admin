<script lang="ts">
  import { AppBar, LightSwitch, getDrawerStore } from "@skeletonlabs/skeleton";
  import type { DrawerSettings } from "@skeletonlabs/skeleton";
  import Icon from "@iconify/svelte";

  const drawerStore = getDrawerStore();

  const handleOpen = () => {
    const drawerSettings: DrawerSettings = {
      id: "nav",
    };
    drawerStore.open(drawerSettings);
  };
</script>

<AppBar
  gridColumns="grid-cols-3"
  slotDefault="place-self-center"
  slotTrail="place-content-end"
>
  <svelte:fragment slot="lead">
    <a
      class="text-2xl font-bold text-secondary-400-500-token max-sm:hidden"
      href="/">RomanScoops Admin</a
    >
    <button
      type="button"
      class="btn-icon variant-filled-surface sm:hidden"
      on:click={handleOpen}
    >
      <Icon icon="mingcute:menu-fill" />
    </button>
  </svelte:fragment>

  <!-- middle -->
  <a class="text-xl font-bold text-secondary-400-500-token sm:hidden" href="/"
    >Roman Admin</a
  >

  <svelte:fragment slot="trail">
    <LightSwitch class="max-sm:hidden" />
  </svelte:fragment>
</AppBar>
