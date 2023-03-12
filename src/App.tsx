import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import CatCard from "./components/cat_card";
import Cat from "./data/cat";
import catData from "./data/cat-data";

function App(): JSX.Element {
    // TODO: activity 6 extension

    const [cats, setCats] = useState<Array<Cat>>(catData);

    const catCount = cats.length;

    return (
        <>
            <Navbar />
            <Header catCount={catCount} />

            <main>
                <div className="cards__wrapper">
                    {cats.map((cat, index) => (
                        <CatCard key={cat.id} catObject={cat} catIndex={index} />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
