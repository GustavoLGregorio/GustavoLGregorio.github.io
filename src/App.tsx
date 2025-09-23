import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="bg-background grid grid-cols-1 grid-rows-subgrid text-[foreground]">
            <Header></Header>
            <Hero></Hero>
            <Main>
                <Projects></Projects>
                <About></About>
            </Main>
            <Footer></Footer>
        </div>
    );
}
