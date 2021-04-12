import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <div class="column has-text-centered">
                <input type="submit" value="Submit" class="button is-primary is-fullwidth"/>
            </div>
        );
    }
}

export default Button;