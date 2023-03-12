import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import PetCard from "./components/pet_card";
import Cat from "./data/cat";
import Dog from "./data/dog";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";

function App(): JSX.Element {
    // TODO: activity 6 extension

    const [cats, setCats] = useState<Array<Cat>>(catData);
    const [dogs, setDogs] = useState<Array<Dog>>(dogData);

    const catCount = cats.length;
    const dogCount = dogs.length;

    return (
        <>
            <Navbar />
            <Header catCount={catCount} dogCount={dogCount} />

            <main>
                <div className="cards__wrapper">
                    {cats.map((cat, index) => (
                        <PetCard key={cat.id} type={"cat"} petObject={cat} index={index} />
                    ))}
                    {dogs.map((dog, index) => (
                        <PetCard key={dog.id} type={"dog"} petObject={dog} index={index} />
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default App;
