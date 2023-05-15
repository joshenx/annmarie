<script lang='ts'>
	import { myUsername, myPassword } from '../diary.ts';
	let username = '';
	let password = '';
  
	async function handleSubmit() {
		const validUsername = myUsername; // Replace with your desired valid username
		const validPassword = myPassword; // Replace with your desired valid password

		if (username === validUsername && password === validPassword) {
			// Successful login
			alert('Login successful!');
		} else {
			// Failed login
			alert('Invalid username or password!');
		}

		// Clear the entered values
		username = '';
		password = '';
  	}
</script>
  
<div class="login">
	<h1>Login</h1>

	<form on:submit|preventDefault={handleSubmit}>
		<label for="username">
		Username:
		<input id="username" type="text" bind:value={username} autocomplete="off" />
		</label>

		<label for="password">
		Password:
		<input id="password" type="password" bind:value={password} autocomplete="off" />
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