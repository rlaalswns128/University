import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { useUserStore } from '../../store';

export default function Navigation() {
  const { user } = useUserStore();
    return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          QUESTorm
        </Typography>
        { user ? (
          <IconButton color="inherit"><PersonIcon /></IconButton>
          ) : (
          <Button color="inherit">로그인</Button>)
        }
      </Toolbar>
    </AppBar>
    </Box>
    );
}