import { compare, hash } from 'bcryptjs';

// This is a mock user database. In a real application, you'd use a proper database.
let users: { id: string; email: string; password: string }[] = [];

export async function createUser(email: string, password: string) {
  const hashedPassword = await hash(password, 10);
  const newUser = { id: Date.now().toString(), email, password: hashedPassword };
  users.push(newUser);
  return { id: newUser.id, email: newUser.email };
}

export async function getUser(email: string, password: string) {
  const user = users.find(u => u.email === email);
  if (user && await compare(password, user.password)) {
    return { id: user.id, email: user.email };
  }
  return null;
}

