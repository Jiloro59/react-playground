//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// const firstName = 'rémi';
// const lastName = 'joly';


// // Solution sans bonus
// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;

// ReactDOM.render(helloWorld, document.querySelector('#app'));

function FirstName(props) {
    return <span>{props.name[0].toUpperCase() + props.name.slice(1)}</span>;
}

function LastName(props) {
    return <span class ="red-text">{props.name.toUpperCase()}</span>;
}

const element = <h1>Hello <FirstName name="rémi"/> <LastName name= "joly"/></h1>

ReactDOM.render(element, document.querySelector('#app'));
