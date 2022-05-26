import Rutas from "./routes/Rutas";
import GlobalProvider from "./context/CartContext";
function App() {
  return (
    <>
      
        <GlobalProvider>
          <Rutas />
        </GlobalProvider>
     
    </>
  );
}

export default App;
