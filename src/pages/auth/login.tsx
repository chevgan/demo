import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AuthWrapper, AuthLogin } from '~sections';

const Login = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Stack sx={{ mb: { xs: -0.5, sm: 0.5 } }} spacing={1}>
            <Typography variant="h3">Добро пожаловать</Typography>
          </Stack>
        </Grid>
        <Grid size={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
