<template>
    <div>
        <NavigationBar> </NavigationBar>
        <slot />
        <Footer> </Footer>
    </div>
    <UNotifications />
</template>

<script setup>
import NavigationBar from '~/components/App/NavigationBar.vue';
import Footer from '~/components/App/Footer.vue';
</script>

<style lang="scss" scoped></style>