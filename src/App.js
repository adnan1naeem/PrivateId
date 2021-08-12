import AppBar from "../src/components/appBar";
import { DataRefinery } from "./components/dataRefinery";
import { Features } from "./components/features";
import { Introduction } from "./components/introduction";
import { VoiceAuthentication } from "./components/voiceAuthentication";

function App() {
  return (
    <div>
      <AppBar />
      <Introduction />
      <DataRefinery />
      <Features />
      <VoiceAuthentication />
    </div>
  );
}

export default App;
