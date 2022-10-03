import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName="Doe" 
        lastName="Jane" 
        inAge={45} 
        hairColor="Black"
      />
      <PersonCard 
        firstName="Smith" 
        lastName="John" 
        inAge={88} 
        hairColor="Brown"
      />
      <PersonCard 
        firstName="Fillmore" 
        lastName="Millard" 
        inAge={50} 
        hairColor="Brown"
      />
      <PersonCard 
        firstName="Smith" 
        lastName="Maria" 
        inAge={62} 
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
