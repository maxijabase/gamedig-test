<script lang="ts">
	import type { ServerInfo } from 'src/types/serverInfo';
	import { onMount } from 'svelte';
	import { serversStore, loading } from '../stores/servers';

	onMount(async () => {
			loading.set(true);
			let response = await fetch('/api/servers');
			let result: ServerInfo = await response.json();
			serversStore.set(result);
			loading.set(false);
	});
</script>

{#if $loading}
	<h1>LOADING</h1>
{:else}
	<h2>connect: {$serversStore?.connect}</h2>
	<h2>map: {$serversStore?.map}</h2>
	<h2>name: {$serversStore?.name}</h2>
{/if}