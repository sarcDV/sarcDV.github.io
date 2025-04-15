particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff", // Colore delle particelle (bianco)
        },
        shape: {
          type: "circle", // Forma delle particelle
        },
        opacity: {
          value: 0.5, // Opacità delle particelle
          random: true,
          anim: {
            enable: false,
          },
        },
        size: {
          value: 3, // Dimensione delle particelle
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150, // Distanza tra le connessioni
          color: "#ffffff", // Colore delle connessioni
          opacity: 0.4, // Opacità delle connessioni
          width: 1, // Spessore delle connessioni
        },
        move: {
          enable: true,
          speed: 2, // Velocità delle particelle
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse", // Effetto di repulsione al passaggio del mouse
          },
          onclick: {
            enable: true,
            mode: "push", // Aggiunge nuove particelle al clic
          },
        },
        modes: {
          repulse: {
            distance: 100, // Distanza di repulsione
          },
          push: {
            particles_nb: 4, // Numero di particelle aggiunte al clic
          },
        },
      },
      retina_detect: true,
    });