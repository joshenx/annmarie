<script lang='ts'>
	let username = '';
	let password = '';
  
	async function handleSubmit() {
	  // Perform login logic here, e.g., make an API call
	  try {
		const response = await fetch('/api/login', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({ username, password })
		});
  
		if (response.ok) {
		  // Successful login
		  alert('Login successful!');
		} else {
		  // Failed login
		  alert('Login failed!');
		}
	  } catch (error) {
		console.error('An error occurred:', error);
	  }
	}
</script>
  
<div class="login">
	<h1>Login</h1>
  
	<form on:submit|preventDefault={handleSubmit}>
	  <label>
		Username:
		<input type="text" bind:value={username} />
	  </label>
  
	  <label>
		Password:
		<input type="password" bind:value={password} />
	  </label>
  
	  <button type="submit">Login</button>
	</form>
</div>
  
<style>
	.login {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
  
	form {
	  display: flex;
	  flex-direction: column;
	  gap: 1rem;
	  width: 300px;
	}
  
	label {
	  display: flex;
	  flex-direction: column;
	}
</style>