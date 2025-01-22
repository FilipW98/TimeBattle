import { useState, useRef } from "react";


export default function Player() {

  const nameRef = useRef();
  const [changeName, setChangeName] = useState();

  function nameHandler() {
    setChangeName(nameRef.current.value);
    nameRef.current.value = '';
  }


  return (
		<section id='player'>
			<h2>Welcome {changeName ?? 'unknown player'}</h2>
			<p>
				<input ref={nameRef} type='text' />
				<button onClick={nameHandler}>Set Name</button>
			</p>
		</section>
	);
}
