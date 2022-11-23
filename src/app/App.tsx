import "./style/index.scss"
import { Suspense, useContext, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames/classNames"
import { AboutPage } from "page/AboutPage"
import { MainPage } from "page/MainPage"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"


export const App = () => {
    const {theme} = useTheme()
  return (
    <div className = {classNames('app', {}, [theme])}>
        <Navbar />
        App
        <AppRouter />
    </div>
  )
}
