import filtros from "./filtros.json";
import styles from "./Filtros.module.scss";
import classNames from "classnames";
import { memo } from "react";

interface Opcao {
  id: number;
  label: string;
}
interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: Opcao) {
    if (filtro === opcao.id) {
      return setFiltro(null);
    } else {
      return setFiltro(opcao.id);
    }
  }
  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros_filtro]: true,
            [styles["filtros_filtro--ativo"]]: filtro === opcao.id,
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
export default memo(Filtros);
