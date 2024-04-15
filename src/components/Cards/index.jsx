/* eslint-disable react/prop-types */
import { ChevronsLeftRight, MessageSquareText, Share } from "lucide-react";
import styled from "styled-components";

const Cardbox = styled.article`
  border-radius: 12px;
  color: #bcbcbc;
  font-family: "Prompt", sans-serif;
`;

const CapaCard = styled.div`
  background-color: #888;
  padding: 12px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const ImageCapaCard = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const SobreCard = styled.div`
  background-color: #171d1f;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
`;

const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TituloCard = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const ResumoCard = styled.div`
  font-size: 16px;
`;

const DadosCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dados = styled.div`
  width: 70%;
  display: flex;
  gap: 24px;
`;

const Dado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const ImageUser = styled.img`
  width: 30%;
  border-radius: 100%;
`;

const User = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
`;

export function Cards({
  imagemUrl,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}) {
  return (
    <Cardbox>
      <CapaCard>
        <ImageCapaCard src={imagemUrl} alt="Capa do Card" />
      </CapaCard>
      <SobreCard>
        <Descricao>
          <TituloCard>{titulo}</TituloCard>
          <ResumoCard>{resumo}</ResumoCard>
        </Descricao>
        <DadosCard>
          <Dados>
            <Dado>
              <ChevronsLeftRight />
              {linhasDeCodigo}
            </Dado>
            <Dado>
              <Share />
              {compartilhamentos}
            </Dado>
            <Dado>
              <MessageSquareText />
              {comentarios}
            </Dado>
          </Dados>
          <User>
            <ImageUser src={usuario.imagem} alt="Foto de perfil do usuário" />
            <span>{usuario.nome}</span>
          </User>
        </DadosCard>
      </SobreCard>
    </Cardbox>
  );
}
