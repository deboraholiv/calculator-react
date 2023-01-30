import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #e7e7e8;

  h1 {
    font-size: 2rem;
    color: #22252d;
    margin-bottom: 50px;
  }

  p {
    font-size: 0.8rem;
    color: gray;
    position: relative;
    margin-top: 50px;
  }
`

export const Content = styled.div`
  background: #22252d;
  border-radius: 20px;
  padding: 20px;

  `

export const Cal = styled.div`
  padding-top: 16px;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`