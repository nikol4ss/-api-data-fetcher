import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchUserData(): Promise<void> {
  try {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    users.forEach(user => {
      console.log(`User: ${user.name}, Username: ${user.username}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchUserData();
