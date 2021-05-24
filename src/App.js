import ContactContextProvider from "./context/ContactContext";
import Routes from "./Routes";

function App() {
    return (
        <div className="App">
            <ContactContextProvider>
                <Routes />
            </ContactContextProvider>
        </div>
    );
}

export default App;
