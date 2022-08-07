import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import ContactApp from './components/contact-app/ContactApp';
import NotFound from './pages/NotFound';
import ContactDetails from './pages/ContactDetails';

const AddContact = lazy(
  () =>
    import(
      /* webpackChunkName: "AddContact" */ './components/contact-app/AddContact'
    )
);
const EditContact = lazy(() => import('./pages/EditContact'));

const App: React.FC = () => {
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
        <Route
          path="edit/:id"
          element={
            <Suspense>
              <EditContact />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
