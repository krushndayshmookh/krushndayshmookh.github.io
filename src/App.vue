<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m8 push-m2 l6 push-l3">
        <div class="card z-depth-5 rounded" id="visiting-card">
          <div class="card-image">
            <img class="materialboxed" src="/images/me-3.jpg" alt="" />
          </div>

          <div class="card-content">
            <span class="center card-title blue-text text-accent-2">
              Krushn Dayshmookh
            </span>
            <p class="blue-text text-lighten-2 center">
              Web Designer and Developer
            </p>
            <p class="center">
              <a href="mailto:krushn@dayshmookh.com"> krushn@dayshmookh.com </a>
            </p>
            <p class="center">
              <a href="tel:+917767060939"> +91 776 706 0939 </a>
            </p>

            <!-- <p class="center">
                  <a
                    class="btn btn-flat blue-text text-darken-3"
                    href="https://krushndayshmookh.github.io/me"
                  >
                    more
                  </a>
                </p> -->
          </div>
          <div class="card-action center">
            <a
              data-position="top"
              data-tooltip="GitHub"
              href="https://github.com/krushndayshmookh"
              target="_blank"
              class="tooltipped black-text"
            >
              <IconGithub />
            </a>

            <!-- <a
                  data-position="top"
                  data-tooltip="Calendar"
                  href="https://calendly.com/krushn/30min"
                  target="_blank"
									class="tooltipped green-text"
                >
                  <IconCalendar />
                </a> -->

            <a
              data-position="top"
              data-tooltip="LinkedIn"
              href="https://in.linkedin.com/in/krushndayshmookh"
              target="_blank"
              class="tooltipped light-blue-text text-darken-4"
            >
              <IconLinkedin />
            </a>

            <!-- <a
                  data-position="top"
                  data-tooltip="Twitter"
                  href="https://twitter.com/kdayshmookh"
                  target="_blank"
									class="tooltipped blue-text"
                >
                  <IconTwitter />
                </a> -->

            <a
              data-position="top"
              data-tooltip="StackOverflow"
              href="https://stackoverflow.com/users/8034466/krushn-dayshmookh"
              target="_blank"
              class="tooltipped orange-text"
              id="stackoverflow"
            >
              <IconStackoverflow />
            </a>

            <a
              data-position="top"
              data-tooltip="Dev.to"
              href="https://dev.to/krushndayshmookh"
              target="_blank"
              class="tooltipped black-text"
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
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import IconGithub from './components/icons/IconGithub.vue'
import IconLinkedin from './components/icons/IconLinkedin.vue'
import IconStackoverflow from './components/icons/IconStackoverflow.vue'

import particlesConfig from './assets/particlesjs-config.json'
import './assets/particles.js'

import M from 'materialize-css/dist/js/materialize.min.js'

onMounted(() => {
  document.body.classList.add('blue-gradient')
  window.particlesConfig = particlesConfig
  window.particlesJS('app', particlesConfig)
  M.AutoInit()
})
</script>

<style scoped></style>
