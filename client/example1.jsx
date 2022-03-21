class HellowWorld extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        );
    }
};

const init = () => {
    ReactDOM.render(<HellowWorld/>, document.getElementById('app'));
};

window.onload = init;