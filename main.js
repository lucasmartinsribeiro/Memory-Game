import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import BoardGame from './src/objects/BoardGame';

const $app = document.querySelector("#app");

const $htmlBoardGame = BoardGame(6);

$app.insertAdjacentHTML("beforeend", $htmlBoardGame);