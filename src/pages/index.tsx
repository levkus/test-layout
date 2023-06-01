import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflowy: scroll;
`;

const BottomInset = styled.div`
  height: 4rem;
  background: black;
  flex-shrink: 0;
`;

const Header = styled.div`
  height: 2rem;
  background: red;
  flex-shrink: 0;
  @media (max-height: 400px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Body = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-height: 400px) {
    display: block;
    padding: 2rem;
  }
`;

const Square = styled.div`
  width: 220px;
  height: 275px;
  background: blue;
`;

const Footer = styled.div`
  display: flex;
  margin-top: auto;
  background: green;
  flex-shrink: 0;
  align-items: center;
  flex-direction: column;
`;

const CenteredContent = styled.div<{ minHeight: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ minHeight }) => css`
    min-height: ${minHeight};
  `}
`;

const Layout = ({
  header,
  children,
  footer,
}: PropsWithChildren<{
  header: React.ReactNode;
  footer: React.ReactNode;
}>) => {
  return (
    <Root>
      <Header>{header}</Header>
      <Body>{children}</Body>
      <Footer>{footer}</Footer>
      <BottomInset />
    </Root>
  );
};

export default function Home() {
  return (
    <Layout
      header={<div>header</div>}
      footer={
        <div>
          <button style={{ display: "block" }}>Click me</button>
          <button style={{ display: "block" }}>Click me</button>
        </div>
      }
    >
      <CenteredContent minHeight="30rem">
        <Square />
      </CenteredContent>
    </Layout>
  );
}
