import * as S from "./styles.jsx";
import LogoFranco from "../../assets/Logo Franco.svg";

const Header = () => {
  return (
    <S.nav>
      <img src={LogoFranco}/>
      <ul>
        <li>Inicio</li>
        <li>Sobre nós</li>
        <li>Contato</li>
        <li>FAQ</li>
      </ul>
      <button className="btn-log">Fazer log-in</button>
    </S.nav>
  );
};

export default Header;
