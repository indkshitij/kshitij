import Projects from "@/components/pages/ProjectsPage"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const page = () => {
  return (
    <div>
        <Navbar/>   
        <Projects/>
        <Footer/>
    </div>
  )
}

export default page