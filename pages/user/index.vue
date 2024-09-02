<template>
    <div class="bg-gray-900 text-gray-100">
        <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2">
                <!-- Left Side -->
                <div class="w-full md:w-3/12 md:mx-2">
                    <!-- Profile Card -->
                    <div class="bg-gray-800 p-3 border-t-4 border-rose-400 rounded-lg">
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
                                        class="bg-rose-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
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
                            <span class="text-rose-500">
                                <!-- Removed SVG -->
                            </span>
                            <span>Similar Bloggers</span>
                        </div>
                        <div class="grid grid-cols-3 gap-4">
                            <div class="text-center my-2">
                                <img class="h-16 w-16 rounded-full mx-auto"
                                    src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                                    alt="">
                                <a href="#" class="text-rose-400">Kojstantin</a>
                            </div>
                            <div class="text-center my-2">
                                <img class="h-16 w-16 rounded-full mx-auto"
                                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4" alt="">
                                <a href="#" class="text-rose-400">James</a>
                            </div>
                            <div class="text-center my-2">
                                <img class="h-16 w-16 rounded-full mx-auto"
                                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                                    alt="">
                                <a href="#" class="text-rose-400">Natie</a>
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
                            <span class="text-rose-500">
                                <!-- Removed SVG -->
                            </span>
                            <span class="tracking-wide">Recent Posts</span>
                        </div>
                        <ul class="space-y-4">
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">Top 10 Anime of 2024: A Comprehensive Review</a>
                                <p class="text-gray-300 text-sm">Posted on August 20, 2024</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">The Evolution of Anime Art Styles Through the
                                    Decades</a>
                                <p class="text-gray-300 text-sm">Posted on August 10, 2024</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">Anime vs. Manga: The Key Differences</a>
                                <p class="text-gray-300 text-sm">Posted on July 30, 2024</p>
                            </li>
                        </ul>
                    </div>
                    <!-- End of Recent Posts -->

                    <!-- Most Liked Posts -->
                    <div class="bg-gray-800 p-3 shadow-sm rounded-lg mb-4">
                        <div class="flex items-center space-x-2 font-semibold text-gray-100 leading-8">
                            <span class="text-rose-500">
                                <!-- Removed SVG -->
                            </span>
                            <span class="tracking-wide">Most Liked Posts</span>
                        </div>
                        <ul class="space-y-4">
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">The Best Anime of All Time: Fan Favorites</a>
                                <p class="text-gray-300 text-sm">1,200 likes</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">Underrated Anime Gems You Need to Watch</a>
                                <p class="text-gray-300 text-sm">950 likes</p>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">Exploring Anime Genres: What’s Your Favorite?</a>
                                <p class="text-gray-300 text-sm">850 likes</p>
                            </li>
                        </ul>
                    </div>
                    <!-- End of Most Liked Posts -->

                    <!-- Popular Anime Series -->
                    <div class="bg-gray-800 p-3 shadow-sm rounded-lg mb-4">
                        <div class="flex items-center space-x-2 font-semibold text-gray-100 leading-8">
                            <span class="text-rose-500">
                                <!-- Removed SVG -->
                            </span>
                            <span class="tracking-wide">Popular Anime Series</span>
                        </div>
                        <ul class="space-y-4">
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">Attack on Titan</a>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">My Hero Academia</a>
                            </li>
                            <li class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition duration-200">
                                <a href="#" class="text-rose-400">Demon Slayer</a>
                            </li>
                        </ul>
                    </div>
                    <!-- End of Popular Anime Series -->

                    <!-- Fan Polls -->
                    <div class="bg-gray-800 p-3 shadow-sm rounded-lg mb-4">
                        <div class="flex items-center space-x-2 font-semibold text-gray-100 leading-8">
                            <span class="text-rose-500">
                                <!-- Removed SVG -->
                            </span>
                            <span class="tracking-wide">Fan Polls</span>
                        </div>
                        <div class="text-gray-300">
                            <p class="text-lg">What's your favorite anime genre?</p>
                            <form class="mt-3">
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-rose-500" name="genre" value="Action">
                                    <span class="ml-2">Action</span>
                                </label>
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-rose-500" name="genre" value="Romance">
                                    <span class="ml-2">Romance</span>
                                </label>
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-rose-500" name="genre" value="Fantasy">
                                    <span class="ml-2">Fantasy</span>
                                </label>
                                <label class="inline-flex items-center mt-2">
                                    <input type="radio" class="form-radio text-rose-500" name="genre" value="Comedy">
                                    <span class="ml-2">Comedy</span>
                                </label>
                                <button type="submit"
                                    class="mt-3 block w-full text-rose-400 bg-gray-700 hover:bg-gray-600 rounded-lg py-2">Vote</button>
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
