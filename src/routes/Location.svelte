<script>
    import { onMount } from 'svelte';
    
    let latitude = null;
    let longitude = null;
    
    async function getLocation() {
      if ('geolocation' in navigator) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
        } catch (error) {
          console.error('Error retrieving location:', error);
        }
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
    
    onMount(getLocation);
</script>
  
<div>
    {#if latitude !== null && longitude !== null}
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    {:else}
      <p>Retrieving location...</p>
    {/if}
</div>
  