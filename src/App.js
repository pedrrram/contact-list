import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import ContactApp from './components/contact-app';
// import Contact from './components/contact-app/Contact';
import NotFound from './pages/NotFound';
import ContactDetails from './pages/ContactDetails';

const AddContact = lazy(() => import('./components/contact-app/AddContact'));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ContactApp />}>
          <Route
            path="add"
            element={
              <Suspense>
                <AddContact />
              </Suspense>
            }
          />
        </Route>
        <Route path="contacts/:id" element={<ContactDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
