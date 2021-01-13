<template>
    <Menu />
    <Shortener />
    <router-view />
</template>

<script>
    import Shortener from '../components/Shortener.vue'
    import Menu from '../components/Menu.vue'
    export default {
        components: {
            Shortener,
            Menu
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
