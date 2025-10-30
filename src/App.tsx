import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function App() {
    return (
        <div className="grid grid-cols-1 grid-rows-subgrid text-lg text-[foreground] sm:text-xl">
            <Background />
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
