<template>
    <div class="min-h-screen bg-gray-900 text-gray-200">
        <!-- Header -->
        <header class="bg-gradient-to-r from-rose-500 to-pink-600 text-white py-6 shadow-lg">
            <div class="container mx-auto px-4">
                <h1 class="text-4xl font-extrabold tracking-tight">My Awesome Blog</h1>
                <p class="mt-2 text-lg">Share your thoughts with the world</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-10">
            <!-- Create Post Form -->
            <section class="bg-gray-800 rounded-lg shadow p-8 mb-10">
                <h2 class="text-3xl font-semibold mb-6 text-rose-400">Create a New Post</h2>
                <form @submit.prevent="submitPost">
                    <div class="mb-4">
                        <label class="block text-gray-400 font-medium mb-2" for="title">Title</label>
                        <input v-model="newPost.title" type="text" id="title"
                            class="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-700 text-gray-200"
                            placeholder="Enter your post title" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-400 font-medium mb-2" for="content">Content</label>
                        <textarea v-model="newPost.content" id="content" rows="6"
                            class="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-700 text-gray-200"
                            placeholder="Write your post content here..." required></textarea>
                    </div>
                    <button type="submit"
                        class="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200">
                        Publish Post
                    </button>
                </form>
            </section>

            <!-- Posts List with Filtering and Sorting -->
            <section>
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-3xl font-semibold text-rose-400">Recent Posts</h2>
                    <div class="flex gap-4">
                        <input v-model="searchQuery" type="text"
                            class="px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-700 text-gray-200"
                            placeholder="Search posts..." />
                        <select v-model="sortOrder"
                            class="px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-gray-700 text-gray-200">
                            <option value="desc">Newest First</option>
                            <option value="asc">Oldest First</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(post, index) in filteredPosts" :key="index"
                        class="bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
                        <h3 class="text-xl font-bold text-gray-100 mb-2">{{ post.title }}</h3>
                        <p class="text-gray-400 mb-4">{{ post.content }}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">{{ post.date }}</span>
                            <button class="text-rose-400 hover:underline" @click="deletePost(index)">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Pagination -->
            <section class="mt-10 flex justify-center">
                <button @click="previousPage" :disabled="currentPage === 1"
                    class="px-4 py-2 mx-2 bg-gray-700 rounded-lg shadow text-rose-400 hover:bg-gray-600 disabled:opacity-50">
                    Previous
                </button>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="px-4 py-2 mx-2 bg-gray-700 rounded-lg shadow text-rose-400 hover:bg-gray-600 disabled:opacity-50">
                    Next
                </button>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-800 text-white py-4 mt-10">
            <div class="container mx-auto px-4 text-center">
                <p>&copy; 2024 My Awesome Blog. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
definePageMeta({
    layout: 'manage'
})
const newPost = ref({
    title: '',
    content: ''
});

const posts = ref([
    { title: 'First Post', content: 'This is my first post content.', date: 'August 31, 2024' },
    { title: 'Second Post', content: 'Here is another exciting post.', date: 'August 30, 2024' },
    // Add more dummy posts to demonstrate pagination and filtering
    { title: 'Third Post', content: 'Yet another post.', date: 'August 29, 2024' },
    { title: 'Fourth Post', content: 'Keep them coming.', date: 'August 28, 2024' },
    { title: 'Fifth Post', content: 'Blogging is fun!', date: 'August 27, 2024' },
    { title: 'Sixth Post', content: 'Another day, another post.', date: 'August 26, 2024' },
]);

const searchQuery = ref('');
const sortOrder = ref('desc');
const currentPage = ref(1);
const postsPerPage = 3;

const filteredPosts = computed(() => {
    let sortedPosts = posts.value.sort((a, b) => {
        return sortOrder.value === 'asc'
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
    });
    let filtered = sortedPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    return filtered.slice((currentPage.value - 1) * postsPerPage, currentPage.value * postsPerPage);
});

const totalPages = computed(() => {
    return Math.ceil(filteredPosts.value.length / postsPerPage);
});

const submitPost = () => {
    if (newPost.value.title && newPost.value.content) {
        posts.value.push({
            title: newPost.value.title,
            content: newPost.value.content,
            date: new Date().toLocaleDateString(),
        });
        newPost.value.title = '';
        newPost.value.content = '';
    }
};

const deletePost = (index) => {
    posts.value.splice(index, 1);
};

const previousPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}
</style>