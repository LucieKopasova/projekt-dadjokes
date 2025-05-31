import './jokes.css';
import { useState, useEffect } from 'react';

export const Jokes = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesCount, setlikesCount] = useState(0);
  const [dislikesCount, setdislikesCount] = useState(0);

  const handleClickLikes = () => {
    setlikesCount((oldstate) => oldstate + 1);
  };
  const handleClickDisikes = () => {
    setdislikesCount((oldstate) => oldstate + 1);
  };
  console.log(userAvatar);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>

      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleClickLikes}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likesCount}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleClickDisikes}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikesCount}
        </span>
      </div>
    </div>
  );
};

/* 
 pět props: userAvatar, userName, text, likes, dislikes.



 Zobrazte každý vtip z tohoto enpointu pomocí komponenty Joke.
Zvažte, která vlastnost ze zobrazovaných dat se nejlépe hodí pro key prop vaší komponenty a použijte ji jako key.
Výsledná aplikace by měla zobrazovat seznam všech vtipů se správnými uživateli a počty likeů. Tlačítka u každého vtipu by měla fungovat tak, že mění počty likeů uvnitř každé jednotlivé komponenty.

Pushněte svoje změny do repozitáře. Jako odpověď na tuto otázku opět uveďte stejnou adresu svého GitHub projektu, jako jste uvedli v předchozí otázce. */
