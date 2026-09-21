const COHORT = "2607-FTB-CT-WEB-PT";

const API_URL =
  `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/guests`;

function getData(result) {
  return result.data ?? result;
}

export async function fetchGuests() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch guests.");
  }

  const result = await response.json();

  return getData(result);
}

export async function fetchGuest(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Unable to fetch guest details.");
  }

  const result = await response.json();

  return getData(result);
}