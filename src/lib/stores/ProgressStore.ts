import { writable } from 'svelte/store';

const ProgressStore = () => {
  console.log('*: playerStore -> store()')
	
	const status = {
		stage: 0,
    isLoggedIn: false,
    displayErrorMessage: false,
    errorMessage: "",
	};
	
	const { subscribe, set, update } = writable(status);
	
  const methods = {		
		setStage (stageNum:number) {
      console.log('*: playerStore -> setStage')
			update(status =>  ({...status, stage: stageNum}))
		},
		
		registerLogin () {
      console.log('*: playerStore -> registerLogin()')
			update(status => ({...status, isLoggedIn: true}))
		},
		
		displayLoginError () {
      console.log('*: playerStore -> displayLoginError()')
			update(status => ({...status, displayErrorMessage: true, errorMessage: "that's not quite it.."}))
		},

    hideLoginError () {
      console.log('*: playerStore -> displayLoginError()')
			update(status => ({...status, displayErrorMessage: false, errorMessage: ""}))
		},

    getStatus() {
      return status;
    }
	};

  return {
    subscribe,
    ...methods
  }
}

export default ProgressStore();