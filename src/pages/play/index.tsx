import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import shuffle from 'lodash/shuffle';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { wait } from '../../components/wait';
import { createDeck } from '../../game/Deck';
import { gameState } from '../../game/GameState';
import { FlipableCard, OnCardClickedEvent } from './FlipableCard';

const Cell = styled(Grid)`
  aspect-ratio: 976/1600;
`;

export function PlayPage() {
  const navigate = useNavigate();

  useEffect(function () {
    gameState.restart();
  }, []);

  const [board, setBoard] = useState(function () {
    const deck = createDeck();
    return shuffle(
      Array.from(Array(9).keys()).flatMap((d, i) => {
        const randomIndex = Math.floor(Math.random() * deck.length);
        const card = deck.splice(randomIndex, 1)[0];
        return [
          {
            card: card,
            position: i,
            paired: false,
            visible: false
          },
          {
            card: card,
            position: i,
            paired: false,
            visible: false
          }
        ];
      })
    );
  });

  const visibleCards = useMemo(
    function () {
      return board.filter((place) => place.visible);
    },
    [board]
  );
  const pairedCardsCount = useMemo(
    function () {
      return board.map<number>((place) => (place.paired ? 1 : 0)).reduce((total, item) => total + item, 0);
    },
    [board]
  );

  useEffect(function () {
    gameState.restart();
  }, []);

  const onCardClicked = useCallback(
    function (event: OnCardClickedEvent) {
      if (visibleCards.length >= 2) return;
      //
      setBoard((oldBoard) => {
        const cardIndex = event.position;
        const newBoard = oldBoard.slice(0);
        newBoard.splice(cardIndex, 1, {
          ...oldBoard[cardIndex],
          visible: true
        });
        return newBoard;
      });
    },
    [visibleCards]
  );

  useEffect(
    function () {
      if (visibleCards.length < 2) return;
      gameState.tryCount += 1;
      let promise = Promise.resolve();
      if (visibleCards[0].card.id === visibleCards[1].card.id) {
        visibleCards[0].paired = visibleCards[1].paired = true;
      } else {
        promise = wait(750);
      }

      promise.then(function () {
        setBoard((cards) => {
          return cards.map(function (card) {
            if (!card.visible) return card;
            return {
              ...card,
              visible: false
            };
          });
        });
      });
    },
    [visibleCards]
  );

  useEffect(
    function () {
      if (pairedCardsCount !== board.length) return;
      gameState.stop();
      wait(2000).then(function () {
        navigate('/end');
      });
    },
    [pairedCardsCount, board]
  );

  return (
    <Container maxWidth="md" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Grid container columns={6} spacing={1}>
        {board.map(function ({ card, paired, visible, position }, index) {
          return (
            <Cell item xs={1} key={index} sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <FlipableCard card={card} position={index} paired={paired} visible={visible} onClick={onCardClicked} />
            </Cell>
          );
        })}
      </Grid>
    </Container>
  );
}
