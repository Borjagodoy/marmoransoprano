<template>
    <section v-editable="blok" class="critica">
        <div class="container">
            <span class="critica-quote_text" v-html="critica"></span>
            <span class="critica-quote_source">{{blok.source}}</span>
            
        </div>
    </section>
</template>
<style>
.critica {
    display: flex;
    justify-content: center;
    min-height: 400px;
    background-color: var(--secondary-color);
    color: #fff;
}
.critica .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.critica-quote_text{
    font-size: var(--font-size-xl);
    font-weight: lighter;;
    max-width: 1080px;
}
@media (max-width: 650px) {
    .critica {
        min-height: 300px;
    }
    .critica .container{
        padding: 0;

    }
    .critica-quote_text{
        font-size: var(--font-size-s);
    }
    .critica-quote_source {
        font-size: var(--font-size-xs);
    }
}
</style>
<script setup>
    const props = defineProps({ blok: Object })
    const critica = computed(() => renderRichText(props.blok.Critica));
</script> 