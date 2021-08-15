$(document).ready(function () {
  M.AutoInit()

  /*

	$("#visiting-card").tilt({
		maxTilt: 9,
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
		scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
		speed: 300, // Speed of the enter/exit transition.
		transition: true, // Set a transition on enter/exit.
		disableAxis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		glare: false, // Enables glare effect
		maxGlare: 1 // From 0 - 1.
	});
	
  */

  var particleConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 70,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble'
        },
        onclick: {
          enable: false,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 350,
          size: 40,
          duration: 2,
          opacity: 0.7,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS('particles', particleConfig)
})
