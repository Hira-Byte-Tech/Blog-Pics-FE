<template>
    <!-- component -->
    <div class="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-6 rounded-lg shadow-sm">

        <div class="flex justify-center">
            <nav class="flex space-x-2" aria-label="Pagination">
                <div @click="pageNumber -= 1"
                    class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    Previous
                </div>
                <div @click="pageNumber = page" v-for="page in length" href="#"
                    :class="pageNumber == page ? 'bg-rose-500' : 'bg-white'"
                    class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700   hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    {{ page }}
                </div>

                <div @click="pageNumber += 1"
                    class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                    Next
                </div>
            </nav>
        </div>

    </div>
</template>

<script setup>
const pageNumber = defineModel('pageNumber')
const props = defineProps(['length'])
watch(pageNumber, (newValue) => {
    if (newValue > length.value) {
        pageNumber.value = 1
    }
})
</script>

<style lang="scss" scoped></style>