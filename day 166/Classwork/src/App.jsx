import { WrapperProvider } from "./Components/Context";
import ChildComponent from "./Components/Context";

function App() {
  return (
    <WrapperProvider>
      <ChildComponent />
    </WrapperProvider>
  );
}

export default App;
