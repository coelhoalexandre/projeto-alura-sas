import styles from "./Cabecalho.module.css";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <div
        className={styles.imagemLogo}
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className={styles.participante}
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Cabecalho;
