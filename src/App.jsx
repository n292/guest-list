import { useEffect, useState } from "react";

import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

import { fetchGuests, fetchGuest } from "./api";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGuests() {
      try {
        setLoading(true);
        setError("");

        const guestList = await fetchGuests();

        setGuests(guestList);
      } catch (error) {
        console.error(error);
        setError("Could not load guests.");
      } finally {
        setLoading(false);
      }
    }

    loadGuests();
  }, []);

  useEffect(() => {
    if (selectedGuestId === null) {
      setSelectedGuest(null);
      return;
    }

    async function loadGuest() {
      try {
        setLoading(true);
        setError("");

        const guest = await fetchGuest(selectedGuestId);

        setSelectedGuest(guest);
      } catch (error) {
        console.error(error);
        setError("Could not load guest details.");
      } finally {
        setLoading(false);
      }
    }

    loadGuest();
  }, [selectedGuestId]);

  function handleSelectGuest(id) {
    setSelectedGuestId(id);
  }

  function handleBack() {
    setSelectedGuestId(null);
    setSelectedGuest(null);
  }

  return (
    <main className="app-shell">
      <div className="card">
        {loading && (
          <p className="status">Loading...</p>
        )}

        {error && !loading && (
          <p className="status error">{error}</p>
        )}

        {!loading && !error && selectedGuest && (
          <GuestDetails
            guest={selectedGuest}
            onBack={handleBack}
          />
        )}

        {!loading && !error && !selectedGuest && (
          <GuestList
            guests={guests}
            onSelectGuest={handleSelectGuest}
          />
        )}
      </div>
    </main>
  );
}