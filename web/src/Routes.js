// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Redirect, routes } from '@redwoodjs/router'
import NotFoundPage from 'src/pages/NotFoundPage/NotFoundPage.tsx'
import LoginPage from 'src/pages/LoginPage/LoginPage.tsx'

const HomePageRedirect = () => <Redirect to={routes.login()} />

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePageRedirect} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
