import './App.css'
import React, {useEffect} from "react";

const App: React.FC = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
        console.log(tg.initDataUnsafe?.user?.first_name);
    }, []);

    const onClose = () => {
        tg.close();
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1>Telegram Web App</h1>
                    <button onClick={onClose}>Close</button>
                </header>
            </div>
        </>
    )
}

export default App
