import classNames from "classnames";
import { Prato } from "types/Prato";
import styles from "./TagsPrato.module.scss";

export default function TagsPrato({ category, size, serving, price }: Prato) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags_tipo]: true,
          [styles[`tags_tipo_${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags_porcao}>{size}g</div>
      <div className={styles.tags_qtdpessoas}>
        Serve: {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.tags_valor}>R$: {price.toFixed(2)}</div>
    </div>
  );
}
