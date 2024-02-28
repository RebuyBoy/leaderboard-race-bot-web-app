import './App.css'
import React, {useEffect, useState} from "react";
import {Select, TextInput} from "@mantine/core";

const App: React.FC = () => {
    const tg = window.Telegram.WebApp;
    const [gameType, setGameType] = useState<string | null>('');
    const [stake, setStake] = useState<string | null>('');
    const gameTypes = ['game1', 'game2', 'game3'];
    const stakes = ['stake1', 'stake2', 'stake3'];

    useEffect(() => {
        tg.ready();
    });

    const onClose = () => {
        tg.sendData(JSON.stringify({cmd: 'close', user: tg.initDataUnsafe?.user?.first_name}));
        tg.close();
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Telegram Web App</h1>
                <h2>start param {window.Telegram.WebApp.initDataUnsafe.start_param}</h2>
                <p>hello {tg.initDataUnsafe?.user?.first_name}</p>
                <Select data={gameTypes} value={gameType} onChange={setGameType}/>
                <Select data={stakes} value={stake} onChange={setStake}/>
                <TextInput placeholder="Your nickname"/>
                <button onClick={onClose}>Subscribe</button>
            </header>
        </div>
    )
}

export default App
