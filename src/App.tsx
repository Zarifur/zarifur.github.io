import { Route, Switch, Router } from "wouter";
import PageLoader from "./component/lodar/lodar";
import Sidebar from "./component/sideBar/sideBar";
import HomeSection from "./component/home";
import AboutMe from "./component/aboutMe";
import Resume from "./component/resume";
import ContactPage from "./component/contact";

function App() {
  return (
    <Router base="/">
      <div className="bg-page text-primary font-sans h-screen flex overflow-hidden">
        <PageLoader />
        <Sidebar />

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
    </Router>
  );
}
export default App;
