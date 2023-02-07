import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./ui/Header";
import { Home } from "./ui/Home";
import styles from "./App.module.css";
import { Footer } from "./ui/Footer";
import { useState } from "react";

function App() {
    const [title, setTitle] = useState("");
    return (
        <Router>
            <div className={styles.App}>
                <Header setTitle={setTitle} />
                <Home title={title} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
