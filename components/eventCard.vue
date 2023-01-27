<template>
    <a :href="link" class="event">
        <div class="event-card">
            <NuxtImg 
            class="event-card-image" 
            provider="storyblok"
            format="webp"
            width="300"
            height="300"
            :src="poster"
            alt=""/>
            <div class="event-card-info">
                <div class="event-date">
                    <p class="event-date-day">{{ day }}</p>
                    <p class="event-date-month">{{ month }}</p>
                    <p class="event-date-year">{{ year }}</p>
                </div>
                <div class="event-info">
                    <p class="event-title">{{ title }}</p>
                    <span class="event-place" v-html="fullPlace"></span>
                </div>
            </div>
        </div>
    </a>
</template>
<style>
    .event {
        display: block;
        text-decoration: none;
        width: 300px;
        height: 300px;
        margin: 1rem 0;
        color: var(--secondary-color);
    }
    .event-card {
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        width: 300px;
        height: 300px;
    }
    .event-card-image{
        width: 100%;
        height: 100%;
    }
    .event-card-info {
        position: absolute;
        display: flex;
        margin: 0 1rem 2rem 1rem;
        width: calc(100% - 2rem);
        height: 30%;
        bottom: 0;
    }
    .event-info{
        background: #fff;
        display: flex;
        padding: 10px;
        font-size: 14px;
        flex-direction: column;
        justify-content: space-between;
    }
    .event-date {
        background: #000;
        width: 45%;
        padding: 5px;
        color: #fff;
    }
    .event-date-day {
        font-size: 24px;
        margin: 5px 0;
        font-weight: bold;
    }
    .event-date-month {
        text-align: center;
        margin: 5px 0;
        font-size: 14px;
    }
    .event-date-year {
        text-align: right;
        margin: 5px 0;
        font-size: 10px;
    }
</style>
<script setup>
    const props = defineProps({ 
        date: String ,
        title: String,
        poster: String,
        place: Object,
        link: String
    })
    const fullPlace = computed(() => renderRichText(props.place))
    const months = {
        ES: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        EN: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    const newDate = new Date(props.date)
    const day = newDate.getDate()
    const month = months.ES[newDate.getMonth()]
    const year = newDate.getFullYear()
</script>