import {About, Contact, Hero, Projects, Skills} from "../../components/sections";

export function Component() {
    return (
        <div>
            {/* Hero */}
            <Hero />

            {/* About me */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Projects */}
            <Projects />

            {/* Contact */}
            <Contact />
        </div>
    )
}

Component.displayName = 'Home';