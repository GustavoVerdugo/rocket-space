import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as emoji from 'emoji-dictionary';

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
    justify-content: flex-start;
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
        font-size: 5vh;
      }
      
      .title,
      .description {
        text-align: center;
      }
      li {
        color: 'black';
        list-style: none;
      }
`;

const Launches = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <>
      {!error ?
        <Container>
          {!isLoaded ? <div><h1>Loading...</h1></div> :
            <Main>
              <h1 className="title">Launches {emoji.getUnicode('rocket')}</h1>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    <a>{item.mission_name}</a>
                    <p>Rocket: {item.rocket.rocket_name}</p>
                  </li>
                ))}
              </ul>
            </Main>
          }
        </Container>
        : <div><h1>Error at GetLaunches</h1></div>}
    </>
  )
}

export default Launches;