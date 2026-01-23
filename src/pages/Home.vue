<template>
  <h1>Home Page</h1>

  <p>This is the home page of the application.</p>

  <ul>
    <li v-for="blog in blogsStore.blogs" :key="blog.id">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
    </li>
  </ul>

  <router-link to="/">Go to Home Page</router-link>
  <router-link to="/about">Go to About Page</router-link>
</template>

<script setup>
  import  {useBlogsStore} from '@/stores/blogs'

  const blogsStore = useBlogsStore()


</script>
