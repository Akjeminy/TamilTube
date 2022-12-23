import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetails, SearchFeed, NavBar, Feed } from './Components';

function App() {
  return(
    <>
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
    
    </>
);
  }

export default App;