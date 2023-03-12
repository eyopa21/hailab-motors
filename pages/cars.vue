<template>
   
     <div class="pb-32">
     <Cars/>
     </div>
</template>
<script setup>
import "../assets/css/icons.css";



const products = ref([
    {
        id: 1,
        title: 'aa',
        description: 'aa',
        client: 'aa',
        category: 'aa',
        date: '',
        location: 'aa',
        images: ['aa']
    },
    {
        id: 2,
        title: 'bb',
        description: 'bb',
        client: 'bb',
        category: 'bb',
        date: 'bb',
        location: 'bb',
        images: []
    },
    {
        id: 3,
        title: 'cc',
        description: 'cc',
        client: 'cc',
        category: 'cc',
        date: 'cc',
        location: 'cc',
        images: []
    }
])
</script>
