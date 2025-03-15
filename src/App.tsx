import type {Component} from 'solid-js';
import banner from "./assets/banner.png"
import Card from "./components/Card";

const App: Component = () => {
    return (
        <div>
            <header>
                <h1>Web Merchant</h1>
            </header>
            <img src={banner} alt="site banner"/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

export default App;
