import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import IdeaPage from "./pages/IdeaPage.jsx";
import MethodPage from "./pages/MethodPage.jsx";
import BuildsPage from "./pages/BuildsPage.jsx";
import DestinationsPage from "./pages/DestinationsPage.jsx";
import KoreaPage from "./pages/KoreaPage.jsx";
import LeaderPage from "./pages/LeaderPage.jsx";
import SchoolsPage from "./pages/SchoolsPage.jsx";
import BookPage from "./pages/BookPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Loader from "./components/Loader.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="rl">
      <Loader />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/the-idea" element={<IdeaPage />} />
          <Route path="/method" element={<MethodPage />} />
          <Route path="/what-it-builds" element={<BuildsPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/korea" element={<KoreaPage />} />
          <Route path="/who-leads" element={<LeaderPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/idea" element={<Navigate to="/the-idea" replace />} />
          <Route path="/leader" element={<Navigate to="/who-leads" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
