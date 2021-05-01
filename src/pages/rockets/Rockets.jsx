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

const Rockets = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/rockets')
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
              <h1 className="title">Rockets / Cohetes {emoji.getUnicode('rocket')}</h1>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    <a>{item.rocket_name}</a>
                    <p>Country: {item.country}</p>
                  </li>
                ))}
              </ul>
            </Main>
          }
        </Container>
        : <div><h1>Error at GetRockets</h1></div>}
    </>
  )
}

export default Rockets;