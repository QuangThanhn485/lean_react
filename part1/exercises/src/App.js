import React from "react";
import "./App.css";
import { useState } from "react";

const Button = (props) => {
    return (
        <button style={{ marginLeft: "20px" }} onClick={props.clicks}>
            {props.text}
        </button>
    );
};
const Resuln = (props) => {
    return (
        <h6>
            {props.text}
            {"    "}
            <span style={{ color: "blue" }}>
                <i>{props.count}</i>
            </span>
        </h6>
    );
};
const Content = (props) => {
    if (props.total === 0) {
        return <>No feedback given</>;
    }

    return (
        <>
            <Resuln text="good" count={props.good}></Resuln>
            <Resuln text="Neutral" count={props.neutral}></Resuln>
            <Resuln text="Bad" count={props.bad}></Resuln>
            <Resuln text="all" count={props.total}></Resuln>
            <Resuln text="average" count={props.average}></Resuln>
        </>
    );
};

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const forGood = () => {
        setGood(good + 1);
    };
    const forNeutral = () => {
        setNeutral(neutral + 1);
    };
    const forBad = () => {
        setBad(bad + 1);
    };
    const total = bad + neutral + good;
    const average = (bad + neutral + good) / 3;
    return (
        <div style={{ marginLeft: "100px", zoom: "150%" }}>
            <h3>Give feedBack</h3>
            <Button clicks={forGood} text={"Good"}></Button>
            <Button clicks={forNeutral} text={"Neutral"}></Button>
            <Button clicks={forBad} text={"Bad"}></Button>
            <h6>Statistics</h6>
            <Content
                {...{ good, bad, total, neutral, average }}
            ></Content>
        </div>
    );
}

export default App;
