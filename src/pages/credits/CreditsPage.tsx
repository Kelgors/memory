import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';
import { Button } from '../../components/Button';

export function CreditsPage() {
  return (
    <AppContainer>
      <AppTitle />
      <Stack spacing={1}>
        <Typography>
          <FormattedMessage
            id="credits.created-by"
            values={{
              link: () => (
                <Link target="_blank" href="https://www.kelgors.me/">
                  Kelgors
                </Link>
              )
            }}
          />
        </Typography>
        <Typography>
          <FormattedMessage
            id="credits.sources"
            values={{
              link: () => (
                <Link target="_blank" href="https://github.com/Kelgors/memory/">
                  Github
                </Link>
              )
            }}
          />
        </Typography>
        <Divider />
        <Typography>
          <FormattedMessage
            id="credits.cards"
            values={{
              author: () => (
                <Link target="_blank" href="https://commons.wikimedia.org/wiki/User:Louiemantia">
                  Louiemantia
                </Link>
              ),
              license: () => (
                <Link target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/">
                  CC BY-SA 4.0
                </Link>
              ),
              svgo: () => (
                <Link target="_blank" href="https://github.com/svg/svgo">
                  SVGO
                </Link>
              )
            }}
          />
        </Typography>
        <Typography>
          <FormattedMessage
            id="credits.icon"
            values={{
              author: () => (
                <Link target="_blank" href="https://www.svgrepo.com/author/chikin%20icons/">
                  chikin icons
                </Link>
              ),
              license: () => (
                <Link target="_blank" href="https://creativecommons.org/licenses/by/2.0/">
                  CC Attribution License
                </Link>
              )
            }}
          />
        </Typography>
      </Stack>
      <Button sx={{ my: 3 }} href="/">
        <FormattedMessage id="back" />
      </Button>
    </AppContainer>
  );
}
