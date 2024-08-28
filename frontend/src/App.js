import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Videos from './Components/Videos';
import VideoPlayer from './Components/VideoPlayer';
import Upload from './Components/Upload';
import Button from './Components/Button';
import Landing from './Components/landing';  // Import the new Landing page

function App() {
  const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
      <AppStyled className="App">
        <div className="upload">
          <Button 
            name="Upload"
            icon={<i className="fas fa-plus"></i>}
            onClick={() => { setModal(true); }}
            bg="#1e90ff"
          />
        </div>
        {modal && <Upload />}
        <h1>Video Library</h1>
        <Routes>
          <Route path='/' element={<Landing />} /> {/* Set Landing as the default page */}
          <Route path='/videos' element={<Videos />} /> {/* Video Library route */}
          <Route path='/videos/:id' element={<VideoPlayer />} /> {/* Video Player route */}
        </Routes>
        {modal && <div className="overlay" onClick={() => setModal(false)}></div>}
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 18rem;
  h1 {
    color: #fff;
    background: black;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  
  .upload {
    display: flex;
    justify-content: flex-start;
  }
`;

export default App;
