import { Account, Client, ID } from "react-native-appwrite";

const client = new Client()
  .setEndpoint(process.env.EXPO_APPWRITE_ENDPOINT!)
  .setProject(process.env.EXPO_APPWRITE_PROJECT_ID!)
  .setPlatform(process.env.EXPO_APPWRITE_PROJECT_PLATFORM!);

export const account = new Account(client);
export { ID };

