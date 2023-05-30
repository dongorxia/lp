<template>
<div>这里用来演示setup语法糖</div>
name:{{name}}
</template>

<script setup lang="ts">
import {ref} from 'vue'
const name = ref('xiaoming')
</script>

<style lang="less">

</style>