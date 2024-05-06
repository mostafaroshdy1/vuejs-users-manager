<template>
    <Navbar />
    <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";

export default {
    name: "App",
    components: { Navbar },
};
</script>

<style lang="scss" scoped></style>
