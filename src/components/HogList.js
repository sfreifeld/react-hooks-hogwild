import HogCard from "./HogCard"
import Search from "./Search"

function HogList({hogs}) {
    const showHogs = hogs.map((hog) => (
            <HogCard key={hog.name} hog={hog} class='ui eight wide column' />
            //<div key={hog.name}> {hog.name} </div>
        ))
        

    
    return (
        <div id="hog-container">
            <Search />
            <div id="hog-list" class='ui grid container'>
                {showHogs}
            </div>
        </div>
    )

}

export default HogList