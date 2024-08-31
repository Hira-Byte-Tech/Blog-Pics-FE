<template>
    <div class="bg-gray-900 text-gray-100">
        <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2">
                <!-- Left Side -->
                <div class="w-full md:w-3/12 md:mx-2">
                    <!-- Profile Card -->
                    <div class="bg-gray-800 p-3 border-t-4 border-green-400 rounded-lg">
                        <div class="image overflow-hidden">
                            <img class="h-auto w-full mx-auto rounded-full"
                                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                alt="">
                        </div>
                        <h1 class="text-gray-100 font-bold text-xl leading-8 my-1">Jane Doe</h1>
                        <h3 class="text-gray-400 font-lg text-semibold leading-6">Anime Blogger</h3>
                        <p class="text-sm text-gray-300 hover:text-gray-200 leading-6">
                            Passionate about sharing anime reviews, news, and fan theories. Dive into my world of anime!
                        </p>
                        <ul
                            class="bg-gray-800 text-gray-400 hover:text-gray-300 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                            <li class="flex items-center py-3">
                                <span>Status</span>
                                <span class="ml-auto"><span
                                        class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                            </li>
                            <li class="flex items-center py-3">
                                <span>Joined</span>
                                <span class="ml-auto">Nov 07, 2020</span>
                            </li>
                        </ul>
                    </div>
                    <!-- End of Profile Card -->

                    <div class="my-4"></div>

                    <!-- Similar Bloggers Card -->
                    <div class="bg-gray-800 p-3 hover:shadow rounded-lg">
                        <div class="flex items-center space-x-3 font-semibold text-gray-100 text-xl leading-8">
                            <span class="text-green-500">
                                <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            <span>Similar Bloggers</span>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="text-center my-2">
                                <img class="h-16 w-16 rounded-full mx-auto"
                                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                    alt="">
                                <a href="#" class="text-green-400">Kojstantin</a>
                            </div>
                            <div class="text-center my-2">
                                <img class="h-16 w-16 rounded-full mx-auto"
                                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt="">
                                <a href="#" class="text-green-400">James</a>
                            </div>
                            <div class="text-center my-2">
                                <img class="h-16 w-16 rounded-full mx-auto"
                                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                    alt="">
                                <a href="#" class="text-green-400">Natie</a>
                            </div>
                        </div>
                    </div>
                    <!-- End of Similar Bloggers Card -->
                </div>

                <!-- Right Side -->
                <div class="w-full md:w-9/12 mx-2">
                    <!-- Recent Posts -->
                    <div class="bg-gray-800 p-3 shadow-sm rounded-lg mb-4">
                        <div class="flex items-center space-x-2 font-semibold text-gray-100 leading-8">
                            <span class="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Recent Posts</span>
                        </div>
                        <ul class="space-y-4">
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">Top 10 Anime of 2024: A Comprehensive Review</a>
                                <p class="text-gray-300 text-sm">Posted on August 20, 2024</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">The Evolution of Anime Art Styles Through the
                                    Decades</a>
                                <p class="text-gray-300 text-sm">Posted on August 10, 2024</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">Anime vs. Manga: The Key Differences</a>
                                <p class="text-gray-300 text-sm">Posted on July 30, 2024</p>
                            </li>
                        </ul>
                    </div>
                    <!-- End of Recent Posts -->

                    <!-- Most Liked Posts -->
                    <div class="bg-gray-800 p-3 shadow-sm rounded-lg mb-4">
                        <div class="flex items-center space-x-2 font-semibold text-gray-100 leading-8">
                            <span class="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Most Liked Posts</span>
                        </div>
                        <ul class="space-y-4">
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">The Best Anime of All Time: Fan Favorites</a>
                                <p class="text-gray-300 text-sm">1,200 likes</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">Underrated Anime Gems You Need to Watch</a>
                                <p class="text-gray-300 text-sm">950 likes</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">Exploring Anime Genres: What’s Your Favorite?</a>
                                <p class="text-gray-300 text-sm">850 likes</p>
                            </li>
                        </ul>
                    </div>
                    <!-- End of Most Liked Posts -->

                    <!-- Popular Anime Series -->
                    <div class="bg-gray-800 p-3 shadow-sm rounded-lg mb-4">
                        <div class="flex items-center space-x-2 font-semibold text-gray-100 leading-8">
                            <span class="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4.4l3.6 1.8M12 4v4M4 12h16M4 12l2-2M20 12l-2-2" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Popular Anime Series</span>
                        </div>
                        <ul class="space-y-4">
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">Attack on Titan</a>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">My Hero Academia</a>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-green-400">Demon Slayer</a>
                            </li>
                        </ul>
                    </div>
                    <!-- End of Popular Anime Series -->

                    <!-- Fan Polls -->
                    <div class="bg-gray-800 p-3 shadow-sm rounded-lg mb-4">
                        <div class="flex items-center space-x-2 font-semibold text-gray-100 leading-8">
                            <span class="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 2L4 7H1l3 5-3 5h3l2 5 3-5h6l2 5 3-5h3l-3-5 3-5h-3L6 2z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">Fan Polls</span>
                        </div>
                        <div class="text-gray-300">
                            <p class="text-lg">What's your favorite anime genre?</p>
                            <form class="mt-3">
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-green-500" name="genre" value="Action">
                                    <span class="ml-2">Action</span>
                                </label>
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-green-500" name="genre" value="Romance">
                                    <span class="ml-2">Romance</span>
                                </label>
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-green-500" name="genre" value="Fantasy">
                                    <span class="ml-2">Fantasy</span>
                                </label>
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-green-500" name="genre" value="Comedy">
                                    <span class="ml-2">Comedy</span>
                                </label>
                                <button type="submit"
                                    class="mt-3 block w-full text-green-400 bg-gray-700 hover:bg-gray-600 rounded-lg py-2">Vote</button>
                            </form>
                        </div>
                    </div>
                    <!-- End of Fan Polls -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Add any necessary script logic here
</script>

<style scoped>
/* Add any custom styles here */
</style>