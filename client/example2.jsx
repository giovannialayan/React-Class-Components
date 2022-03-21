class HelloUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
        };
    }

    handleNameChange = (e) => {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div>
                <p>hello {this.state.username}</p>
                <label>change name: </label>
                <input type="text" value={this.state.username} onChange={this.handleNameChange}/>
            </div>
        );
    }
}

const init = () => {
    ReactDOM.render(<HelloUser username='name'/>, document.getElementById('app'));
}

window.onload = init;