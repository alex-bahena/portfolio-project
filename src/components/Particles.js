import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import React from "react";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="particles-canvas"
      options={{
        particles: {
          color: {
            value: "#ae832d",
          },
          links: {
            color: "#666666",
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
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 300,
            },
            value: 15,
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
            value: { min: 1, max: 3 },
          },
          responsive: [
            {
              maxWidth: 500,
              options: {
                particles: {
                  number: { limit: 30 },
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
