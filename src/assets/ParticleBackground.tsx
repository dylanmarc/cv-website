import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Changed from repulse to grab for a more connected effect
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            grab: {
              distance: 180, // Increased distance for larger area of effect
              links: {
                opacity: 1, // Links become fully visible when grabbed
                color: "#ffffff"
              }
            },
            push: {
              quantity: 4
            }
          }
        },
        particles: {
          color: {
            value: "#3f51b5",
          },
          links: {
            color: "#3f51b5",
            distance: 120, // Reduced distance for tighter mesh
            enable: true,
            opacity: 0.4,
            width: 1,
            triangles: { // Enable triangular connections for a true mesh effect
              enable: true,
              color: "#3f51b5",
              opacity: 0.1
            }
          },
          move: {
            enable: true,
            speed: 1, // Slower movement for more stable mesh
            direction: "none",
            outModes: {
              default: "bounce"
            }
          },
          number: {
            value: 100, // Increased number of particles for denser mesh
            density: {
              enable: true,
              value_area: 800
            }
          },
          opacity: {
            value: 0.7
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2
          }
        },
        detectRetina: true
      }}
    />
  );
};

export default ParticleBackground;