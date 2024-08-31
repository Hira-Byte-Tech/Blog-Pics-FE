<template>
    <div class="min-h-screen bg-[#0f172a] text-white font-sans">
        <!-- Header -->
        <header class="bg-gray-900 text-white py-6 shadow-lg">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold">User Settings</h1>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-10">
            <!-- Profile Picture Section -->
            <section class="bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
                <h2 class="text-2xl font-semibold mb-6">Profile Picture</h2>
                <div class="flex items-center">
                    <div class="relative w-24 h-24">
                        <img :src="profilePicture" alt="Profile Picture"
                            class="w-full h-full object-cover rounded-full border-4 border-green-500">
                        <input type="file" @change="handleProfilePictureChange"
                            class="absolute inset-0 opacity-0 cursor-pointer">
                    </div>
                    <div class="ml-6">
                        <p class="text-gray-400">Click on the picture to change it.</p>
                    </div>
                </div>
            </section>

            <!-- Settings Form -->
            <section class="bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 class="text-2xl font-semibold mb-6">Update Your Details</h2>
                <form @submit.prevent="updateSettings">
                    <!-- Username Field -->
                    <div class="mb-6">
                        <label class="block text-gray-300 font-medium mb-2" for="username">Username</label>
                        <input v-model="username" type="text" id="username"
                            class="w-full px-4 py-2 border border-gray-700 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter new username" required />
                    </div>

                    <!-- Password Field -->
                    <div class="mb-6">
                        <label class="block text-gray-300 font-medium mb-2" for="current-password">Current
                            Password</label>
                        <input v-model="currentPassword" type="password" id="current-password"
                            class="w-full px-4 py-2 border border-gray-700 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter current password" required />
                    </div>

                    <div class="mb-6">
                        <label class="block text-gray-300 font-medium mb-2" for="new-password">New Password</label>
                        <input v-model="newPassword" type="password" id="new-password"
                            class="w-full px-4 py-2 border border-gray-700 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter new password" required />
                    </div>

                    <!-- Confirm New Password Field -->
                    <div class="mb-6">
                        <label class="block text-gray-300 font-medium mb-2" for="confirm-new-password">Confirm New
                            Password</label>
                        <input v-model="confirmNewPassword" type="password" id="confirm-new-password"
                            class="w-full px-4 py-2 border border-gray-700 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Confirm new password" required />
                    </div>

                    <button type="submit"
                        class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200">
                        Save Changes
                    </button>
                </form>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-400 py-4 mt-10">
            <div class="container mx-auto px-4 text-center">
                <p>&copy; 2024 My Awesome Blog. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const profilePicture = ref('https://via.placeholder.com/96?text=Profile'); // Default profile picture
const username = ref('');
const currentPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');

const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePicture.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};

const updateSettings = () => {
    if (newPassword.value !== confirmNewPassword.value) {
        alert('New passwords do not match.');
        return;
    }

    // Implement your password update logic here

    alert('Settings updated successfully.');
    // Reset form fields
    username.value = '';
    currentPassword.value = '';
    newPassword.value = '';
    confirmNewPassword.value = '';
};
</script>

<style scoped>
body {
    font-family: 'Inter', sans-serif;
}
</style>