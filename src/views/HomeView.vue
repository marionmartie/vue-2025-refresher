<script setup lang="ts">
import Cards from '@/component/Cards.vue';
import Hero from '@/component/Hero.vue';
import JobsList from '@/component/JobsList.vue';
</script>

<template>
    <Hero />
    <Cards />
    <JobsList :limit="3" />
</template>