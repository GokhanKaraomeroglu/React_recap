import React, {useEffect, useState} from 'react'

function Functional() {

	const [count, setCount] = useState(0)
	const [empty, setEmpty] = useState(0)
	const [full, setFull] = useState(0)

	const increment = ()=> {
		setCount (count + 1)
	}
	const decrement = ()=> {
		if (count>0){
		setCount (count - 1)
	}
	}

	useEffect(() => {
		console.log('useEffect')
		// setEmpty (empty + 1) Sonsuz döngü
		return () => console.log('Hoşçakalın...')
	}, [empty, full])

	return (
		<div>
		<h1>Count</h1>
		<button  onClick= {increment}>+</button>
		<h1> {count} </h1>
		<button  onClick= {decrement}>-</button>
		<br></br>
		<h1>Empty</h1>
		<button  onClick= { ()=> setEmpty(empty +1)}>+</button>
		<h1> {empty} </h1>
		<button  onClick= { ()=> setEmpty(empty +1)}>-</button>
		<br></br>
		<h1>Full</h1>
		<button  onClick= { ()=> setFull(full +1)}>+</button>
		<h1> {full} </h1>
		<button  onClick= { ()=> setFull(full +1)}>-</button>

	</div>
	)
}
export default Functional