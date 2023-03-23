import styles from "../styles/estilo.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default (props) => {
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <div className={styles.roxo}>
        <h1>Estilo usando CSS Módulos</h1>
      </div>
    </Layout>
  );
};
