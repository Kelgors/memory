import Stack from '@mui/material/Stack';
import { useEffect, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from '../../components/AppContainer';
import { Button } from '../../components/Button';
import { gameState } from '../../game/GameState';

export function EndPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const duration = Math.floor(gameState.getDuration() / 1000);

  useEffect(function () {
    if (!gameState.tryCount || isNaN(duration)) {
      navigate('/');
    }
  }, []);

  const humanDuration = useMemo(
    function () {
      const minutes = Math.floor(duration / 60);
      const seconds = duration - minutes * 60;
      const formattedTime = [];
      if (minutes > 0) {
        formattedTime.push(t('duration.minutes', { count: minutes }));
      }
      if (seconds > 0) {
        formattedTime.push(t('duration.seconds', { count: seconds }));
      }
      return formattedTime.join(' ');
    },
    [duration]
  );
  return (
    <AppContainer>
      <h1>
        <Trans>end.title</Trans>
      </h1>
      <h3>
        <Trans values={{ duration: humanDuration, tryCount: gameState.tryCount }}>end.message</Trans>
      </h3>
      <Stack spacing={2}>
        <Button href="/play">
          <Trans>end.buttons.restart</Trans>
        </Button>
        <Button href="/">
          <Trans>end.buttons.quit</Trans>
        </Button>
      </Stack>
    </AppContainer>
  );
}
