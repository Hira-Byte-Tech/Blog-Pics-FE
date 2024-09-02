<template>
    <div class="bg-[#0f172a] text-white min-h-screen flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 p-6">
        <!-- Title -->
        <div class="mb-10">
          <h2 class="text-2xl font-bold text-white">Character Database</h2>
          <p class="text-sm text-gray-400">Explore and discover characters</p>
        </div>
  
        <!-- Search -->
        <div class="mb-6">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search characters..."
            class="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <!-- Filters -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-200 mb-2">Filters</h3>
          <select
            v-model="selectedOrigin"
            class="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Origins</option>
            <option value="Naruto">Naruto</option>
            <option value="One Piece">One Piece</option>
            <!-- Add more origin options here -->
          </select>
        </div>
  
        <!-- Sorting -->
        <div>
          <h3 class="text-lg font-semibold text-gray-200 mb-2">Sort By</h3>
          <select
            v-model="sortOrder"
            class="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <!-- Add more sorting options if needed -->
          </select>
        </div>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 py-12 px-8">
        <!-- Character Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="character in filteredAndSortedCharacters"
            :key="character.id"
            class="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            @click="openModal(character)"
          >
            <img
              :src="character.image"
              :alt="character.name"
              class="w-full h-48 object-cover"
            />
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
          <button
            @click="previousPage"
            :disabled="pageNumber === 1"
            class="px-4 py-2 mx-2 bg-gray-700 rounded-lg shadow text-white hover:bg-gray-600 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            @click="nextPage"
            :disabled="pageNumber === totalPages"
            class="px-4 py-2 mx-2 bg-gray-700 rounded-lg shadow text-white hover:bg-gray-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
  
      <!-- Character Modal -->
      <div
        v-if="isModalOpen"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <div class="bg-gray-800 rounded-lg shadow-lg w-96 p-6">
          <h3 class="text-2xl font-bold mb-4 text-gray-100">{{ selectedCharacter.name }}</h3>
          <img
            :src="selectedCharacter.image"
            :alt="selectedCharacter.name"
            class="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p class="text-gray-400 mb-4">{{ selectedCharacter.description }}</p>
          <div class="text-sm text-gray-500 mb-4">
            <p>Origin: {{ selectedCharacter.origin }}</p>
            <p>Abilities: {{ selectedCharacter.abilities }}</p>
          </div>
          <button
            @click="closeModal"
            class="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const characters = ref([
    {
      id: 1,
      name: 'Naruto Uzumaki',
      image: '/path/to/naruto.jpg',
      description: 'A ninja with dreams of becoming the strongest leader of his village.',
      origin: 'Naruto',
      abilities: 'Shadow Clone Jutsu'
    },
    {
      id: 2,
      name: 'Luffy Monkey D.',
      image: '/path/to/luffy.jpg',
      description: 'The captain of the Straw Hat Pirates with the power of the Gum-Gum Fruit.',
      origin: 'One Piece',
      abilities: 'Gum-Gum Fruit Powers'
    },
    // Add more sample characters here
  ]);
  
  const pageNumber = ref(1);
  const totalPages = ref(10); // Example total pages
  const charactersPerPage = 8;
  const searchQuery = ref('');
  const selectedOrigin = ref('');
  const sortOrder = ref('name-asc');
  const isModalOpen = ref(false);
  const selectedCharacter = ref(null);
  
  const filteredAndSortedCharacters = computed(() => {
    let filtered = characters.value.filter((character) => {
      return (
        character.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
        (selectedOrigin.value === '' || character.origin === selectedOrigin.value)
      );
    });
  
    if (sortOrder.value === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder.value === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
  
    const start = (pageNumber.value - 1) * charactersPerPage;
    const end = start + charactersPerPage;
  
    return filtered.slice(start, end);
  });
  
  const previousPage = () => {
    if (pageNumber.value > 1) {
      pageNumber.value--;
    }
  };
  
  const nextPage = () => {
    if (pageNumber.value < totalPages.value) {
      pageNumber.value++;
    }
  };
  
  const openModal = (character) => {
    selectedCharacter.value = character;
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
    