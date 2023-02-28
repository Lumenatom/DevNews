import { StatusBar } from "expo-status-bar";
import { Navigation } from "./src/screens/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" style="auto" />
    </>
  );
}
