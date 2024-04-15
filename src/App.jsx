import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Searchbar } from "./components/Searchbar";
import { Filter } from "./components/Filters";
import { Cards } from "./components/Cards";
import { useEffect, useState } from "react";

const Body = styled.div`
  padding: 30px 0;
  background-color: #01080e;
`;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BoxFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  font-family: "Prompt", sans-serif;
  color: #fff;
`;

const Filters = styled.div`
  display: flex;
  gap: 10px;
`;

const Clean = styled.span`
  color: #888;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const BoxCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 16px;
`;

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <Body>
      <Container>
        <Sidebar />
        <Main>
          <Searchbar />

          <BoxFilters>
            <Filters>
              <Filter />
            </Filters>
            <Clean>Limpar tudo</Clean>
          </BoxFilters>

          <BoxCards>
            <BoxCards className="cards">
              {dados
                ? dados.map((item, index) => (
                    <li key={index}>
                      <Cards
                        id={item.id}
                        imagemUrl={item.imagem_capa}
                        titulo={item.titulo}
                        resumo={item.resumo}
                        linhasDeCodigo={item.linhas_de_codigo}
                        compartilhamentos={item.compartilhamentos}
                        comentarios={item.comentarios}
                        usuario={item.usuario}
                      />
                    </li>
                  ))
                : null}
            </BoxCards>
          </BoxCards>
        </Main>
      </Container>
    </Body>
  );
}
