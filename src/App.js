import './App.css';
import { Typography, Container } from '@mui/joy';

function App() {
  return (
    <Container className="App">

      {/* We decided to use Mui material for our frontend framework  */}
      {/* Its easy to use as demonstrated in this file, just
      import the components you need to use and wrap the content inside the components
      just as you would in html or bootstrap components  */}
      {/* To change the style or adjust the styles you can use
      eg: sx={{display: "inline-flex", justifyContent:"center"}}  */}
      {/* Link to the MUI/Joy = "https://mui.com/joy-ui/getting-started/installation/" */}
      {/* For text, Mui uses Typography which we use in all text h1-h6 and paragraph  */}

      {/* Typography example please refer to the doc for more options */}
      <Typography level="h1" sx={{ color: 'red' }}>Hello</Typography>

    </Container>
  );
}

export default App;
