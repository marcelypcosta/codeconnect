import { X } from "lucide-react";
import styled from "styled-components";

const Box = styled.div`
  padding: 4px;
  background-color: #bcbcbc;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #e1e1e1;
  }
`;

const Name = styled.span`
  font-family: "Prompt", sans-serif;
  font-size: 16px;
  color: #000;
`;

export function Filter() {
  return (
    <Box>
      <Name>filtro</Name>
      <X color="#000" width={14} />
    </Box>
  );
}
