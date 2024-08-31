<template>
    <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold">
                Register a new account and join us
            </h2>
            <p class="mt-2 text-center text-sm max-w">
                Or
                <a href="#" class="font-medium text-blue-400 hover:text-blue-300">
                    create an account
                </a>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div>
                        <label for="username" class="block text-sm font-medium">
                            Username
                        </label>
                        <div class="mt-1">
                            <input id="username" name="username" type="text" v-model="form.username" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your username" />
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium">
                            Email address
                        </label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" v-model="form.email" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email address" />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium">
                            Password
                        </label>
                        <div class="mt-1">
                            <input id="password" name="password" type="password" v-model="form.password" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password" />
                        </div>
                    </div>

                    <div>
                        <label for="confirmPassword" class="block text-sm font-medium">
                            Confirm Password
                        </label>
                        <div class="mt-1">
                            <input id="confirmPassword" name="confirmPassword" type="password"
                                v-model="form.confirmPassword" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Re-enter your password" />
                        </div>
                        <p v-if="passwordMismatch" class="text-red-400 text-sm mt-2">Passwords do not match</p>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" v-model="form.rememberMe"
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-700 rounded" />
                            <label for="remember_me" class="ml-2 block text-sm">
                                Remember me
                            </label>
                        </div>

                        <div class="text-sm">
                            <a @click="router.push('/forgot-password')"
                                class="cursor-pointer font-medium text-blue-400 hover:text-blue-300">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <UButton type="submit" :loading="loadingStatus"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign up
                        </UButton>
                    </div>
                </form>

                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-gray-800 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div class="mt-6 grid grid-cols-3 gap-3">
                        <div>
                            <a href="#"
                                class="w-full flex items-center justify-center px-8 py-3 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-gray-800 hover:bg-gray-700">
                                <img class="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="">
                            </a>
                        </div>
                        <div>
                            <a href="#"
                                class="w-full flex items-center justify-center px-8 py-3 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-gray-800 hover:bg-gray-700">
                                <img class="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="">
                            </a>
                        </div>
                        <div>
                            <a href="#"
                                class="w-full flex items-center justify-center px-8 py-3 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-gray-800 hover:bg-gray-700">
                                <img class="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axiosInstance from '~/utils/axiosConfig'

const toast = useToast()
const router = useRouter()
const form = ref({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
})

const passwordMismatch = ref(false)
const loadingStatus = ref(false)
const handleSubmit = async () => {
    loadingStatus.value = true
    if (form.value.password !== form.value.confirmPassword) {
        passwordMismatch.value = true
        toast.add({ title: 'Error', description: 'Passwords do not match' })
        return
    }

    try {
        const response = await axiosInstance.post('/user', {
            username: form.value.username,
            email: form.value.email,
            password: form.value.password,
            rememberMe: form.value.rememberMe,
        })
        toast.add({ title: 'Success', description: 'Registration successful' })
        loadingStatus.value = false
    } catch (error) {
        toast.add({ title: 'Error', description: error.response.data.message || 'Registration failed' })
        loadingStatus.value = false
    }
}
</script>

<style lang="scss" scoped></style>
