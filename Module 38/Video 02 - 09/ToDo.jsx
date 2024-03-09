// Conditional Rendering


// Type 1
// export default function ToDo ({task, isDone}) {
//     if (isDone === true) {
//         return <li>Finished: {task}</li>
//     } else {
//         return <li>Unfinished: {task}</li>
//     }
// }


// Type 2
// export default function ToDo ({task, isDone}) {
//     if(isDone) {
//         return <li>Finished: {task}</li>
//     } 
//     return <li>Unfinished: {task}</li>
// }


// Type 3 : Ternary Operator
// export default function ToDo ({task, isDone}) {
//     return (
//         <li>{isDone ? 'Finished' : 'Unfinished'} : task</li>
//     )
// }


// Type 4 : Logical AND Operator
// export default function ToDo ({task, isDone}) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

export default function ToDo ({task, isDone}) {
    return (
        <li>{task} {isDone || ': Do It'}</li>
    )
}
