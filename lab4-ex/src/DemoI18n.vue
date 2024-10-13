<template>
    <h1>{{ $translate("greetings.hi") }}</h1>
    <div v-style="{ color: 'red', fontSize: '20px' }">Hello, world!</div>
    <CategoriesOptions />
    <CategoriesComposition />
    <div class="button-container" style="margin-bottom: 100px;">
        <button class="button" v-tooltip="{ content: '<b>Bold</b> Tooltip', html: true }">
        HTML Tooltip
        </button>
        <button class="button"  v-tooltip="{ content: 'Tooltip with delay', delay: 500 }">
        Delayed Tooltip
        </button>
        <button class="button"  v-tooltip="{ content: 'Tooltip on click', trigger: 'click' }">
        Click Me
        </button>
        <button class="button"  v-tooltip="{ content: 'Manually controlled tooltip', show: true }">
        Always Visible Tooltip
        </button>
    </div>
</template>
<script setup>
import {inject} from 'vue'
import CategoriesOptions from './components/CategoriesOptions.vue'; 
import CategoriesComposition from './components/CategoriesComposition.vue';

const map = inject('i18n');
console.log(map);
</script>
<style>
.tooltip-content {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Відстань від кнопки */
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

button:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
}
.button {
    position: relative;
    display: inline-block;
    border: none;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}
.button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
}
</style>
