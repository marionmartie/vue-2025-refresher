<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import { type Job } from '@/types';

const form = reactive({
    title: '',
    type: 'Full Time',
    description: '',
    location: '',
    salary: 'Under $50K',
    company: {
        name: '',
        description: '',
        contactEmail: '',
        contactPhone: ''
    }
})

const submitForm = async () => {
    const newJob: Job = {
        title: form.title,
        type: form.type,
        description: form.description,
        location: form.location,
        salary: form.salary,
        company:  {
            name: form.company.name,
            description: form.company.description,
            contactEmail: form.company.contactEmail,
            contactPhone: form.company.contactPhone
        }
    }
    try {
        const res = await axios.post('http://localhost:5002/jobs', newJob)
        router.push(`/jobs/${res.data.id}`)
    } catch (error) {
        console.error('Error posting data', error)
    }
}
</script>

<template>
    <div class="container m-auto max-w-2xl px-4 py-10">
        <h1 class="text-xl md:text-3xl mb-12 font-bold">Create New Job</h1>
        <form @submit.prevent="submitForm">

            <div class="mb-4">
                <label for="type" class="text-lg font-bold block text-gray-700">Type</label>
                <select v-model="form.type" name="type" class="border rounded w-full py-2 px-3" id="type">
                    <option value="Full Time">Full Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                </select>
            </div>

            <div class="mb-4">
                <label for="title" class="text-lg font-bold block text-gray-700">Title</label>
                <input type="text" v-model="form.title" name="title" class="border rounded w-full py-2 px-3" id="title">
            </div>

            <div class="mb-4">
                <label for="description" class="text-lg font-bold block text-gray-700">Description</label>
                <textarea v-model="form.description" name="description" id="description" class="w-full border rounded" rows="4"></textarea>
            </div>

            <div class="mb-4">
                <label for="salary" class="text-lg font-bold block text-gray-700">Salary</label>
                <select type="text" v-model="form.salary" name="salary" class="border rounded w-full py-2 px-3" id="salary">
                    <option value="Under $50K">under $50K</option>
                    <option value="$50K - $60K">$50 - $60K</option>
                    <option value="$60K - $70K">$60 - $70K</option>
                    <option value="$70K - $80K">$70 - $80K</option>
                    <option value="$80K - $90K">$80 - $90K</option>
                    <option value="$90K - $100K">$90 - $100K</option>
                    <option value="$100K - $125K">$100 - $125K</option>
                    <option value="$125K - $150K">$125 - $150K</option>
                    <option value="$150K - $175K">$150 - $175K</option>
                    <option value="$175K - $200K">$175 - $200K</option>
                    <option value="Over $200K">Over $200K</option>
                </select>
            </div>

            <div class="mb-4">
                <label for="location" class="text-lg font-bold block text-gray-700">Location</label>
                <input type="text" v-model="form.location" name="location" class="border rounded w-full py-2 px-3" id="location">
            </div>

            <h2 class="text-2xl mb-5">Company Info</h2>

            <div class="mb-4">
                <label for="name" class="text-lg font-bold block text-gray-700">Name</label>
                <input type="text" v-model="form.company.name" name="name" class="border rounded w-full py-2 px-3" id="name">
            </div>

            <div class="mb-4">
                <label for="company_description" class="text-lg font-bold block text-gray-700">Description</label>
                <input type="text" v-model="form.company.description" name="company_description" class="border rounded w-full py-2 px-3" id="company_description">
            </div>

            <div class="mb-4">
                <label for="contactEmail" class="text-lg font-bold block text-gray-700">Contact Email</label>
                <input type="text" v-model="form.company.contactEmail" name="contactEmail" class="border rounded w-full py-2 px-3" id="contactEmail">
            </div>

            <div class="mb-4">
                <label for="contactPhone" class="text-lg font-bold block text-gray-700">Contact Phone</label>
                <input type="text" v-model="form.company.contactPhone" name="contactPhone" class="border rounded w-full py-2 px-3" id="contactPhone">
            </div>

            <div class="mb-4" type="submit">
                <button class="bg-green-500 rounded w-full py-2 text-white font-bold hover:bg-green-700 cursor-pointer">Add Job</button>
            </div>

        </form>
    </div>
</template>