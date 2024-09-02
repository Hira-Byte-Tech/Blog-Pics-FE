<template>
    <div class="min-h-screen w-screen bg-gray-900 text-gray-200 flex">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-800 p-6">
        <div class="mb-10">
          <h2 class="text-2xl font-bold text-white">My Awesome Blog</h2>
          <p class="text-sm text-gray-400">A place to share your thoughts</p>
        </div>
  
        <!-- Profile Section -->
        <div class="mb-8">
          <div class="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              class="rounded-full w-12 h-12 mr-3"
            />
            <div>
              <p class="text-lg font-semibold">John Doe</p>
              <p class="text-sm text-gray-400">Blogger & Writer</p>
            </div>
          </div>
          <button class="bg-rose-500 w-full py-2 text-white rounded-lg hover:bg-rose-600 transition duration-200">
            New Post
          </button>
        </div>
  
        <!-- Navigation Links -->
        <nav class="mb-8">
          <ul>
            <li class="mb-4">
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">Home</a>
            </li>
            <li class="mb-4">
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">Categories</a>
            </li>
            <li class="mb-4">
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">About</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">Contact</a>
            </li>
          </ul>
        </nav>
  
        <!-- Categories -->
        <div>
          <h3 class="text-lg font-semibold text-gray-200 mb-3">Categories</h3>
          <ul>
            <li class="mb-2">
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">Tech</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">Lifestyle</a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">Travel</a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-rose-400 transition duration-200">Business</a>
            </li>
            </ul>
        </div>
      </aside>
  
      <!-- Main Content -->
      <slot />
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  