import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import PetCard from "./components/pet_card";
import Cat from "./data/cat";
import Dog from "./data/dog";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";

function App(): JSX.Element {
    const [cats, setCats] = useState<Array<Cat>>(catData);
    const [dogs, setDogs] = useState<Array<Dog>>(dogData);

    const [inputType, setInputType] = useState<"Cat" | "Dog">("Cat");
    const [inputs, setInputs] = useState<Cat | Dog>({
        name: "name",
        species: "species",
        favFoods: ["favFoods"],
        birthYear: 2999,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleChange_inputType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as "Dog" | "Cat";
        setInputType(value);
    };

    const handleChange_favFoods = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.split(",");
        setInputs({ ...inputs, favFoods: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newID = uuidv4();
        if (inputType === "Cat") {
            setCats([...cats, { ...inputs, id: newID }]);
        } else {
            setDogs([...dogs, { ...inputs, id: newID }]);
        }
    };

    const catCount = cats.length;
    const dogCount = dogs.length;

    return (
        <>
            <Navbar />
            <Header catCount={catCount} dogCount={dogCount} />

            <main>
                <div className="form__container">
                    <form onSubmit={handleSubmit}>
                        <label>New Pet Type:</label>
                        <select className="form__input" value={inputType} onChange={handleChange_inputType}>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>

                        <label>New Pet Name:</label>
                        <input
                            className="form__input"
                            type="text"
                            name="name"
                            value={inputs.name || ""}
                            onChange={handleChange}
                        />

                        <label>New Pet Species:</label>
                        <input
                            className="form__input"
                            type="text"
                            name="species"
                            value={inputs.species || ""}
                            onChange={handleChange}
                        />

                        <label>New Pet Fav Foods: (separate by comma)</label>
                        <input
                            className="form__input"
                            type="text"
                            name="favFoods"
                            value={inputs.favFoods || ""}
                            onChange={handleChange_favFoods}
                        />

                        <label>New Pet Birth Year:</label>
                        <input
                            className="form__input"
                            type="text"
                            name="birthYear"
                            value={inputs.birthYear || ""}
                            onChange={handleChange}
                        />

                        <input type="submit" />
                    </form>
                </div>

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
