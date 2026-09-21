export default function GuestDetails({ guest, onBack }) {
  return (
    <section>
      <h1>Guest Details</h1>

      <div className="details">
        <h2>{guest.name}</h2>

        <p>
          <strong>Email:</strong> {guest.email}
        </p>

        <p>
          <strong>Phone:</strong> {guest.phone}
        </p>

        <p>
          <strong>Job:</strong> {guest.job}
        </p>

        <p>
          <strong>Bio:</strong> {guest.bio}
        </p>
      </div>

      <button
        className="back-button"
        onClick={onBack}
        type="button"
      >
        Back
      </button>
    </section>
  );
}