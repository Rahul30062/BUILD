import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "./LandingPage";
import SecurityLogin from "./Security/SecurityLogin";
import VisitorLanding from "./Visitors/VisitorLanding";
import VisitorRegister from "./Visitors/VisitorRegister";
import VisitorMain from "./Visitors/VisitorMain";
import VisitorQR from "./Visitors/VisitorQR";
import VisitorHistory from "./Visitors/VisitorHistory";
import VisitorLogin from "./Visitors/VisitorLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecurityMain from "./Security/SecurityMain";
import QrReader from "./Security/QrReader";
import UserDetails from "./Security/UserDetails";
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/visitor" element={<VisitorLanding />}>
            <Route path="/visitor/register" element={<VisitorRegister />} />
            <Route path="/visitor" element={<VisitorRegister />}></Route>
            <Route path="/visitor/login" element={<VisitorLogin />}></Route>
          </Route>
          <Route path="/main" element={<VisitorMain />}>
            <Route path="/main/myQR" element={<VisitorQR />} />
            <Route path="/main/pastDetails" element={<VisitorHistory />} />
          </Route>
          <Route path="/security" element={<SecurityMain />}>
            <Route path="/security/QrReader" element={<QrReader />} />
            <Route path="/security/userDetails" element={<UserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div``;
