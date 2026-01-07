import React, { useState, useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [showCalendar, setShowCalendar] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    
    // Delay rendering to ensure component is fully mounted
    const timer = setTimeout(() => {
      if (mountedRef.current) {
        setShowCalendar(true);
      }
    }, 300);

    return () => {
      mountedRef.current = false;
      clearTimeout(timer);
      // Prevent any state updates after cleanup
      setShowCalendar(false);
    };
  }, []);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {showCalendar && mountedRef.current && (
        <GitHubCalendar
          username="OasisMate"
          blockSize={30}
          blockMargin={10}
          color="#00D4FF"
          fontSize={20}
        />
      )}
    </Row>
  );
}

export default Github;
