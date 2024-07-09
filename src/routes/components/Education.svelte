<script>
	import { resumeInfo } from '../resumeStore.js';

	let info;
	let items;
	resumeInfo.subscribe((value) => {
		info = value;
		items = info.sections.education.items;
	});

	let fontFamily = info.parameters.fontFamily;
	let textLineMargin = info.parameters.textLineMargin;
	let fontSize = info.parameters.fontSize;

	let textSettingsStyle = `font-family: ${fontFamily}; margin-top: ${textLineMargin}px; margin-bottom: ${textLineMargin}px;`;
</script>

<div id="education-section-container">
	{#each items as item}
		<div class="education-item-container">
			<p class="education-item-name" style="{textSettingsStyle} font-size: {fontSize * 1.2}rem;">
				{item.fieldOfStudy}, {item.school}
			</p>
			<ul class="description-container">
				{#each item.bulletPoints as bulletPoint}
					<li style="{textSettingsStyle} font-size: {fontSize}rem;">
						{bulletPoint}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>

<style>
	.education-item-name {
		font-weight: 500;
	}
</style>
