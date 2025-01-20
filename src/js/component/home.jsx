import React, { useState } from "react";

//create your first component
// Comentario que debo borrar
const Home = () => {
	const[ inputValue, setinputValue ] = useState("");
	const[ toDos, settoDos ] = useState([]);

	return (
<div className="container">
	<h1>TODO LIST</h1>
		<ul>
			<li>
				<input 
				type="text" 
				onChange={(e) => setinputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						settoDos(toDos.concat([inputValue]));
						setinputValue("");
					}
				}}
				placeholder="Qué necesitas hacer?"></input>
			</li>
			
			{toDos.map((item, index) => (
					<li>
						{item}{" "} 
						<i 
							className="fas fa-solid fa-x" 
							onClick={() =>
							settoDos(
								toDos.filter(
									(t, currentIndex) => 
										index != currentIndex
										)
									)
								}></i> 
				</li>
			))}
		</ul>
	<div>{toDos.length} Tareas</div>
	
	</div>	
);
};

export default Home;
