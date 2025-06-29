import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import {Home} from './components/Home';
import {Home2} from './components/Home2';
import {Biography, NotFound, MostFamousPicture, Collection, Wonders} from './components/Comp';


function App()
{
  return(
      <div className="App">
          <BrowserRouter>
              {/*<Routes>*/}
              {/*    <Route path='/' element={<Home/>}>*/}
              {/*        <Route path='/biography' element={<Biography/>}></Route>*/}
              {/*        <Route path='/mostFamousPicture' element={<MostFamousPicture/>}></Route>*/}
              {/*        <Route path='/collection' element={<Collection/>}></Route>*/}
              {/*        <Route path='*' element={<NotFound/>}></Route>*/}
              {/*    </Route>*/}
              {/*</Routes>*/}

              <Routes>
                  <Route path='/' element={<Home2/>}>
                      <Route path=":id" element={<Wonders/>}/>
                  </Route>
                  <Route path='*' element={<NotFound/>}></Route>
              </Routes>

              <div>
                  <p>© Copyright by Nikita</p>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
