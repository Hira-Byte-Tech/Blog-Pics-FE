<template>
    <div class="w-11/12 m-auto mt-10">
        <div class="flex flex-row flex-wrap gap-2">
            <div v-for="tag in tags"
                class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-rose-700 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                <div class="mt-px">#{{ tag }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
const tags = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Psychological",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Thriller",
    "Ecchi",
    "Harem",
    "Isekai",
    "Mecha",
    "Music",
    "Shounen",
    "Shoujo",
    "Josei",
    "Seinen",
    "Yaoi",
    "Yuri",
    "Dementia",
    "Demons",
    "Historical",
    "Kids",
    "Magic",
    "Martial Arts",
    "Military",
    "Parody",
    "Police",
    "Samurai",
    "School",
    "Space",
    "Super Power",
    "Vampire",
    "Game",
    "Hentai",
    "Cars",
    "Gourmet",
    "Harem",
    "Isekai",
    "Mahou Shoujo",
    "Shoujo Ai",
    "Shounen Ai",
    "Tragedy"
];

</script>

<style lang="scss" scoped></style>