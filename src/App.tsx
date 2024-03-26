import './App.css'
import React, {useEffect, useState} from "react";
import {Select, TextInput} from "@mantine/core";

const App: React.FC = () => {
    const tg = window.Telegram.WebApp;
    const [gameType, setGameType] = useState<string | null>('gggg');
    const [stake, setStake] = useState<string | null>('ssss');
    const [nickname, setNickname] = useState<string | null>('nnnn');
    const gameTypes = ['SIT_GO_AOF', 'HOLDEM_9MAX', 'BATTLE_ROYALE'];
    const stakes = ['S_100', 'S_200', 'S_300'];

    useEffect(() => {
        tg.ready();
    });

    const onClose = async () => {
        await fetch('https://af7b-37-28-156-238.ngrok-free.app/webapp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "gameType": gameType,
                "stake": stake,
                "nickname": nickname,
            }),
        });
        tg.close();
        console.log("closed");
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Telegram Web App</h1>
                <h2>start param {tg.initDataUnsafe?.start_param || 'Error: start_param not found'}</h2>
                <h2>start param {tg.initData || 'Error: initData not found'}</h2>
                <p>hello: {tg.initDataUnsafe?.user?.first_name}</p>
                <p>query id: {tg.initDataUnsafe?.query_id}</p>
                <Select data={gameTypes} value={gameType} onChange={setGameType}/>
                <Select data={stakes} value={stake} onChange={setStake}/>
                <TextInput onInput={() => setNickname} placeholder="Your nickname"/>
                <button onClick={onClose}>Subscribe</button>
            </header>
        </div>
    )
}

export default App
