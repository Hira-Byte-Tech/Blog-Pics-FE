<template>
    <div class="bg-[#0f172a] text-white min-h-screen">
      <!-- Tag Filter Section -->
      <section class="py-8">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold mb-6 text-gray-100">Filter by Tags</h2>
          <div class="flex flex-wrap gap-4 mb-8">
            <div 
              v-for="tag in tags" 
              :key="tag" 
              @click="filterByTag(tag)" 
              :class="['cursor-pointer rounded-lg py-2 px-4 text-xs font-bold uppercase', selectedTag === tag ? 'bg-rose-500 text-white' : 'bg-rose-700 text-white']"
              class="transition-colors duration-200"
            >
              #{{ tag }}
            </div>
          </div>
        </div>
      </section>
  
      <!-- Posts Section -->
      <main class="py-12">
        <div class="container mx-auto px-4">
          <!-- Title and Filtered Posts -->
          <h2 class="text-2xl font-bold mb-6 text-gray-100">Posts for "{{ selectedTag || 'All Tags' }}"</h2>
          <div class="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <EachPost v-for="item in filteredPosts" :key="item.id" :post="item" />
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
  import { ref, computed } from 'vue';
  import Pagination from '~/components/Common/Pagination.vue';
  import EachPost from '~/components/Common/EachPost.vue';
  
  // Sample data for posts
  const posts = ref([
    { id: 1, title: 'Action-Packed Adventure', description: 'A thrilling action adventure that keeps you on the edge.', author: 'John Doe', thumbnail: '/path/to/image1.jpg', tags: ['Action', 'Adventure'] },
    { id: 2, title: 'Comedy of Errors', description: 'Laugh out loud with this hilarious comedy.', author: 'Jane Smith', thumbnail: '/path/to/image2.jpg', tags: ['Comedy'] },
    // Add more sample posts here
  ]);
  
  const tags = [
    "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Dementia", "Demons", "Historical",
    "Kids", "Magic", "Martial Arts", "Military", "Parody", "Police", "Samurai", "School", "Space", "Super Power",
    "Vampire", "Game", "Hentai", "Cars", "Gourmet", "Harem", "Isekai", "Mahou Shoujo", "Shoujo Ai", "Shounen Ai", "Tragedy"
  ];
  
  const selectedTag = ref(''); // Track the selected tag
  const pageNumber = ref(1);
  const totalPages = ref(10); // Example total pages
  
  // Filter posts based on the selected tag
  const filteredPosts = computed(() => {
    if (!selectedTag.value) return posts.value;
    return posts.value.filter(post => post.tags.includes(selectedTag.value));
  });
  
  // Method to filter posts by tag
  const filterByTag = (tag) => {
    selectedTag.value = selectedTag.value === tag ? '' : tag;
    pageNumber.value = 1; // Reset page number when changing filters
  };
  
  </script>
  
  <style scoped>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  