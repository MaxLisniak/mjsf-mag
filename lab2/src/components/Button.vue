<template>
  <button
    :class="[
      'flex items-center justify-center rounded focus:outline-none',
      sizeClasses,
      colorClasses
    ]"
    @click="handleClick"
  >
    <span v-if="icon" class="mr-2">
      <i :class="icon"></i>
    </span>
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits , computed} from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'blue',
  },
  size: {
    type: String,
    default: 'medium',
  },
  icon: {
    type: String,
    default: ''
  },
  onClick: {
    type: Function,
    default: null
  }
})

const emits = defineEmits(['click'])

const handleClick = (event) => {
  if (props.onClick) {
    props.onClick(event)
  } else {
    emits('click', event)
  }
}

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'px-2 py-1 text-sm'
    case 'large':
      return 'px-4 py-2 text-lg'
    case 'medium':
    default:
      return 'px-3 py-1.5 text-base'
  }
})

const colorClasses = computed(() => {
  switch (props.color) {
    case 'red':
      return 'bg-red-500 text-white hover:bg-red-600'
    case 'green':
      return 'bg-green-500 text-white hover:bg-green-600'
    case 'blue':
      return 'bg-blue-500 text-white hover:bg-blue-600'
    case 'gray':
    default:
      return 'bg-gray-500 text-white hover:bg-gray-600'
  }
})
</script>

<style scoped>
</style>