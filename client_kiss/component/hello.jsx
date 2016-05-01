//Un componente React encapsula absolutamente todo
//La vista y su lógica inevitablemente tienen que ir acopladas
import React from 'react';

class Hello extends React.Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>;
    }
};

export default Hello;