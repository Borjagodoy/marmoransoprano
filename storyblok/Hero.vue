<template>
    <section class="hero">
      <carousel :items-to-show="1">
        <slide v-for="slide in 3" :key="slide">
            <NuxtImg
            provider="storyblok"
            sizes="sm:100vw md:50vw lg:1432px xl: 1080px"
            format="webp"
            :src="blok.heroImage" 
            alt=""/>
        </slide>
        <template #addons>
            <navigation />
            <pagination />
        </template>
      </carousel>
    </section>
  </template>
  <style>
    .hero img {
      width: 100%;
    }
  </style>
  <script setup>
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

  defineProps({ blok: Object })
  </script>