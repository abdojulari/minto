import React from "react"
import '../css/app.scss'
import SiteLayout from "../Components/SiteLayout/SiteLayout"
import HomeContent from "../Components/HomeContent/HomeContent"

export default function Home() {
  return (
    <SiteLayout>
       <HomeContent />
    </SiteLayout>
  )
}
