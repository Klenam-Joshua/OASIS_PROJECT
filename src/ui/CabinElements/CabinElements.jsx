import styled from "styled-components";

const Table = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 5rem;
`;

const Button = styled.button`
  padding: 0.4rem 2rem;
  border-radius: 5px;
`;

const Loader = styled.p`
  text-align: center;
  color: var(--color-grey-500);
`;
const TableHeader = styled.div`
  text-wrap: nowrap;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 1rem 0;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  border: 1px solid var(--color-grey-200);
  font-weight: bolder;
`;

const CabinImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: var(--color-grey-0);
  text-align: center;
  padding: 1rem 0;
`;

export { Table, Button, GridRow, TableHeader, Loader, CabinImage, Row };
