<template>
  <div class="h-screen flex" id="particles">
    <div class="card w-96 bg-white mx-auto self-center z-10">
      <figure>
        <img src="/images/me-3.jpg" alt="Krushn Dayshmookh" />
      </figure>
      <div class="card-body text-center">
        <h2 class="card-title self-center text-blue-900">Krushn Dayshmookh</h2>
        <p class="text-blue-600">Web Designer and Developer</p>
        <p class="center">
          <a href="mailto:krushn@dayshmookh.com"> krushn@dayshmookh.com </a>
        </p>
        <p class="center">
          <a href="tel:+917767060939"> +91 776 706 0939 </a>
        </p>
        <div class="card-actions justify-center">
          <a
            data-position="top"
            data-tooltip="GitHub"
            href="https://github.com/krushndayshmookh"
            target="_blank"
            class="btn btn-link btn-circle text-black"
          >
            <IconGithub />
          </a>

          <a
            data-position="top"
            data-tooltip="LinkedIn"
            href="https://in.linkedin.com/in/krushndayshmookh"
            target="_blank"
            class="btn btn-link btn-circle text-blue-600"
          >
            <IconLinkedin />
          </a>

          <a
            data-position="top"
            data-tooltip="StackOverflow"
            href="https://stackoverflow.com/users/8034466/krushn-dayshmookh"
            target="_blank"
            class="btn btn-link btn-circle text-orange-400"
            id="stackoverflow"
          >
            <IconStackoverflow />
          </a>

          <a
            data-position="top"
            data-tooltip="Dev.to"
            href="https://dev.to/krushndayshmookh"
            target="_blank"
            class="btn btn-link btn-circle text-black"
            id="devto"
          >
            <img
              class="svg-icon"
              src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
              alt="Krushn Dayshmookh's DEV Community Profile"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import IconGithub from './components/icons/IconGithub.vue'
import IconLinkedin from './components/icons/IconLinkedin.vue'
import IconStackoverflow from './components/icons/IconStackoverflow.vue'

import particlesConfig from './assets/particlesjs-config.json'
import './assets/particles.js'

onMounted(() => {
  document.body.classList.add('blue-gradient')
  window.particlesConfig = particlesConfig
  window.particlesJS('particles', particlesConfig)
})
</script>

<style scoped></style>
