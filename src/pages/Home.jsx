import AddedPlants from "../Components/AddedPlants";
import AddPlant from "../Components/AddPlant";
import News from "../Components/News";


function Home() {

    return (  
        <main>
            <News />
            <AddPlant />
            <AddedPlants />
        </main>

    );
}

export default Home;