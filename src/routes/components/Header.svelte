<script>
	import { resumeInfo } from '../resumeStore.js';

	let info;
	resumeInfo.subscribe((value) => {
		info = value;
	});

	let centralSpace = info.parameters.centralSpace;
	let fontFamily = info.parameters.fontFamily;
	let textLineMargin = info.parameters.textLineMargin;
	let fontSize = info.parameters.fontSize;

	let textSettingsStyle = `font-family: ${fontFamily}; margin-top: ${textLineMargin}px; margin-bottom: ${textLineMargin}px;`;
</script>

<div id="header-container">
	<img
		src="avatar.png"
		alt="avatar"
		id="avatar-img"
		style="width: calc(20% - {centralSpace}px); margin-right: {centralSpace}px;"
	/>
	<div id="general-info-container">
		<div id="contact-info-container" style="color: rgb(0, 0, 0, 0.5);">
			<p style="font-size: {fontSize}rem; {textSettingsStyle}">
				{info.generalInfo.address}
			</p>
			<p style="font-size: {fontSize}rem; {textSettingsStyle}">
				{info.generalInfo.phone} • {info.generalInfo.email}
			</p>
		</div>
		<div id="who-i-am-container">
			<p id="name" style="{textSettingsStyle} font-weight: 600; font-size: {fontSize * 2}rem;">
				{info.generalInfo.name}
			</p>
		</div>
	</div>
</div>

<style>
	#avatar-img {
		border-radius: 1000px;
		height: fit-content;
		aspect-ratio: 1/1;
	}

	#header-container {
		display: flex;
		width: 100%;
		height: fit-content;
	}

	#general-info-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
