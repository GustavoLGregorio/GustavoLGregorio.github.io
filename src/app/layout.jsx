import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/config/fontawesome";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Gustavo Luiz Gregorio",
  description:
    "Portfólio de Gustavo: desenvolvedor web, fullstack javascript e mobile react native",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
