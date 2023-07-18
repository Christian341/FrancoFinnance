import * as S from "./styles";
import imgLogo from "../../../assets/images/Woman.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <S.Container>
      <img src={imgLogo} />
      <S.Section>
        <S.H1>Olá, seja bem vindo!</S.H1>
        <S.Input type="email" placeholder="E-mail" required />
        <S.Input type="password" placeholder="Senha" required />
        <div className="forgetpass">
          <a href="#">Esqueci minha senha</a>
        </div>
        <button className="btn-enter">Entrar</button>
        <p className="linkbtn">
          Já tem conta?<a href="#"> Criar agora</a>
        </p>
        <p className="Pou">ou</p>
        <div className="btns">
          <button className="btnp">
            Entrar com
            <FcGoogle />
          </button>
          <button className="btnp">
            Entrar com
            <FaApple />
          </button>
        </div>
      </S.Section>
    </S.Container>
  );
};

export default Login;
