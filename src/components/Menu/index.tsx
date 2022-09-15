import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
export default function Menu() {
  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu_list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu_link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
