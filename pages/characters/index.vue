<template>
    <div class="bg-[#0f172a] text-white min-h-screen">
        <!-- Main Content -->
        <main class="py-12">
            <div class="container mx-auto px-4">
                <!-- Title -->
                <h2 class="text-2xl font-bold mb-6 text-gray-100">Character Database</h2>

                <!-- Character Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="character in characters" :key="character.id"
                        class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                        <img :src="character.image" :alt="character.name" class="w-full h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-semibold mb-2 text-gray-100">{{ character.name }}</h3>
                            <p class="text-gray-400 mb-4">{{ character.description }}</p>
                            <div class="flex justify-between text-sm text-gray-500">
                                <span>Origin: {{ character.origin }}</span>
                                <span>Abilities: {{ character.abilities }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination -->
                <div class="flex justify-center mt-8">
                    <Pagination v-model:page="pageNumber" :length="totalPages" class="text-gray-100" />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Pagination from '~/components/Common/Pagination.vue';

// Sample data for characters
const characters = ref([
    { id: 1, name: 'Naruto Uzumaki', image: '/path/to/naruto.jpg', description: 'A ninja with dreams of becoming the strongest leader of his village.', origin: 'Naruto', abilities: 'Shadow Clone Jutsu' },
    { id: 2, name: 'Luffy Monkey D.', image: '/path/to/luffy.jpg', description: 'The captain of the Straw Hat Pirates with the power of the Gum-Gum Fruit.', origin: 'One Piece', abilities: 'Gum-Gum Fruit Powers' },
    // Add more sample characters here
]);

const pageNumber = ref(1);
const totalPages = ref(10); // Example total pages

</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}
</style>