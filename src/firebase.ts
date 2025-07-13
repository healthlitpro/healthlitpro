import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnEC1RQ6zzTKNHBVt7gvD_jq28TKUf2AI",
  authDomain: "Yhealthlitpro-a6b1b.firebaseapp.com",
  projectId: "healthlitpro-a6b1b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
