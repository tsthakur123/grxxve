import { Client, Databases, Functions } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("68639174003164cd6df4"); // Replace with your project ID

export const databases = new Databases(client);
export const functions= new Functions(client);

export const collectionId = "686397810017f4eecded"; // Replace with your collection ID
export const DatabasesId = "68639602003ad82b4bbc"; // Replace with your collection ID
