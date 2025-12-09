import { Routes, Route } from 'react-router';
import MyCv from '../pages/my-cv';
import Contact from '../pages/contact';
import Layout from '../components/layouts';
const router = (
  <Routes >
    <Route path="/" element={<Layout />} >
      <Route index element={<MyCv />} />
      <Route path='/my-cv/:lang?/:templateId?' element={<MyCv />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </Routes>
)

export default router;