<script lang="ts">
	import { serversStore, loading, fetchServers } from '../stores/servers';

	fetchServers()
</script>

{#if $loading}
	<h1>LOADING</h1>
{:else}
	<h2>connect: {$serversStore?.connect}</h2>
	<h2>map: {$serversStore?.map}</h2>
	<h2>name: {$serversStore?.name}</h2>
{/if}
