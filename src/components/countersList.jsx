import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name:'Ненужная вещь'},
        {id:1, value:4, name:'Ложка'},
        {id:2, value:0, name:'Вилка'},
        {id:3, value:0, name:'Тарелка'},
        {id:4, value:0, name:'Набор минималиста'},
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter((counter) => counter.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleIncrement = (id) => {
        const newCounters = counters.map((counter) => {
            return counter.id === id ? {...counter, value: counter.value + 1} : counter
        })

        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        const newCounters = counters.map((counter) => {
            if (counter.id === id) {
                return counter.value > 0 ? {...counter, value: counter.value - 1} : counter
            } else {
                return counter
            }
        })

        setCounters(newCounters)
    }

    return <>
        { counters.map((counter) => (
            <Counter {...counter}
                     key={counter.id}
                     onDelete={handleDelete}
                     onIncrement={handleIncrement}
                     onDecrement={handleDecrement}/>
        ))}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
}

export default CountersList