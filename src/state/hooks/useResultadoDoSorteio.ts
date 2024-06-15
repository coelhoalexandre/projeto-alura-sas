import { useRecoilValue } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";

const useResultadoDoSorteio = () => {
  return useRecoilValue(resultadoDoAmigoSecreto);
};

export default useResultadoDoSorteio;
