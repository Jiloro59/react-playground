// function UserGreeting(props) {
//     return <h1>Bienvenue !</h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Veuillez vous connecter</h1>;
//   }
//   function Greeting(props) {
//       const [isLoggedIn, setIsLoggedIn] = React.useState(false);

//       const handleLogIn = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(true);
//       }

//       const handleLogOut = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(false);
//       }

//     return(
//         <React.Fragment>
//             {isLoggedIn ? 
//             <React.Fragment>
//                 <UserGreeting />
//                 <button onClick={handleLogOut}>Se déconnecter</button>
//             </React.Fragment> : 
//             <React.Fragment>
//                 <GuestGreeting />
//                 <button onClick={handleLogIn}>Se connecter</button>
//             </React.Fragment> }
//         </React.Fragment>
//     )
//   }
  
//   ReactDOM.render(
//     <Greeting />,
//     document.querySelector('#app')
//   );

function App(props){

  const [state, setState] = React.useState({
    items: [],
    DataisLoaded: false
  });

  React.useEffect(() => {
    
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setState ({
                    items: json,
                    DataisLoaded: true
                });
            })
      
    }, []);
  const { items, DataisLoaded } = state;
    
        return (
    
    <React.Fragment>
      <React.Fragment> {!DataisLoaded &&
        <div>
          <h1> Petit problème de load </h1>
          </div>
          }
        </React.Fragment>
        <React.Fragment>
        <div className = "App">
          <h1> Récupération des noms, email, sociétés, numéros de téléphone et site internet : </h1> {
            items.map((item) => (
            <ol key = { item.id } >
              Name: { item.username },<br/>
              Email: { item.email },<br/>
              Society: { item.company.name},<br/>
              PhoneNumber: {item.phone},<br/>
              Website: {item.website}
              </ol>
            ))
          }
        </div>
      </React.Fragment>
    </React.Fragment>
    );
  }

ReactDOM.render(<App />, document.querySelector('#app'));