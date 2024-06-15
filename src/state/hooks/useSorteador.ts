import useListaDeParticipantes from "./useListaDeParticipantes";
import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";
import realizarSorteio from "../helpers/realizarSorteio";

const useSorteador = () => {
  const participantes = useListaDeParticipantes();

  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);

  // const resultado = realizarSorteio(participantes);
  // setResultado(resultado);
  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
};

export default useSorteador;
