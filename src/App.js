import Rutas from "./routes/Rutas";
import GlobalProvider from './context/GlobalStateContext';
function App() {
  return (
    <>
      <GlobalProvider>
      <Rutas/>
      </GlobalProvider>
    
    </>
  );
}

export default App;
