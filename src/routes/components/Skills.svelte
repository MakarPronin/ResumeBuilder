<script>
    import { resumeInfo } from "../resumeStore.js";

    let info;
    let items;
    resumeInfo.subscribe((value)=> {
        info = value;
        items = info.sections.skills.items;
    });

    let fontFamily = info.parameters.fontFamily;
    let textLineMargin = info.parameters.textLineMargin;
    let fontSize = info.parameters.fontSize;

    let textSettingsStyle = `font-family: ${fontFamily}; margin-top: ${textLineMargin}px; margin-bottom: ${textLineMargin}px;`;
</script>

<div id="skills-section-container">
    {#each items as skill}
        <p class="skill-description" style="{textSettingsStyle} font-size: {fontSize*1.2}rem;">
            {skill}
        </p>
    {/each}
</div>

<style>
    #skills-section-container {
        display: grid;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
        gap: 10px;
    }

    .skill-description {
        font-weight: 500;
    }
</style>