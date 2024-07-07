export const BASE_URL = 'http://localhost:4000/api/v1';

export async function fetchMemories() {
  const response = await fetch(`${BASE_URL}/memories`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return resData.memories;
}

export async function fetchMemory(id) {
  const response = await fetch(`${BASE_URL}/memories/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  const resData = await response.json();

  return resData;
}
