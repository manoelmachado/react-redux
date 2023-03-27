import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

export default function CleintePorCodigo() {
  const router = useRouter();

  return (
    <Layout titulo="Navegação Dinâmica">
      <div>Código = {router.query.codigo}</div>
      <div>Filial = {router.query.filal}</div>
    </Layout>
  );
}
