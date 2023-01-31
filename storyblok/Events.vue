<template>
    <section v-editable="blok" class="event-list">
        <div class="container">
            <h1 class="event-list_title">{{blok.Title}}</h1>
            <ul>
                <li v-for="month in eventsToShow(blok.EventList)">                    
                    <h2 class="event-list-month">
                        {{month}} 2023
                    </h2>
                    <ul>
                        <li v-for="event in getEventForMonth(blok.EventList, month)">
                            <eventCard
                            :date="event.date"
                            :title="event.title"
                            :poster="event.poster?.filename"
                            :place="event.place"
                            :link="event.eventLink?.url"
                            />
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </section>
  </template>
  <style>
    .event-list-month {
     font-size: var(--font-size-l);
     font-weight: lighter;
     border-bottom: 0.5px solid;
    }
    .event-list {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
    }
    .event-list_title {
        font-size: var(--font-size-xl)
    }
  </style>
 <script setup>
    const props = defineProps({ blok: Object })
    let months = {
        ES: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        EN: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        }
    const eventsToShow = (eventsList) => {
        const currentMonth = new Date().getMonth()
        const getEventsMonth = eventsList.map(event => months.ES[new Date(event.date).getMonth()])
        months.ES = months.ES.splice(currentMonth)
        return months.ES.filter(month => getEventsMonth.includes(month))
    }
    const getEventForMonth = (eventList, month) => {
        const events = eventList.filter(event => new Date(event.date).getMonth() === months.ES.indexOf(month))
        console.log(events)
        return events
    }
    
    
    
 </script>