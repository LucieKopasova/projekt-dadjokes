import { Jokes } from '../Jokes/jokes';
import './style.css';
import { useState, useEffect } from 'react';

/*  Jako odpověď na tuto otázku uveďte odkaz na váš GitHub repozitář (adresu zkopírujte z adresního řádku prohlížeče).
 */
export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setData(data.data);
    };
    getData();
  }, []);

  console.log(data);

  ///userAvatar, userName, text, likes, dislikes

  return (
    <div className="container">
      {data.map((joke) => (
        <Jokes
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
