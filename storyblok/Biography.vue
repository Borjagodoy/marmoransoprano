<template>
    <section v-editable="blok" class="biography">
        <div class="container">
        <div class="biography-text">
            <h1 class="biography-text_title">{{blok.name}}</h1>
            <p class="biography-text_subtitle">{{blok.subtitle}}</p>
            <span class="biography-text_description" v-html="biographyContent"></span>
        </div>
        <NuxtImg 
            class="biography-image" 
            provider="storyblok"
            sizes="sm:100vw md:50vw lg:1432px xl: 1080px"
            format="webp"
            width="450"
            height="546"
            :src="blok.image?.filename"
            alt=""/>
        </div>
    </section>
</template>
<style>
    .biography{
        color: #000;
        display: flex;
        justify-content: center;
        padding: 5rem 0rem 5rem;
    }
    .biography .container {
        display: flex;
        justify-content: space-between;
    }
    .biography-text {
        padding: 2rem;
        max-width: 650px;
    }
    .biography-text_title {
        font-size: var(--font-size-l)
    }
    .biography-text_subtitle {
        font-size: var(--font-size-xl);
        font-weight: bold;
    }
    .biography-image{
        margin: 4rem;
    }
    .biography-text_description {
        display: block;
        padding: 2rem 0;
        font-size: var(--font-size-s)
    }
    @media (max-width: 1049px) {
        .biography-image {
            width: 450px;
        }
    }
    @media (max-width: 920px) {
        .biography .container {
            flex-direction: column-reverse;
            flex-wrap: wrap;
            align-items: center;
        }
        .biography-image {
            margin: 0;
        }
        .biography-text {
            padding: 2rem 0;
        }
    }
    @media (max-width: 520px) {
        .biography-image {
            width: 100%;
        }
    }
</style>
<script setup>
 const props = defineProps({ blok: Object })
 const biographyContent = computed(() => renderRichText(props.blok.Biography));
</script>