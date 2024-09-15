<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue';
import SearchableDropdown from './components/SearchableDropdown.vue'
import { ref } from 'vue'

const contriesItems = ref([
  { value: 1, label: 'Japan' },
  { value: 2, label: 'China' },
  { value: 3, label: 'Singapore' },
  { value: 4, label: 'Malaysia' },
  { value: 5, label: 'Thailand' },
  { value: 6, label: 'Vietnam' },
  { value: 7, label: 'Indonesia' },
  { value: 8, label: 'Philippines' },
  { value: 9, label: 'Myanmar' },
  { value: 10, label: 'Cambodia' },
  { value: 11, label: 'Laos' },
  { value: 12, label: 'Brunei' },
  { value: 13, label: 'Timor-Leste' },
  { value: 14, label: 'South Korea' },
  { value: 15, label: 'North Korea' },
  { value: 16, label: 'Mongolia' },
  { value: 17, label: 'Taiwan' },
  { value: 18, label: 'Hong Kong' },
  { value: 19, label: 'Macau' },
  { value: 20, label: 'Bangladesh' },
  { value: 21, label: 'India' },
  { value: 22, label: 'Pakistan' },
  { value: 23, label: 'Sri Lanka' },
  { value: 24, label: 'Nepal' },
  { value: 25, label: 'Bhutan' },
  { value: 26, label: 'Maldives' },
  { value: 27, label: 'Afghanistan' },
  { value: 28, label: 'Iran' },
  { value: 29, label: 'Iraq' },
  { value: 30, label: 'Syria' },
  { value: 31, label: 'Jordan' },
  { value: 32, label: 'Lebanon' },
])

const foodItems = ref( [
    { value: 1, label: 'Sushi' },
    { value: 2, label: 'Ramen' },
    { value: 3, label: 'Tempura' },
    { value: 4, label: 'Pizza' },
    { value: 5, label: 'Pasta' },
    { value: 6, label: 'Lasagna' }
  ])


const selectedCountry = ref(null)
const selectedFood = ref(null)

const handleCountrySelection = (item) => {
  selectedCountry.value = item
}
const handleFoodSelection = (item) => {
  selectedFood.value = item
}
</script>

<template>
  <div class="container">
  <HelloWorld />
  <div class="buttons-area">
    <Button label="Click Me" color="red" size="large" />
    <Button label="Click Me" color="green" size="medium" />
    <Button label="Click Me" color="blue" size="small" />
    <Button label="Click Me" color="gray" size="large" />
  </div>
  <div class="selector-area">
    <SearchableDropdown 
      :items="contriesItems.sort((a, b) => a.label.localeCompare(b.label) || a.value - b.value)" 
      @update:selected="handleCountrySelection"
    >
      <template #item="{ item }">
        <span>{{ item.label }}</span>
      </template>
    </SearchableDropdown>
    <p>Selected Country: {{ selectedCountry ? selectedCountry.label : 'None' }}</p>
  </div>
  <div class="selector-area">
    <SearchableDropdown 
      :items="foodItems.sort((a, b) => a.label.localeCompare(b.label) || a.value - b.value)" 
      @update:selected="handleFoodSelection"
    >
      <template #item="{ item }">
        <span>{{ item.label }}</span>
      </template>
    </SearchableDropdown>
    <p>Selected Food: {{ selectedFood ? selectedFood.label : 'None' }}</p>
  </div>
</div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.selector-area{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.buttons-area{
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
