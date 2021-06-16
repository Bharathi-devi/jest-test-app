import Header from './component/header';
import Headline from './component/headline'
import './app.scss'
function App() {

  const tempArr=[{
  fName:'Jhon',
  lName:'helan',
  email:'jhon.helan@gmail.com',
  age: 20,
  onlineStatus:true
  }];

  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline header="posts" desc="Click the button to render posts" tempArr={tempArr}/>
      </section>
    </div>
  );
}


export default App;
