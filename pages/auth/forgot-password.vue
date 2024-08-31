<template>
    <div class="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold">
                Forgot your password?
            </h2>
            <p class="mt-2 text-center text-sm">
                Enter your email address below and we'll send you a link to reset your password.
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form @submit.prevent="handleForgotPassword" class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium">
                            Email Address
                        </label>
                        <div class="mt-1">
                            <input id="email" name="email" type="email" v-model="form.email" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email address" />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Send Password Reset Link
                        </button>
                    </div>
                </form>

                <div class="mt-6 text-center">
                    <p class="text-sm">
                        Remember your password?
                        <a @click="router.push('/login')"
                            class="cursor-pointer font-medium text-blue-400 hover:text-blue-300">
                            Sign in
                        </a>
                    </p>
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
    email: '',
})

const handleForgotPassword = async () => {
    try {
        await axiosInstance.post('/forgot-password', {
            email: form.value.email,
        })
        toast.add({ title: 'Success', description: 'Password reset link sent to your email' })
    } catch (error) {
        toast.add({ title: 'Error', description: error.response.data.message || 'Failed to send reset link' })
    }
}
</script>

<style scoped>
/* Additional styles if needed */
</style>
