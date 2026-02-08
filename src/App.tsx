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
     <div className="bg-page text-primary font-sans h-screen flex overflow-hidden">
      <PageLoader />

      {/* Sidebar — NOT scrollable */}
      <Sidebar />

      {/* Main — scrollable */}
      <main className="flex-1 h-screen bg-page overflow-y-auto">
        <Switch>
          <Route path="/" component={HomeSection} />
          <Route path="/about" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={ContactPage} />

          <Route>
            <div className="h-full flex items-center justify-center">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
