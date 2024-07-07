<script>
    import { resumeInfo } from "../resumeStore.js";

    let info;
    let items;
    resumeInfo.subscribe((value)=> {
        info = value;
        items = info.sections.links.items;
    });

    let fontFamily = info.parameters.fontFamily;
    let textLineMargin = info.parameters.textLineMargin;
    let fontSize = info.parameters.fontSize;

    let textSettingsStyle = `font-family: ${fontFamily}; margin-top: ${textLineMargin}px; margin-bottom: ${textLineMargin}px;`;
</script>

<div id="links-section-container">
    {#each Object.keys(items) as item}
        <div class="link-container">
            <p class="link-description" style="{textSettingsStyle} font-size: {fontSize*1.2}rem;">
                {items[item].description}: 
            </p>
            <a class="link" href={items[item].link} target="_blank" style="{textSettingsStyle} font-size: {fontSize}rem;">
                {items[item].link}
            </a>
        </div>
    {/each}
</div>

<style>
    #links-section-container {
        display: grid;
        grid-template-columns: calc(50% - 10px) calc(50% - 10px);
        gap: 10px;
    }

    .link {
        color: black;
    }

    .link-description {
        font-weight: 500;
    }
</style>