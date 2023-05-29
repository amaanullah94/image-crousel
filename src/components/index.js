
import React, { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

