import { Client, Account, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

function login (email, password) {
  return account.createEmailPasswordSession(email, password);
}

async function register (email, password, type) {
  const user = await account.create(
    ID.unique(),
    email,
    password,
  )

  const userDb = await databases.createDocument(
    import.meta.env.VITE_APPWRITE_DATABASE_ID,
    import.meta.env.VITE_APPWRITE_USERS_ID,
    ID.unique(),
    {
      id: user.$id,
      email: user.email,
      instructor: type === 'instructor'
    }
  )

  return userDb;
}

function logout () {
  return account.deleteSession('current');
}

export { client, account, databases, login, register, logout};