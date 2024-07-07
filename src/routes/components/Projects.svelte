<script>
    import { resumeInfo } from "../resumeStore.js";

    let info;
    let items;
    resumeInfo.subscribe((value)=> {
        info = value;
        items = info.sections.projects.items;
    });

    let fontFamily = info.parameters.fontFamily;
    let textLineMargin = info.parameters.textLineMargin;
    let fontSize = info.parameters.fontSize;

    let textSettingsStyle = `font-family: ${fontFamily}; margin-top: ${textLineMargin}px; margin-bottom: ${textLineMargin}px;`;
</script>

<div id="projects-section-container">
    {#each items as project}
        <div class="project-container" style="margin-bottom: {textLineMargin*5}px;">
            <p class="project-name" style="{textSettingsStyle} font-size: {fontSize*1.2}rem; margin-bottom: {textLineMargin*2}px">
                {project.name}
            </p>
            <p class="project-description" style="{textSettingsStyle} font-size: {fontSize}rem;">
                {project.description}
            </p>
            <a class="project-link" href={project.link} style="{textSettingsStyle} font-size: {fontSize}rem;">
                {project.link}
            </a>
        </div>
    {/each}
</div>

<style>
    .project-link {
        color: black;
    }

    .project-name {
        font-weight: 600;
    }
</style>