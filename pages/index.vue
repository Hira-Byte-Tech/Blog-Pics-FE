<template>
    <div id="Homepage" class="relative flex min-h-screen flex-col justify-center overflow-hidden   py-6 sm:py-12">
        <div class="mx-auto max-w-screen-xl px-4 w-full">
            <h2 class="mb-4 font-bold text-xl text-gray-600">Newest</h2>
            <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <EachPost v-for="item in 12" :key="item.id">
                </EachPost>
            </div>
            <div>{{ pageNumber }}</div>

            <Pagination v-model="pageNumber" :length="20"></Pagination>
        </div>
    </div>
</template>

<script setup>
import Pagination from '~/components/Common/Pagination.vue';
import EachPost from '~/components/Common/EachPost.vue';
const config = useRuntimeConfig();
const env = config.public.TEST_ENV;
const pageNumber = ref(1)

onMounted(() => {
    console.log(env);

})


definePageMeta({
    layout: 'default'
})
</script>

<style lang="scss" scoped></style>