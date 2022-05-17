import NexLink from 'next/link';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuOutlined />
            </IconButton>

            <NexLink href='/' passHref>
                <Link>
                    <Typography variant='h6' color='white'>CookieMaster</Typography>
                </Link>
            </NexLink>

            <div style={{ flex: 1}} />

            <NexLink href='/theme-changer' passHref>
                <Link>
                    <Typography variant='h6' color='white'>Cambiar Tema</Typography>
                </Link>
            </NexLink>
        </Toolbar>
    </AppBar>
  )
}
