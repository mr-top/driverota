import { Client, Account, Databases, ID } from "appwrite";

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const databaseUsersId = import.meta.env.VITE_APPWRITE_USERS_ID;

const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId);

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
    databaseId,
    databaseUsersId,
    user.$id,
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

async function getLoggedUser (userId) {
  const session = await account.getSession('current');
  if (session.userId === userId) {
    const loggedUser = await databases.getDocument(databaseId, databaseUsersId, userId);
    return {success: true, loggedUser}
  }
}

export { client, account, databases, login, register, logout, getLoggedUser};