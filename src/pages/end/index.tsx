import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from '../../components/AppContainer';
import { Button } from '../../components/Button';
import { gameState } from '../../game/GameState';

export function EndPage() {
  const navigate = useNavigate();
  const intl = useIntl();
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
        formattedTime.push(intl.formatMessage({ id: 'duration.minutes' }, { minutes: minutes }));
      }
      if (seconds > 0) {
        formattedTime.push(intl.formatMessage({ id: 'duration.seconds' }, { seconds: seconds }));
      }
      return formattedTime.join(' ');
    },
    [duration, intl]
  );
  return (
    <AppContainer>
      <Typography variant="h3" sx={{ py: 2 }}>
        <FormattedMessage id="end.title" />
      </Typography>
      <Typography variant="h6" sx={{ py: 1 }}>
        <FormattedMessage id="end.message" values={{ duration: humanDuration, tryCount: gameState.tryCount }} />
      </Typography>
      <Stack spacing={2}>
        <Button href="/play">
          <FormattedMessage id="end.buttons.restart" />
        </Button>
        <Button href="/">
          <FormattedMessage id="end.buttons.quit" />
        </Button>
      </Stack>
    </AppContainer>
  );
}
