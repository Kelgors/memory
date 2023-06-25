import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { useCallback } from 'react';
import { Card } from '../../game/Deck';

export type OnCardClickedEvent = {
  cardId: number;
  position: number;
};

export type CardProps = {
  className?: string;
  // Card type identifier
  card: Card;
  position: number;
  paired: boolean;
  visible: boolean;
  onClick: (event: OnCardClickedEvent) => void;
};

const CardFace = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0;
  left: 0;
`;

const FrontfaceCard = styled(CardFace)`
  transform: rotateY(0deg);
`;
const BackfaceCard = styled(CardFace)`
  transform: rotateY(180deg);
`;

export function FlipableCard(props: CardProps) {
  const { card, position, onClick } = props;
  const onCardClicked = useCallback(
    function () {
      onClick({ cardId: card.id, position });
    },
    [onClick, card, position]
  );
  return (
    <Box
      className={props.className}
      onClick={!props.paired && !props.visible ? onCardClicked : undefined}
      sx={{
        widht: '100%',
        height: '100%',
        backgroundcolor: 'transparent',
        perspective: '1000px',
        aspectRatio: '976/1600'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.4s',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${props.visible || props.paired ? '0' : '180deg'})`
        }}
      >
        <BackfaceCard sx={{ backgroundColor: 'black' }}></BackfaceCard>
        <FrontfaceCard>
          <img src={`/cards-optimized/${card.fileName}`} alt="" />
        </FrontfaceCard>
      </Box>
    </Box>
  );
}
