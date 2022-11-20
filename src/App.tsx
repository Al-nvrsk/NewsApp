import "./style/index.scss"
import { Suspense, useContext, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { AboutPageAsync } from "./page/AboutPage/AboutPage.async"
import { MainPageAsync } from "./page/MainPage/MainPage.asynx"
import { Theme, ThemeContext } from "./theme/themeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

export const App = () => {
    const {theme, toggleTheme} = useTheme()
  return (
    <div className = {classNames('app', {}, [theme])}>
        <button onClick = {toggleTheme}> TOGGLE </button>
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
