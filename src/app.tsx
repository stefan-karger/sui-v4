import { Suspense } from "solid-js"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"

import "~/styles/app.css"

export default function App() {
  return (
    <Router
      root={(props) => (
        <main class="">
          <a href="/">Index</a>
          <a href="/about">About</a>
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
