import Stack from '@mui/material/Stack';
import { Trans } from 'react-i18next';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';
import { Button } from '../../components/Button';

export function HomePage() {
  return (
    <AppContainer>
      <AppTitle />
      <Stack spacing={2}>
        <Button href="/play">
          <Trans>home.buttons.play</Trans>
        </Button>
        <Button href="/options" disabled>
          <Trans>home.buttons.options</Trans>
        </Button>
        <Button href="/credits">
          <Trans>home.buttons.credits</Trans>
        </Button>
      </Stack>
    </AppContainer>
  );
}
