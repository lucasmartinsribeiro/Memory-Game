import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoarGame = $htmlCardGame.repeat(amountCards);

  console.log($htmlBoarGame);

  return $htmlBoarGame;
}

export default BoardGame;