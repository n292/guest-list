export default function GuestList({ guests, onSelectGuest }) {
  return (
    <section>
      <h1>Guest List</h1>

      <div className="guest-table">
        <div className="guest-row guest-header">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </div>

        {guests.map((guest) => (
          <button
            key={guest.id}
            className="guest-row guest-item"
            onClick={() => onSelectGuest(guest.id)}
            type="button"
          >
            <span>{guest.name}</span>
            <span>{guest.email}</span>
            <span>{guest.phone}</span>
          </button>
        ))}
      </div>

      {guests.length === 0 && (
        <p className="status">No guests found.</p>
      )}

      {guests.length > 0 && (
        <p className="hint">
          Select a guest to see more details.
        </p>
      )}
    </section>
  );
}