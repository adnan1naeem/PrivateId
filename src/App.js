import AppBar from "../src/components/appBar";
import { DataRefinery } from "./components/dataRefinery";
import { Features } from "./components/features";
import { Introduction } from "./components/introduction";
import { VoiceAuthentication } from "./components/voiceAuthentication";
import GoPricing from "./components/goPricing";
import { LetsTalk } from "./components/letsTalk";
import { GetReady } from "./components/getReady";
function App() {
  return (
    <div>
      <AppBar />
      <Introduction />
      <DataRefinery />
      <Features />
      <VoiceAuthentication />
      <GetReady />
      <GoPricing />
      <LetsTalk />
    </div>
  );
}

export default App;
