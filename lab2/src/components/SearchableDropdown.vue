<template>
  <div class="relative w-full">
    <input
      type="text"
      v-model="searchQuery"
      @focus="showDropdown = true"
      @keydown.down.prevent="navigate(1)"
      @keydown.up.prevent="navigate(-1)"
      @keydown.enter.prevent="selectItem(filteredItems[highlightedIndex])"
      placeholder="Search..."
      class="w-full px-4 py-2 border rounded focus:outline-none z-0"
    />
    <Button
      v-if="selectedItem"
      label="X"
      color="gray"
      size="small"
      class="absolute right-2 top-2"
      :onClick="clearSelection"
    />

    <ul v-if="showDropdown" class="absolute w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto z-10">
      <li
        v-for="(item, index) in filteredItems"
        :key="item.value"
        @click="selectItem(item)"
        @mouseover="highlightedIndex = index"
        :class="[
          'px-4 py-2 cursor-pointer',
          highlightedIndex === index ? 'bg-blue-500 text-white' : 'bg-white text-black'
        ]"
      >
        <slot name="item" :item="item">{{ item.label }}</slot>
      </li>
      <li v-if="filteredItems.length === 0" class="px-4 py-2 text-gray-500">
        Nothing found
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Button from './Button.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['update:selected'])

const searchQuery = ref('')
const showDropdown = ref(false)
const highlightedIndex = ref(-1)
const selectedItem = ref(null)

const filteredItems = computed(() => {
  return props.items.filter(item =>
    item.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const navigate = (direction) => {
  if (filteredItems.value.length === 0) return
  highlightedIndex.value = (highlightedIndex.value + direction + filteredItems.value.length) % filteredItems.value.length
}

const selectItem = (item) => {
  selectedItem.value = item
  searchQuery.value = item.label
  emits('update:selected', item)
  setTimeout(() => {
    showDropdown.value = false
  }, 0)
}

const clearSelection = () => {
  selectedItem.value = null
  searchQuery.value = ''
  emits('update:selected', null)
}
</script>

<style scoped>
</style>