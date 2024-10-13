
<template>
  <div>
    <h2>Options API Example</h2>
    <CategoryWrapper :items="categories" :loading="loading" />
  </div>
</template>

<script>
import CategoryWrapper from './category/CategoryWrapper.vue';

export default {
  data() {
    return {
      categories: [],
      loading: true 
    };
  },
  async created() {
    this.categories = await this.$serviceProvider.getCategoriesService().get({});
    this.loading = false; 
  },
  components: {
    CategoryWrapper 
  }
};
</script>