import styled from "styled-components";
import { Search } from "lucide-react";
import { useState } from "react";

const Searchdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #171d1f;
  border-radius: 8px;
  padding: 8px 12px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  font-family: "Prompt", sans-serif;
  font-size: 14px;
  color: #fff;
`;

export function Searchbar() {
  const [search, setSearch] = useState("");
  
  return (
    <Searchdiv>
      <Search color="#BCBCBC" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Digite o que você procura"
      />
    </Searchdiv>
  );
}
