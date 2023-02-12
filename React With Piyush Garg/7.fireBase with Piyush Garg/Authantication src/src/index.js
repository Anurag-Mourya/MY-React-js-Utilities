
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import RealtimeDatabase from './firebase/1. RealtimeDatabase';
// import EmailAndPass from './firebase/athentication/EmailAndPass';
import Logout from './firebase/athentication/Logout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  {/* <RealtimeDatabase/> */}
  {/* <EmailAndPass/> */}
  <Logout/>
  </StrictMode>
);

