<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Header -->
        <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 shadow-lg">
            <div class="container mx-auto px-4">
                <h1 class="text-4xl font-extrabold tracking-tight">My Awesome Blog</h1>
                <p class="mt-2 text-lg">Share your thoughts with the world</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-10">
            <!-- Create Post Form -->
            <section class="bg-white rounded-lg shadow p-8 mb-10">
                <h2 class="text-3xl font-semibold mb-6 text-gray-700">Create a New Post</h2>
                <form @submit.prevent="submitPost">
                    <div class="mb-4">
                        <label class="block text-gray-600 font-medium mb-2" for="title">Title</label>
                        <input v-model="newPost.title" type="text" id="title"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your post title" required />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-600 font-medium mb-2" for="content">Content</label>
                        <textarea v-model="newPost.content" id="content" rows="6"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your post content here..." required></textarea>
                    </div>
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200">
                        Publish Post
                    </button>
                </form>
            </section>

            <!-- Posts List -->
            <section>
                <h2 class="text-3xl font-semibold mb-6 text-gray-700">Recent Posts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="(post, index) in posts" :key="index"
                        class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-2">{{ post.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ post.content }}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500">{{ post.date }}</span>
                            <button class="text-blue-500 hover:underline" @click="deletePost(index)">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
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
import { ref } from 'vue';

const newPost = ref({
    title: '',
    content: ''
});

const posts = ref([
    { title: 'First Post', content: 'This is my first post content.', date: 'August 31, 2024' },
    { title: 'Second Post', content: 'Here is another exciting post.', date: 'August 30, 2024' },
]);

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
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}
</style>