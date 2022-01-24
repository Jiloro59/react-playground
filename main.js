//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// const helloWorld = <h1>Hello world!</h1>;
// const title = "mon super titre";
// const firstName = "Rémi";

// let styleObject = {
//     color: "red"
// };

// const showBracketsPower = <section title = {title} style ={styleObject}>
//     Au revoir
// </section>

// ReactDOM.render(showBracketsPower, document.querySelector('#app'));

const lastName = "joly";
const firstName = "rémi";

const element = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span class="red-text">{lastName.toUpperCase()}</span></h1>



ReactDOM.render(element, document.querySelector('#app'));
