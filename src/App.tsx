import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { HomePg } from "./home/page/HomePg"
import { ExplorationsPg } from "./explorations/pages/ExplorationsPg"
import ExperiencePg from "./experiences/pages/ExperiencePg"
import { ContactPg } from "./contact/page/ContactPg"
import { AboutMePg } from "./aboutme/pages/AboutMePg"
import { ProgrammingPg } from "./explorations/pages/ProgrammingPg"
import { BakingPg } from "./explorations/pages/BakingPg"
import { ArtPg } from "./explorations/pages/ArtPg"
import { ExplorationPostPg } from "./explorations/pages/ExplorationPostPg"


const AdminPage = import.meta.env.DEV
  ? lazy(() => import("./explorations/pages/ExplorationAdminPg"))
  : null

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePg />} />

        {/* Explorations */}
        <Route path="/explorations" element={<ExplorationsPg />} />
        <Route path="/explorations/programming" element={<ProgrammingPg />} />
        <Route path="/explorations/baking" element={<BakingPg />} />
        <Route path="/explorations/art" element={<ArtPg />} />
        <Route path="/explorations/:category/:slug" element={<ExplorationPostPg />} />

        {/* Dev-only admin */}
        {import.meta.env.DEV && AdminPage ? (
          <Route
            path="/explorations/admin"
            element={
              <Suspense fallback={<div className="p-4">Loading…</div>}>
                <AdminPage />
              </Suspense>
            }
          />
        ) : null}

        {/* Other pages */}
        <Route path="/experiences" element={<ExperiencePg />} />
        <Route path="/contact" element={<ContactPg />} />
        <Route path="/about-me" element={<AboutMePg />} />

        {/* Optional: Not Found */}
        <Route path="*" element={<div className="p-6">Not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
