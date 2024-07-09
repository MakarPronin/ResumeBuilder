import { writable } from 'svelte/store';
import infoLangNotChosen from '$lib/resumeInfo.json';

const language = writable('ru');
const resumeInfo = writable(infoLangNotChosen['ru']);

language.subscribe((value) => {
	resumeInfo.set(infoLangNotChosen[value]);
});

export { resumeInfo, language };
