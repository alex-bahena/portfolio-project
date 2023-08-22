import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import React from "react";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-canvas"
      options={{
        particles: {
          color: {
            value: "3C3C3C",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 900,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 3,
            },
          },
          size: {
            value: { min: 1, max: 5 },
          },
          responsive: [
            {
              maxWidth: 500,
              options: {
                particles: {
                  number: { limit: 50 },
                },
              },
            },
          ],
        },
      }}
    />
  );
};

export default Particle;