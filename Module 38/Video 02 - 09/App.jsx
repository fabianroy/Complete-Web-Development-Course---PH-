import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

    const actors = ['Sakib Khan', 'Jayed Khan', 'Hero Alam', 'Panna', ''];

    const singers = [
        {name: 'Mahfuzur Rahman', age: 68},
        {name: 'Eva Rahman', age: 38},
        {name: 'Shuvro Dev', age: 58},
        {name: 'Pritom Hasan', age: 28}
    ]; 

    const books = [
        {id: 101, name:'Physics', price: 200},
        {id: 102, name:'Chemistry', price: 250},
        {id: 103, name:'Math', price: 300},
        {id: 104, name:'Biology', price: 150},
    ]

    return (
        <>
            <h3>Vite + React</h3>

            <Actor name={"Bappa Raj"}></Actor>
            {
                actors.map(actor => <Actor name={actor}></Actor>)
            }

            {
                singers.map(singer => <Singer singer={singer}></Singer>)
            }

            <BookStore books={books}></BookStore>

            <ToDo task="Learn React" isDone={true}></ToDo>
            <ToDo task="Learn Vue" isDone={false}></ToDo>
            <ToDo task="Learn Angular" isDone={false}></ToDo>
            <ToDo task="Learn Next.JS" isDone={true}></ToDo>
            <ToDo task="Learn Express.JS" isDone={true}></ToDo>
            <ToDo task="Learn Node.JS" isDone={true}></ToDo>
            {/* <Person></Person>
                <Student name="Nasif" roll="714" age="22"></Student>
                <Developer></Developer>
                <Device name="Laptop" price="80,500"></Device>
                <Device name="Desktop" price="60,000"></Device>
                <Device name="Mobile" price="25,000"></Device>
                <Boxer body={body} power={power}></Boxer> */}
        </>
    )
}

function Person() {
    const age = 25;
    const money = 2000;
    return <h3>I am a person with age {age} and I have {money} taka.</h3>
}

function Device(props) {
    console.log(props);
    return <h2>This Device : {props.name} Price : {props.price}</h2>
}

function Student(props) {
    return (
        <div className='student'>
            <h2>Student</h2>
            <p>Name : {props.name}</p>
            <p>Roll : {props.roll}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}

const { body, power } = { body: 'Thin', power: 'Average' }

function Boxer({ body, power = 'low' }) {
    return (
        <div>
            <h3>Body : {body}</h3>
            <h3>Power : {power}</h3>
        </div>
    )
}

function Developer() {
    const developerStyle = {
        margin: '10px',
        padding: '10px',
        border: '2px solid red',
        borderRadius: '10px'
    }

    return (
        <div style={developerStyle}>
            <h5>Devo Devo</h5>
            <p>Coding</p>
        </div>
    )
}

export default App
