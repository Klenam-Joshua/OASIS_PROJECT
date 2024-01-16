import { Outlet } from "react-router-dom";
import styled from "styled-components";

// --------------------Other components ----------
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutGridContainer = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
  background: var(--color-grey-50);
  height: 100dvh;
`;
export const AppLayout = () => {
  return (
    <LayoutGridContainer>
      <Header />
      <Sidebar />
      <main>
        <div style={{ maxWidth: "120rem" }}>
          <Outlet />
        </div>
      </main>
    </LayoutGridContainer>
  );
};
