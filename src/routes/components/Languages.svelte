<script>
	import { resumeInfo } from '../resumeStore.js';

	let info;
	let items;
	resumeInfo.subscribe((value) => {
		info = value;
		items = info.sections.languages.items;
	});

	let fontFamily = info.parameters.fontFamily;
	let textLineMargin = info.parameters.textLineMargin;
	let fontSize = info.parameters.fontSize;

	let textSettingsStyle = `font-family: ${fontFamily}; margin-top: ${textLineMargin}px; margin-bottom: ${textLineMargin}px;`;
</script>

<div id="languages-section-container">
	{#each items as language}
		<p class="language-description" style="{textSettingsStyle} font-size: {fontSize * 1.2}rem;">
			{language}
		</p>
	{/each}
</div>

<style>
	#languages-section-container {
		display: grid;
		grid-template-columns: calc(50% - 10px) calc(50% - 10px);
		gap: 10px;
	}

	.language-description {
		font-weight: 500;
	}
</style>
