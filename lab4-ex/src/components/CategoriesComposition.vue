<template>
  <div>
    <h2>Composition API Example</h2>
    <CategoryWrapper :items="categories" :loading="loading" />
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import CategoryWrapper from './category/CategoryWrapper.vue'; 

const serviceProvider = inject('serviceProvider'); 

const categories = ref([]);
const loading = ref(true);

onMounted(async () => {
  if (serviceProvider) {
    categories.value = await serviceProvider.getCategoriesService().get({});
    loading.value = false;
  } else {
    console.error('serviceProvider is not available.');
  }
});
</script>