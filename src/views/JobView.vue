<script setup lang="ts">
import { useRoute } from 'vue-router';
import { type Job } from '@/types'
import {ref, onMounted} from 'vue'
import axios from 'axios';
import BackButton from '@/component/BackButton.vue';

const route = useRoute()
const id = route.params.id
const job = ref<Job>()

const loading = ref(true)

onMounted(async() => {
    try {
        const res = await axios.get(`http://localhost:5001/jobs/${id}`)
        job.value = res.data
    } catch (error) {
        console.error('Error fetching data', error)
    } finally {
        loading.value = false
    }
})
</script>

<template>

<div class="container-xl mx-auto px-4 py-10">
    <BackButton />
    <div v-if="!loading">
        <div class="border rounded-t-lg">
            <div class="bg-green-500 text-white rounded-t-lg p-2">
                <h1 class="text-2xl font-bold">{{ job.title }}</h1>
                <p>{{ job.type }}</p>
            </div>
            <div class="p-2">
                <p class="my-2">{{ job.description }}</p>
                <p class="my-2"> <i class="pi pi-map-marker"></i> {{ job.location }}</p>
                <p class="my-2">{{ job.salary }}</p>
            </div>
        </div>
        <div class="mt-4">
            <h2 class="text-xl">Company Information</h2>
            <p class="my-2">{{ job.company.name }}</p>
            <p class="my-2">{{ job.company.description }}</p>
            <p class="my-2">{{ job.company.contactEmail }}</p>
            <p class="my-2">{{ job.company.contactPhone }}</p>
        </div>
    </div>
</div>

</template>