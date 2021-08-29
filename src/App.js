import './App.css';
import data from './recipies.json';
import Content from './components/Content';
import Title from './components/Title';

function App() {
    return (
        <div className="container-fluid" >
            <div className="row App-header" >
                <Title />
            </div>
            <Content data={data} />
        </div >
    );
}

export default App;