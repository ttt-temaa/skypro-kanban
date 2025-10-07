import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
`;

export const Title = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  & p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
    width: 100%;
    display: block;
    position: relative;
`;

export const EmptyColumnMessage = styled.p`
  color: #94a6be;
`;