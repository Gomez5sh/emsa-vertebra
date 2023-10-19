import "./App.css";
import { Spin, message } from "antd";
import Logo from "./data/LogosEMSAs2.png";
import { lazy, Suspense, useEffect } from "react";
import { useContextState } from "./contexts/ContextProvider";
import { Navbar, Footer, SideBar } from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const loadng: any = {
  with: "100vw",
  height: "100vh",
  margin: "20px 0",
  marginBottom: 20,
  padding: "30px 50px",
  textAlign: "center",
  borderRadius: 4,
};

function App() {
  const LoginPage = lazy(() => import("./pages/Login"));
  const HomePage = lazy(() => import("./pages/Home"));
  const MeterPage = lazy(() => import("./pages/Meters"));
  const TensionlackPage = lazy(() => import("./pages/Tensionlack"));

  const { activeMenu, login, setLogin, setUser, setActiveMenu } =
    useContextState();

  useEffect(() => {
    setActiveMenu(false);
    setLogin(false);
    setUser({
      user: {
        name: "",
        email: "",
      },
    });
    message.success("Sesión cerrada");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!login && window.location.pathname !== "/") {
      window.location.replace("/");
    }
  }, [login]);

  return (
    <div>
      <BrowserRouter>
        <div
          className={`flex relative dark:bg-main-dark-bg ${
            loadng ? "w-screen" : ""
          }`}
        >
          <div className="fixed right-0 bottom-4" style={{ zIndex: "1000000" }}>
            <img
              src={Logo}
              alt="emsa-logo"
              style={{
                width: "113px",
                height: "40px",
                marginRight: "0px",
                padding: "0px",
              }}
            />
          </div>
          {activeMenu && login ? (
            <div className="w-72 fixed sidebar dark:bg-secundary-dark-bg bg-white">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secundary-dark-bg">
              <SideBar />
            </div>
          )}
          <div
            className={`w-full bg-main-bg dark:bg-main-bg min-h-screen  ${
              activeMenu && login ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              <Routes>
                {login ? (
                  <>
                    <Route
                      path="/"
                      element={
                        <Suspense fallback={<Spin style={loadng} />}>
                          <HomePage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/tension"
                      element={
                        <Suspense fallback={<Spin style={loadng} />}>
                          <TensionlackPage />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/medidores"
                      element={
                        <Suspense fallback={<Spin style={loadng} />}>
                          <MeterPage />
                        </Suspense>
                      }
                    />
                  </>
                ) : (
                  <Route
                    path="/"
                    element={
                      <Suspense fallback={<Spin style={loadng} />}>
                        <LoginPage />
                      </Suspense>
                    }
                  />
                )}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
