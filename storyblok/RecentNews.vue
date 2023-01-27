<template>
    <section v-editable="blok" class="recent-news">
        <div class="container">
            <h1 class="recent-news_title"><span>{{blok.Title}}</span> recientes</h1>
            <div class="recent-news-content">
                <ul class="recent-news_list">
                    <li v-for="news in blok.newsList">
                        <newsCard
                            :img="news.Photo?.filename" 
                            :imgAlt="news.Photo?.alt"
                            :title="news.Title"
                            :link="news.link?.url" 
                            :source="news.Source"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </section>
  </template>
  <style>
    .recent-news{
        color: #000;
        width: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
    }
    .recent-news .container{
        display: flex;
        flex-direction: column;
    }
    .recent-news_title {
        font-size: var(--font-size-xl)
    }
    .recent-news-content{
        display: flex;
        justify-content: center;
    }
    .recent-news_list {
        list-style: none;
        width: 100%;
        max-width: 1080px;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
  </style>
 <script setup>
 const props = defineProps({ blok: Object })
</script>