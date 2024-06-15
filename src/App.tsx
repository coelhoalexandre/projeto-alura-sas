import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuracao from "./paginas/Configuracao";
import Sorteio from "./paginas/Sorteio";
import Cabecalho from "./componentes/Cabecalho";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Configuracao />}></Route>
          <Route
            path="/sorteio"
            element={
              <>
                <Cabecalho /> <Sorteio />
              </>
            }
          />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
