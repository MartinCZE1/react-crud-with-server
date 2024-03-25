import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import CatCreateForm from "./CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";
import CreatedCat from "./CatCreateForm/CreatedCat";
import StudentCreateForm from "./StudentCreateForm/StudentCreateForm";
import StudentUpdateForm from "./StudentUpdateForm/StudentUpdateForm";
import StudentView from "./StudentView/StudentView";
import StudentList from "./StudentList/StudentList";
import CreatedStudent from "./StudentCreateForm/CreatedStudent";
import PhoneCreateForm from "./PhoneCreateForm/PhoneCreateForm";
import PhoneUpdateForm from "./PhoneUpdateForm/PhoneUpdateForm";
import PhoneView from "./PhoneView/PhoneView";
import PhoneList from "./PhoneList/PhoneList";
import CreatedPhone from "./CreatedPhone/CreatedPhone";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/createcat" element={<CatCreateForm />} />
          <Route path="/updatecat/:id" element={<CatUpdateForm />} />
          <Route path="/cat/:id" element={<CatView />} />
          <Route path="/cats" element={<CatList />} />
          <Route path="/createdcat/:id" element={<CreatedCat />} />

          <Route path="/createstudent" element={<StudentCreateForm />} />
          <Route path="/updatestudent/:id" element={<StudentUpdateForm />} />
          <Route path="/student/:id" element={<StudentView />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/createdstudent/:id" element={<CreatedStudent />} />

          <Route path="/createphone" element={<PhoneCreateForm />} />
          <Route path="/updatephone/:id" element={<PhoneUpdateForm />} />
          <Route path="/phone/:id" element={<PhoneView />} />
          <Route path="/phones" element={<PhoneList />} />
          <Route path="/createdphone/:id" element={<CreatedPhone />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
