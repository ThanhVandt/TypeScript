import { Route, Routes, BrowserRouter } from "react-router-dom"
import Signin from "./user/signin"
import Signup from "./user/signup"
import AddProduct from "./admin/add"
import UpdateProduct from "./admin/update"
import ListProduct from "./admin/list"
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
    </Routes>
    <Routes >
      <Route path="/admin" >
        <Route index element={<ListProduct />}></Route>
        <Route path="add" element={<AddProduct />}></Route>
        <Route path="update/:id" element={<UpdateProduct />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
}
export default App
