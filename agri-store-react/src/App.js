import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import ProductlistingPage from "./Pages/ProductlistingPage";
import SignupPage from "./Pages/SignupPage";
import "./App.css";
import { CartPage } from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import Toast from "./Components/Toast/Toast";
import AccountPage from "./Pages/AccountPage";
import PageNotFound from "./Components/PageNotFound";
import Authantication from "./Components/Authantication";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route
          exact
          path="ProductListingPage"
          element={<ProductlistingPage />}
        />

        <Route
          path="/CartPage"
          element={
            <Authantication>
              <CartPage />
            </Authantication>
          }
        />
        <Route
          exact
          path="/WishlistPage"
          element={
            <Authantication>
              <WishlistPage />
            </Authantication>
          }
        />
        <Route
          exact
          path="/AccountPage"
          element={
            <Authantication>
              <AccountPage />
            </Authantication>
          }
        />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
