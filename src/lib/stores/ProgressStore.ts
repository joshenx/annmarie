import { writable } from 'svelte/store';

export const status = writable({
  stage: 0,
  isLoggedIn: false,
  displayErrorMessage: false,
  errorMessage: "",
});
