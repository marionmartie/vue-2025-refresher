<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import JobList from './JobList.vue';
import axios from 'axios';
import { Job } from '@/types';

const props = defineProps<{
  limit?: number,
}>()

const jobs = ref<Job[]>([])

onMounted(async() => {
  try {
    const res = await axios.get('http://localhost:5001/jobs')
    jobs.value = res.data
  } catch (error) {
    console.error('Failed to fetch data', error)
  }
})
</script>

<template>
    <section class="bg-green-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobList v-for="job in jobs.slice(0, limit)" 
            :job="job" 
            key="job.id"
            :limit="(limit ? limit : 3)" />
        </div>
      </div>
    </section>

    <section class="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
</template>