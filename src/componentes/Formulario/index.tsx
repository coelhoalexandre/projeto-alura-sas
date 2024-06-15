import { useRef, useState } from "react";
import styles from "./Formulario.module.css";
import useAdicionarParticipante from "../../state/hooks/useAdicionarParticipante";
import useMensagemDeErro from "../../state/hooks/useMensagemDeErro";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionarNaLista = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <div className={styles.grupoInputBtn}>
        <input
          ref={inputRef}
          type="text"
          name=""
          id=""
          placeholder="Insira os nomes dos participantes"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemDeErro && (
        <p className={`${styles.alerta} ${styles.erro}`} role="alert">
          {mensagemDeErro}
        </p>
      )}
    </form>
  );
};

export default Formulario;
