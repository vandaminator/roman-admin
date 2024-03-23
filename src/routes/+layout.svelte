<script>
  import "../app.pcss";
  import {
    AppShell,
    initializeStores,
    Drawer,
    getDrawerStore,
    LightSwitch,
  } from "@skeletonlabs/skeleton";
  import Navbar from "$lib/components/navbar.svelte";

  initializeStores();
  const drawerStore = getDrawerStore();
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Navbar />
  </svelte:fragment>
  <!-- (sidebarLeft) -->
  <!-- (sidebarRight) -->
  <!-- (pageHeader) -->
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <!-- (pageFooter) -->
  <svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>

<Drawer>
  {#if $drawerStore.id === "nav"}
    <div class="p-4">
      <LightSwitch />
    </div>
  {:else if $drawerStore.id === "example-2"}
    <div></div>
  {:else}
    <div></div>
  {/if}
</Drawer>
