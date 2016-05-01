import React from 'react';
import Hello from './hello';
import Link from './link';

class Messages extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <Hello name='Magí' />
                <Link url='https://github.com/magi2c' caption='My github' color="red" />
            </div>
        )
    }
};
export default Messages;