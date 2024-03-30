<script lang="ts">
  export let data;
  const { info, userInfo } = data;
  const products = info.products;
</script>

<main>
  <div class="flex flex-col gap-3">
    <p class="font-bold text-xl">
      From User: {userInfo.firstName}
      {userInfo.lastName}
    </p>

    <h1 class="text-xl underline">Products</h1>
    <div class="flex flex-col gap-3">
      {#each products as p}
        <div
          class="bg-secondary-500/10 card p-4 flex flex-col gap-3 items-center"
        >
          <img class="" src={p.image} alt={p.title} height="200" width="200" />
          <div class="flex justify-between w-full">
            <p>Price: R {p.price}</p>
            <p>Qty: {p.quantity}</p>
            <p>Total: R {p.price * p.quantity}</p>
          </div>
        </div>
      {/each}
    </div>

    <h2 class="mt-5 text-xl font-semibold">
      Total: R {info.price}
    </h2>

    <div class="flex gap-3">
      <button type="button" class="btn variant-filled-error flex-grow"
        >Cancel</button
      >
      <button type="button" class="btn variant-filled-success flex-grow"
        >Confirm Order</button
      >
    </div>
  </div>
</main>
