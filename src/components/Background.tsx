import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Background component that creates a circular cursor follower effect
 * The circle follows the mouse movement with a smooth animation
 */
export default function Background() {
  // Create a ref to directly manipulate the DOM element with GSAP
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safety check to ensure the ref is attached
    if (!circleRef.current) return;

    // Center the circle by offsetting it by 50% of its width and height
    gsap.set(circleRef.current, { xPercent: -50, yPercent: -50 });

    // Create optimized GSAP tweens for x and y coordinates
    // quickTo creates a highly optimized function for single-property tweens
    let xTo = gsap.quickTo(circleRef.current, "x", {
        duration: 0.6,
        ease: "power3",
      }),
      yTo = gsap.quickTo(circleRef.current, "y", {
        duration: 0.6,
        ease: "power3",
      });

    // Handler function for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Update circle position to match cursor coordinates
      xTo(e.clientX); // Animate x position
      yTo(e.clientY); // Animate y position
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="background">
        <div className="background__circle" ref={circleRef}></div>
      </div>
      <div className="background__overlay"></div>
    </>
  );
}
