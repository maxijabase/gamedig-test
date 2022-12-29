import type { ServerInfo } from 'src/types/serverInfo';
import { writable, type Writable } from 'svelte/store';

export const serversStore: Writable<ServerInfo> = writable();
export const loading: Writable<boolean> = writable(false);


export const fetchServers = async () => {
  if (typeof window !== "undefined"){
    loading.set(true);
    const response = await fetch(`${window.location.origin}/api/servers`);
    const result = await response.json();
    serversStore.set(result);
    loading.set(false);
  }
};
