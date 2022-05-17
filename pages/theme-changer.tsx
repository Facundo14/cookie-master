import { FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Layout } from '../components/layouts';
import Cookies from 'js-cookie';
import axios from 'axios';

interface Props {
  theme: string;
}


const ThemeChengerPage:FC<Props> = (theme) => {

  console.log(theme);

  const [currentTheme, setCurrentTheme] = useState('light')

  const onThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const selectedTheme = event.target.value;

    console.log({selectedTheme});

    setCurrentTheme(selectedTheme);

    localStorage.setItem('theme', selectedTheme);
    Cookies.set('theme', selectedTheme);
  }

  useEffect(() => {
    console.log('LocalStorage theme: ', localStorage.getItem('theme'));
  }, [])

  const onClick = async() => {
    const {data} = await axios.get('/api/hello');

    console.log(data);
  }
  

  return (
    <Layout>
        <Card>
          <CardContent>
            <FormControl>
              <FormLabel>Tema</FormLabel>
              <RadioGroup
                value={ currentTheme }
                onChange={ onThemeChange }
              >
                <FormControlLabel value='light' control={ <Radio /> } label='Light' />
                <FormControlLabel value='dark' control={ <Radio /> } label='Dark' />
                <FormControlLabel value='custom' control={ <Radio /> } label='Custom' />
              </RadioGroup>
            </FormControl>
            <Button
              onClick={ onClick }
            >
              Solicitud
            </Button>
          </CardContent>
        </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({req}) => {

  const {theme = 'dark', name = 'No name'} = req.cookies;

  const validThemes = ['light', 'dark', 'custom'].includes(theme) ? theme : 'dark';


  return {
    props: {
      theme: validThemes,
      name
    }
  }
}

export default ThemeChengerPage;