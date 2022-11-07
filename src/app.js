import { Route, Routes } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Contact from "./contactPage/contact";

/* remeber to  commit all changes */
/* Add another anchor tag styled as a Button with an id of 'contact' that redirects to “/contact” page in your app.
NB. The contact page path must be "/contact"
The contact page should have a form with the following details:
A First and last name input fields with ids ‘first_name’ and ‘last_name’ respectively
An Email address input field with an id of ‘email’
A Textarea with an id of ‘message’ to contain the message of the person
A button with an id of ‘btn__submit’ that will submit the form
All fields should have appropriate label tags

feat: The new feature you're adding to a particular application
fix: A bug fix
style: Feature and updates related to styling
refactor: Refactoring a specific section of the code-base
test: Everything related to testing
docs: Everything related to documentation
chore: Regular code maintenance.
in this manner git commit -m "feat: The new feature you're adding to a particular application"

*/
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
