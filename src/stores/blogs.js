import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBlogsStore = defineStore('blogs', () => {
  const blogs = ref([])

  const blogCount = computed(() => blogs.value.length)

  const fetchBlogs = async () => {
    // Simulate an API call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'First Blog Post' },
          { id: 2, title: 'Second Blog Post' },
          { id: 3, title: 'Third Blog Post' },
        ])
      }, 1000)
    })
    blogs.value = response
  }

  fetchBlogs()

  return { blogs, blogCount, fetchBlogs }
})
