import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Main = styled.div`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title a {
        color: #0070f3;
        text-decoration: none;
      }
      
      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }
      
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }
      
      .title,
      .description {
        text-align: center;
      }
`;

const Home = () => {
    return (
        <>
            <Container>
                <Main>
                    <h1 className="title">
                        Bienvenido a <a target="_blank" rel="noreferrer" href="https://www.spacex.com/">Rocket SpaceX!</a>
                    </h1>
                    <p>Información sobre SpaceX Cohetes, Lanzamientos y más.</p>
                </Main>
            </Container>
        </>
    )
}

export default Home;