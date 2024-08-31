<template>
    <div class="bg-[#0f172a] text-white font-sans">
        <!-- Hero Section -->
        <div class="relative">
            <img :src="post.coverImage" alt="Cover Image" class="w-full h-60 object-cover rounded-b-lg">
            <div
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white p-4">
                <div>
                    <h1 class="text-5xl font-bold mb-4">{{ post.title }}</h1>
                    <p class="text-lg">{{ post.intro }}</p>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="max-w-6xl mx-auto p-8 bg-gray-800 shadow-md rounded-lg mt-[-40px] relative z-10">
            <!-- Author Info -->
            <div class="flex items-center mb-6 border-b border-gray-700 pb-6">
                <img :src="post.author.avatar" alt="Author Avatar" class="w-16 h-16 rounded-full mr-4">
                <div>
                    <p class="text-xl font-semibold">{{ post.author.name }}</p>
                    <p class="text-sm text-gray-400">{{ post.date }}</p>
                    <div class="mt-2">
                        <a :href="`https://twitter.com/${post.author.twitter}`"
                            class="text-blue-400 hover:underline mr-3">Twitter</a>
                        <a :href="`https://github.com/${post.author.github}`"
                            class="text-gray-300 hover:underline">GitHub</a>
                    </div>
                </div>
            </div>

            <!-- Content -->
            <div class="prose lg:prose-xl mb-8 text-gray-300">
                <p>{{ post.content }}</p>
                <div class="flex flex-wrap gap-4">
                    <img v-for="(image, index) in post.images" :key="index" :src="image" alt="Anime Image"
                        class="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md">
                </div>
            </div>

            <!-- Comments Section -->
            <div class="border-t border-gray-700 pt-8 mt-8">
                <h2 class="text-2xl font-semibold mb-4">Comments</h2>
                <div class="space-y-6">
                    <div v-for="comment in comments" :key="comment.id" class="border border-gray-700 rounded-lg p-4">
                        <div class="flex items-center mb-2">
                            <img :src="comment.author.avatar" alt="Commenter Avatar" class="w-8 h-8 rounded-full mr-3">
                            <div>
                                <p class="text-sm font-semibold">{{ comment.author.name }}</p>
                                <p class="text-xs text-gray-400">{{ comment.date }}</p>
                            </div>
                        </div>
                        <p class="text-gray-300">{{ comment.content }}</p>
                    </div>
                    <div class="mt-4">
                        <textarea v-model="newComment"
                            class="w-full border border-gray-600 bg-gray-700 text-white rounded-lg p-2 mb-2" rows="4"
                            placeholder="Add a comment..."></textarea>
                        <button @click="submitComment"
                            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
                    </div>
                </div>
            </div>

            <!-- Related Posts -->
            <div class="border-t border-gray-700 pt-8 mt-8">
                <h2 class="text-2xl font-semibold mb-4">Related Posts</h2>
                <ul class="space-y-4">
                    <li v-for="post in relatedPosts" :key="post.id"
                        class="border border-gray-700 rounded-lg p-4 hover:bg-gray-700">
                        <a :href="`/posts/${post.id}`" class="text-lg font-semibold text-blue-400 hover:underline">{{
                            post.title }}</a>
                        <p class="text-sm text-gray-400">{{ post.excerpt }}</p>
                    </li>
                </ul>
            </div>

            <!-- Tags -->
            <div class="border-t border-gray-700 pt-8 mt-8">
                <h2 class="text-2xl font-semibold mb-4">Tags</h2>
                <div class="flex flex-wrap gap-2 mb-8">
                    <span v-for="tag in post.tags" :key="tag"
                        class="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {{ tag }}
                    </span>
                </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="bg-gray-900 text-white rounded-lg p-8 mt-8">
                <h2 class="text-2xl font-semibold mb-4">Stay Updated</h2>
                <p class="mb-4">Subscribe to our newsletter to receive the latest updates and exclusive content.</p>
                <form @submit.prevent="subscribe">
                    <input v-model="email" type="email" placeholder="Your email address"
                        class="w-full border border-gray-700 bg-gray-800 text-white rounded-lg p-3 mb-4" required>
                    <button type="submit"
                        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Simulated data
const post = ref({
    title: 'Exploring the World of Anime',
    coverImage: 'https://via.placeholder.com/1200x600?text=Anime+Cover',
    intro: 'Dive into the vibrant world of anime with our latest post. Discover top series, stunning visuals, and the impact of anime on pop culture.',
    author: {
        name: 'Sakura Hanabira',
        avatar: 'https://via.placeholder.com/64?text=Sakura',
        twitter: 'sakura_hanabira',
        github: 'sakurahanabira',
    },
    date: 'August 31, 2024',
    content: 'Anime has taken the world by storm with its unique storytelling and captivating visuals. From action-packed adventures to heartwarming romances, anime offers something for everyone. Dive deep into the rich art style and intricate plots that make anime a beloved medium worldwide.',
    tags: ['Anime', 'Manga', 'Otaku'],
    images: [
        'https://via.placeholder.com/600x400?text=Anime+1',
        'https://via.placeholder.com/600x400?text=Anime+2',
        'https://via.placeholder.com/600x400?text=Anime+3',
        'https://via.placeholder.com/600x400?text=Anime+4',
        'https://via.placeholder.com/600x400?text=Anime+5',
        'https://via.placeholder.com/600x400?text=Anime+6',
        'https://via.placeholder.com/600x400?text=Anime+7',
        'https://via.placeholder.com/600x400?text=Anime+8',
        'https://via.placeholder.com/600x400?text=Anime+9',
        'https://via.placeholder.com/600x400?text=Anime+10',
    ],
});

const comments = ref([
    { id: 1, author: { name: 'Kaito', avatar: 'https://via.placeholder.com/32?text=Kaito' }, date: 'August 31, 2024', content: 'This post is fantastic! Love the anime recommendations.' },
    { id: 2, author: { name: 'Miyuki', avatar: 'https://via.placeholder.com/32?text=Miyuki' }, date: 'August 31, 2024', content: 'Great visuals and insights. Thanks for sharing!' },
]);

const relatedPosts = ref([
    { id: 1, title: 'Top 10 Anime Series of 2024', excerpt: 'A roundup of the best anime series released this year.' },
    { id: 2, title: 'The Evolution of Anime Art Styles', excerpt: 'Exploring how anime art has changed over the decades.' },
    { id: 3, title: 'Must-Watch Anime Movies', excerpt: 'A list of must-see anime films for any fan.' },
]);

const newComment = ref('');
const email = ref('');

const submitComment = () => {
    if (newComment.value.trim()) {
        comments.value.push({
            id: comments.value.length + 1,
            author: { name: 'New Commenter', avatar: 'https://via.placeholder.com/32?text=New' },
            date: new Date().toLocaleDateString(),
            content: newComment.value,
        });
        newComment.value = '';
    }
};

const subscribe = () => {
    if (email.value) {
        alert(`Subscribed with ${email.value}`);
        email.value = '';
    }
};
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>