import { useState } from "react";
import "./App.css";
import { useGeolocation } from "./useGeolocation";

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  const [position, isLoading, error, getPosition] = useGeolocation(() =>
    setCountClicks((count) => count + 1)
  );

  const { lat, lng } = position;

  function handlePosition() {
    getPosition();
  }

  return (
    <div>
      <button onClick={handlePosition} disabled={isLoading}>
        Get my position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
}
