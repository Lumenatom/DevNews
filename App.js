import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/screens/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
