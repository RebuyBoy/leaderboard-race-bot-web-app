import './App.css'
import React, {useEffect, useState} from "react";
import {Button, Center, Text, Flex, Select, TextInput} from "@mantine/core";

const App: React.FC = () => {
    const tg = window.Telegram.WebApp;
    const [gameType, setGameType] = useState<string | null>('OMAHA_AOF');
    const [stake, setStake] = useState<string | null>('');
    const [nickname, setNickname] = useState<string | null>('');
    const gameTypes = ['OMAHA_AOF'];
    const stakes = ['OMAOF_1000', 'OMAOF_500', 'OMAOF_200', 'OMAOF_100', 'OMAOF_40', 'OMAOF_20'];

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
                "query_id": tg.initDataUnsafe?.query_id,
            }),
        });
        tg.close();
        console.log("closed");
    }

    const isDisabledButton: boolean = !gameType || !stake || !nickname

    return (
        <Center w={'100%'}>

            <Flex direction={'column'} gap={7} maw={300} justify={'space-around'} align={'center'}>

                <Text size="xl"
                      fw={900}
                      variant="gradient"
                      gradient={{from: 'blue', to: 'cyan', deg: 90}}>
                    hello {tg.initDataUnsafe?.user?.first_name}
                </Text>
                <Select placeholder={"select game type"} data={gameTypes} value={gameType} onChange={setGameType}
                        required/>
                <Select placeholder={"select stake"} data={stakes} value={stake} onChange={setStake} required/>
                <TextInput w={'100%'} onInput={(event) => setNickname(event.currentTarget.value)}
                           placeholder="Your nickname"
                           required={true}/>
                <Button onClick={onClose} disabled={isDisabledButton}>Subscribe</Button>
            </Flex>
        </Center>
    )
}

export default App
