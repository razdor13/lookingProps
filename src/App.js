import './App.css';



function WhoAmI ({name,surname,link,order: { digit } = {}}) { //component never change his props
    return (
        <div>
            <h1>my neame is {name()}, {digit}, surname - {surname} </h1> 
            <a href={link}>my profile</a>
        </div>
    )
}


function App(){
	return (
		<div className="App">
            <WhoAmI name={()=> {return 'Vill'}} order={{ digit: 10 }}  surname='Tsymmer' link= 'mem' />
            <WhoAmI name={()=> {return 'Vill'}} order={{ digit: 10 }} surname='xxx' link= 'e' />
		</div>
	);
}

export default App;
