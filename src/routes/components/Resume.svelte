<script>
    import { resumeInfo, language } from "../resumeStore.js";
	import Header from "./Header.svelte";
    import Education from "./Education.svelte";
    import Links from "./Links.svelte";
    import Skills from "./Skills.svelte";
    import Languages from "./Languages.svelte";
    import Projects from "./Projects.svelte";

    language.set("ru");

    const components = {
        education: Education,
        links: Links,
        skills: Skills,
        languages: Languages,
        projects: Projects
    }

    let info;
    let sections;
    resumeInfo.subscribe((value)=> {
        info = value;
        sections = info.sections;
    });
    
    let centralSpace = info.parameters.centralSpace;
    let borderPaddingVertical = info.parameters.borderPaddingVertical;
    let borderPaddingHorizontal = info.parameters.borderPaddingHorizontal;
    let spaceBetweenSections = info.parameters.spaceBetweenSections;
    let fontFamily = info.parameters.fontFamily;
    let textLineMargin = info.parameters.textLineMargin;
    let fontSize = info.parameters.fontSize;

    let gridCentralSpaceStyle = `width: calc(100% - ${centralSpace}px);`;
    let borderPaddingVerticalStyle = `padding-top: ${borderPaddingVertical}px; padding-bottom: ${borderPaddingVertical}px;`;
    let borderPaddingHorizontalStyle = `padding-inline: ${borderPaddingHorizontal}px;`;
    let textSettingsStyle = `font-family: ${fontFamily}; margin-top: ${textLineMargin}px; margin-bottom: ${textLineMargin}px;`;
    let spaceBetweenSectionsStyle = `margin-top: ${spaceBetweenSections}px;`;
</script>

<div id="resume-container" style="width: calc(1200px - 2 * {borderPaddingHorizontal}px);{borderPaddingHorizontalStyle} {borderPaddingVerticalStyle}">
    <Header/>
    <div id="grid-container">
    {#each Object.keys(sections) as section}
        <div class="section-name-container" style="{spaceBetweenSectionsStyle} {gridCentralSpaceStyle}">
            <p class="section-name" style="color: rgb(0, 0, 0, 0.5); font-size: {fontSize*1.2}rem; {textSettingsStyle}">
                {sections[section].name}
            </p>
        </div>
        <div class="section-container" style={spaceBetweenSectionsStyle}>
            <svelte:component this={components[section]} />
        </div>
    {/each}
    </div>

    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="background.png" id="background-img"/>
</div>

<style>
    #background-img {
        position: fixed;
        object-fit: cover;
        left: 0px;
        top: 0px;
        z-index: -1;
        width: 1200px;
        height: 100%;
        filter: opacity(20%);
    }

    #grid-container {
        display: grid;
        grid-template-columns: 20% 80%;
    }
</style>