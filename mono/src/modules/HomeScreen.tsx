import {useRef} from "react";
import {RootStore} from "@mono/stores/src/RootStore.ts";

export const HomeScreen = () => {
    const rootStore = useRef(new RootStore());

    return <div>
        <h2>Employees of the month</h2>
    <ul>
        <li>{rootStore.current.Tom}</li>
        <li>{rootStore.current.Ilya}</li>
    </ul>
    </div>
}