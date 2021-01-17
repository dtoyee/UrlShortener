<template>
    <Shortener />
    <router-view />
</template>

<script>
    import Shortener from '../components/Shortener.vue'
    export default {
        components: {
            Shortener
        }
    }
</script>

<style>
.container {
  width: 40%;
  margin-top: 5em;
}

input[type="text"] {
  width: 100%;
  margin-top: 4px;
}
</style>
