import "./App.css";
import { Route, Switch } from "wouter";
import HomeSection from "./component/home";
import Sidebar from "./component/sideBar/sideBar";
import PageLoader from "../src/component/lodar/lodar";
import AboutMe from "./component/aboutMe";
import Resume from "./component/resume";
import ContactPage from "./component/contact";

function App() {
  // useEffect(() => {
  //   const favicon = document.querySelector("link[rel*='icon']") || document.createElement("link");
  //   favicon.type = "image/png";
  //   favicon.rel = "icon";
  //   favicon.sizes = "512x512"; //
  //   favicon.href = "/img/zarif_logo.png"; // Update path if needed
  //   document.head.appendChild(favicon);
  // }, []);

  return (
    <div className="bg-page text-primary font-sans min-h-screen md:flex">
      <PageLoader /> {/* Loading bar component */}
      <Sidebar />
      <main className="relative flex-1 w-full md:w-[70%] md:ml-[30%] h-screen overflow-y-auto bg-page">
        <Switch>
          <Route path="/">
            <HomeSection />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route>
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
