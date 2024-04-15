import Logo from "/logo.svg";
import "../assets/reset.css";
import { CircleUserRound, Info, LogOut, Newspaper } from "lucide-react";
import styled from "styled-components";

const Aside = styled.aside`
  width: 20%;
  height: 100vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  background-color: #171d1f;
  padding: 24px 12px;
`;

const ImagemLogo = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Button = styled.button`
  background-color: transparent;
  font-family: "Prompt", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #81fe88;
  border: 2px solid #81fe88;
  border-radius: 8px;
  padding: 12px;

  &:hover {
    cursor: pointer;
    color: #171d1f;
    background-color: #81fe88;
  }
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: "Prompt", sans-serif;
  font-size: 16px;
  color: #808080;

  &:hover {
    color: #fff;
  }
`;

export function Sidebar() {
  return (
    <Aside>
      <ImagemLogo src={Logo} alt="Logo da CodeConnect" />
      <Menu>
        <Button>Publicar</Button>
        <List>
          <li>
            <Link href="#">
              <Newspaper />
              <span>Feed</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <CircleUserRound />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <Info />
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <LogOut />
              <span>Logout</span>
            </Link>
          </li>
        </List>
      </Menu>
    </Aside>
  );
}
