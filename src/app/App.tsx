import "./style/index.scss"
import { Suspense, useContext, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { useTheme } from "./providers/ThemeProvider/lib/useTheme"
import { classNames } from "shared/lib/classNames/classNames"
import { AboutPage } from "page/AboutPage"
import { MainPage } from "page/MainPage"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { Sidebar } from "widgets/Sidebar"
import { t } from "i18next"
import { useTranslation } from "react-i18next"


export const App = () => {
    const {theme} = useTheme()
  return (
    <div className = {classNames('app', {}, [theme])}>
        <Suspense fallback=''>
          <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </Suspense>
    </div>
  )
}
