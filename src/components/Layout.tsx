import React from 'react';
import { AppBar, Toolbar, Typography, Container, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Book, VolumeUp } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.pathname);


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">LanguageMaster</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 10 }}>
        {children}
      </Container>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigationAction label="Home" value="/" icon={<Home />} component={Link} href="/" />
        <BottomNavigationAction label="Vocabulary" value="/vocabulary" icon={<Book />} component={Link} href="/vocabulary" />
        <BottomNavigationAction label="Pronunciation" value="/pronunciation" icon={<VolumeUp />} component={Link} href="/pronunciation" />
      </BottomNavigation>
    </>
  );
};


export default Layout;