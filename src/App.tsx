import './App.css'
import React, {useEffect} from "react";

const App: React.FC = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
    }, [tg]);

    const onClose = () => {
        tg.sendData(JSON.stringify({cmd: 'close', user: tg.initDataUnsafe?.user?.first_name}));
        tg.close();
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Telegram Web App</h1>
                <p>hello {tg.initDataUnsafe?.user?.first_name}</p>
                <button onClick={onClose}>Close</button>
            </header>
        </div>
    )
}

export default App
