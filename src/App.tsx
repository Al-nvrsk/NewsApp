import { Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { AboutPageAsync } from "./page/AboutPage/AboutPage.async"
import { MainPageAsync } from "./page/MainPage/MainPage.asynx"

export const App = () => {
  return (
    <div>
        App
        <Link to = {'/'}> Main page </Link>
        <Link to = {'/about'}> About </Link>
        <Suspense fallback = {<div> Loading... </div>}>
            <Routes>
                <Route path = {`/about`} element = {<AboutPageAsync />}/>
                <Route path = {'/'}  element = {<MainPageAsync />}/>
            </Routes>
        </Suspense>
    </div>
  )
}
