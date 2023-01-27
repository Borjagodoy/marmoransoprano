<template>
    <a 
        :href="link"  
        target="_blank" 
        rel="noopener noreferrer" class="recent-new">
        <NuxtImg 
            class="recent-new_img"
            provider="storyblok"
            sizes="sm:100vw md:50vw lg:400px"
            width="200"
            height="150"
            format="webp"
            :src="img" 
            :alt="imgAlt"/>
        <div class="recent-new_info">
            <span v-html="titleContent"></span>
            <p class="recent-new_info__source">
                {{source}}
            </p>
        </div>
    </a>
</template>
<style>
    .recent-new {
        display: flex;
        max-width: 600px;
        padding: 1rem;
        margin: 1rem;
        border-bottom: 1px solid var(--primary-color);
        text-decoration: none;
        color: var(--secondary-color)
    }
    .recent-new:hover {
        opacity: 0.8;
    }
    .recent-new_info {
        position: relative;
        width: 100%;
        padding: 1rem;
        font-size: var(--font-size-s);
    }
    .recent-new_img {
        width: 200px;
        height: 150px;
    }
    .recent-new_info__source {
        text-decoration: none;
        position: absolute;
        font-size: var(--font-size-xs);
        bottom: 1rem;
        right: 1rem;
    }
    @media (max-width: 725px) {
        .recent-new{
            flex-wrap: wrap;
            justify-content: center;
            max-width: 300px;
        }
        .recent-new_info__source {
            bottom: 0;
        }
    }
</style>
<script setup>
    const props = defineProps({ 
        img: String ,
        imgAlt: String,
        title: Object,
        link: String,
        source: String
    })
    const titleContent = computed(() => renderRichText(props.title));

</script>