import './style.css';
import { useState } from 'react';

/*  Jako odpověď na tuto otázku uveďte odkaz na váš GitHub repozitář (adresu zkopírujte z adresního řádku prohlížeče).
 */
export const HomePage = () => {
  const [likesCount, setlikesCount] = useState(0);
  const [dislikesCount, setdislikesCount] = useState(0);

  const handleClickLikes = () => {
    setlikesCount((oldstate) => oldstate + 1);
  };
  const handleClickDisikes = () => {
    setdislikesCount((oldstate) => oldstate + 1);
  };

  return (
    <body>
      <div class="container">
        <div class="joke">
          <div class="joke__body">
            <div class="joke__user">
              <img
                class="user-avatar"
                src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              />
              <p class="user-name">Neroxx</p>
            </div>

            <p class="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div class="joke__likes">
            <button
              id="btn-up"
              class="btn-like btn-like--up"
              onClick={handleClickLikes}
            ></button>
            <span id="likes-up" class="likes-count likes-count--up">
              {likesCount}
            </span>
            <button
              id="btn-down"
              class="btn-like btn-like--down"
              onClick={handleClickDisikes}
            ></button>
            <span id="likes-down" class="likes-count likes-count--down">
              {dislikesCount}
            </span>
          </div>
        </div>
      </div>

      <script src="index.js"></script>
    </body>
  );
};
