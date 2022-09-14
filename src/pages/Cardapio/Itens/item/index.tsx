import styles from "./Item.module.scss";
import classNames from "classnames";

interface Props {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: {
    id: number;
    label: string;
  };
}
export default function Item({
  title,
  description,
  photo,
  size,
  serving,
  price,
  category,
}: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item_imagem}>
        <img src={photo} alt={title}></img>
      </div>
      <div className={styles.item_descricao}>
        <div className={styles.item_titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item_tags}>
          <div
            className={classNames({
              [styles.item_tipo]: true,
              [styles[`item_tipo_${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item_porcao}>{size}g</div>
          <div className={styles.item_qtdpessoas}>
            Serve: {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item_valor}>R$: {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
