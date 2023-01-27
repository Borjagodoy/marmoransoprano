<template>
    <section v-editable="blok" class="recent-events">
        <div class="container">
            <h1 class="recent-events_title">{{blok.Title}}</h1>
            <div class="events">
                <ul class="event-list">
                    <li v-for="event in blok.eventList">
                        <eventCard
                            :date="event.date"
                            :title="event.title"
                            :poster="event.poster?.filename"
                            :place="event.place"
                            :link="event.eventLink?.url"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </section>
  </template>
  <style>
    .recent-events {
        display: flex;
        justify-content: center;
    }
    .recent-events_title {
        font-size: var(--font-size-xl)
    }
    .recent-events .container{
        display: flex;
        flex-direction: column;
    }
    .events {
        display: flex;
        width: 100%;
        justify-content: center;   
        margin: 4rem 0;
    }
    .event-list{
        display: flex;
        flex-wrap: wrap;
        padding: 0 2rem;
        width: 100%;
        justify-content: space-between;
        max-width: 1080px;
    }
    @media (max-width: 1021px) {
        .event-list{
            justify-content: space-around;
        }
    }
  </style>
 <script setup>
    const props = defineProps({ blok: Object })
 </script>