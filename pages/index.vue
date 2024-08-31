<template>
    <div id="Homepage" class="bg-[#0f172a] text-white min-h-screen flex flex-col">
        <!-- Main Content -->
        <main class="flex-1 py-12">
            <div class="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
                <!-- Sidebar -->
                <aside class="lg:w-1/4 bg-gray-800 rounded-lg p-6 mb-8 lg:mb-0">
                    <h2 class="text-2xl font-bold mb-6 text-gray-100">Trending Now</h2>
                    <div class="space-y-4">
                        <div v-for="item in trendingPosts" :key="item.id"
                            class="flex items-center p-4 border-b border-gray-700">
                            <img :src="item.thumbnail" alt="Thumbnail" class="w-16 h-16 object-cover rounded-md mr-4">
                            <div>
                                <a :href="`/posts/${item.id}`"
                                    class="text-lg font-semibold text-blue-400 hover:underline">{{ item.title }}</a>
                                <p class="text-gray-400">{{ item.excerpt }}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                <!-- Main Content Area -->
                <div class="lg:w-3/4">
                    <!-- Filters and Sorting -->
                    <section class="mb-8">
                        <div class="flex flex-col sm:flex-row justify-between items-center mb-6">
                            <!-- Filters -->
                            <div class="flex flex-wrap items-center gap-4 mb-4 sm:mb-0">
                                <div class="relative">
                                    <label for="category" class="block text-gray-400">Category:</label>
                                    <select id="category"
                                        class="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                                        <option value="">All Categories</option>
                                        <option value="anime">Anime</option>
                                        <option value="manga">Manga</option>
                                        <option value="reviews">Reviews</option>
                                    </select>
                                </div>
                                <div class="relative">
                                    <label for="tag" class="block text-gray-400">Tag:</label>
                                    <select id="tag"
                                        class="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                                        <option value="">All Tags</option>
                                        <option value="action">Action</option>
                                        <option value="adventure">Adventure</option>
                                        <option value="romance">Romance</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Sorting -->
                            <div class="relative">
                                <label for="sort" class="block text-gray-400">Sort By:</label>
                                <select id="sort"
                                    class="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                                    <option value="latest">Latest</option>
                                    <option value="popular">Popular</option>
                                    <option value="oldest">Oldest</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    <!-- Newest Posts Section -->
                    <section class="mb-12">
                        <h2 class="text-2xl font-bold mb-6 text-gray-100">Newest Posts</h2>
                        <div class="grid w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            <EachPost v-for="item in posts" :key="item.id" :post="item" />
                        </div>
                    </section>

                    <!-- Most Liked Posts Section -->
                    <section class="bg-gray-800 rounded-lg p-6 mb-12">
                        <h2 class="text-2xl font-bold mb-6 text-gray-100">Most Liked Posts</h2>
                        <div class="flex flex-col space-y-4">
                            <div v-for="item in mostLikedPosts" :key="item.id"
                                class="flex items-center p-4 border-b border-gray-700">
                                <img :src="item.thumbnail" alt="Thumbnail"
                                    class="w-16 h-16 object-cover rounded-md mr-4">
                                <div>
                                    <a :href="`/posts/${item.id}`"
                                        class="text-lg font-semibold text-blue-400 hover:underline">{{ item.title }}</a>
                                    <p class="text-gray-400">{{ item.description }}</p>
                                    <p class="text-gray-500 text-sm">By {{ item.author }}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Most Viewed Posts Section -->
                    <section class="bg-gray-800 rounded-lg p-6 mb-12">
                        <h2 class="text-2xl font-bold mb-6 text-gray-100">Most Viewed Posts</h2>
                        <div class="flex flex-col space-y-4">
                            <div v-for="item in mostViewedPosts" :key="item.id"
                                class="flex items-center p-4 border-b border-gray-700">
                                <img :src="item.thumbnail" alt="Thumbnail"
                                    class="w-16 h-16 object-cover rounded-md mr-4">
                                <div>
                                    <a :href="`/posts/${item.id}`"
                                        class="text-lg font-semibold text-blue-400 hover:underline">{{ item.title }}</a>
                                    <p class="text-gray-400">{{ item.description }}</p>
                                    <p class="text-gray-500 text-sm">By {{ item.author }}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Pagination -->
                    <Pagination v-model:page="pageNumber" :length="totalPages" class="my-8" />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Pagination from '~/components/Common/Pagination.vue';
import EachPost from '~/components/Common/EachPost.vue';

// Sample data for posts
const posts = ref([
    { id: 1, title: 'New Anime Release', description: 'Check out the latest anime that just hit the screens.', author: 'John Doe', thumbnail: '/path/to/image1.jpg' },
    { id: 2, title: 'Top 10 Manga of the Year', description: 'Our list of the top 10 manga you should read this year.', author: 'Jane Smith', thumbnail: '/path/to/image2.jpg' },
    // Add more sample posts here
]);

const trendingPosts = ref([
    { id: 1, title: 'Trending Anime News', excerpt: 'Big news in the anime world.', thumbnail: '/path/to/trending1.jpg' },
    { id: 2, title: 'Hottest Manga Releases', excerpt: 'Discover the hottest manga releases this month.', thumbnail: '/path/to/trending2.jpg' },
    // Add more trending posts here
]);

const mostLikedPosts = ref([
    { id: 1, title: 'Most Liked Anime Moments', description: 'These moments have received the most likes.', author: 'Alice Johnson', thumbnail: '/path/to/liked1.jpg' },
    { id: 2, title: 'Fan Favorite Manga Characters', description: 'Meet the manga characters that fans love the most.', author: 'Bob Lee', thumbnail: '/path/to/liked2.jpg' },
    // Add more most liked posts here
]);

const mostViewedPosts = ref([
    { id: 1, title: 'Most Viewed Anime Episodes', description: 'The episodes that everyone is talking about.', author: 'Charlie Brown', thumbnail: '/path/to/viewed1.jpg' },
    { id: 2, title: 'Top Viewed Manga Chapters', description: 'The manga chapters that have the highest views.', author: 'Diana Prince', thumbnail: '/path/to/viewed2.jpg' },
    // Add more most viewed posts here
]);

const pageNumber = ref(1);
const totalPages = ref(10); // Example total pages

</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}
</style>