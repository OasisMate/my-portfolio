import React, { useState, useEffect, useRef } from "react";
import Particles from "react-tsparticles";

function Particle() {
  const [shootingStars, setShootingStars] = useState([]);
  const removalTimeoutsRef = useRef([]);
  const creationTimeoutsRef = useRef([]);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    
    // Create shooting stars occasionally (every 3-8 seconds)
    const createShootingStar = () => {
      if (!isMountedRef.current) return;
      
      const delay = Math.random() * 5000 + 3000; // 3-8 seconds
      const timeout = setTimeout(() => {
        // Remove this timeout from tracking array
        creationTimeoutsRef.current = creationTimeoutsRef.current.filter(
          t => t !== timeout
        );
        
        if (!isMountedRef.current) return;
        
        const id = Date.now();
        const top = Math.random() * 50 + 10; // 10-60% from top
        const left = Math.random() * 100; // Random horizontal position
        const direction = Math.random() > 0.5 ? '' : 'reverse';
        
        setShootingStars(prev => [...prev, { id, top, left, direction }]);
        
        // Remove shooting star after animation completes (2.5s)
        const removalTimeout = setTimeout(() => {
          if (isMountedRef.current) {
            setShootingStars(prev => prev.filter(star => star.id !== id));
          }
          // Remove this timeout from tracking array
          removalTimeoutsRef.current = removalTimeoutsRef.current.filter(
            t => t !== removalTimeout
          );
        }, 2500);
        
        // Track the removal timeout
        removalTimeoutsRef.current.push(removalTimeout);
        
        // Schedule next shooting star
        createShootingStar();
      }, delay);
      
      // Track the creation timeout
      creationTimeoutsRef.current.push(timeout);
    };

    // Start the first shooting star
    createShootingStar();
    
    // Cleanup function
    return () => {
      isMountedRef.current = false;
      
      // Clear all creation timeouts
      creationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      creationTimeoutsRef.current = [];
      
      // Clear all removal timeouts
      removalTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      removalTimeoutsRef.current = [];
    };
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        params={{
          particles: {
            number: {
              value: 400,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.9,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.6,
                sync: false,
              },
            },
            size: {
              value: 1.5,
              random: true,
              anim: {
                enable: false,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: false, // Stars stay still like real stars
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: false,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
      {/* Shooting stars - appear occasionally */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className={`shooting-star ${star.direction}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        />
      ))}
    </>
  );
}

export default Particle;
