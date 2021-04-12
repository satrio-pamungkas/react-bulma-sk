import React from 'react';
import ReactDOM from 'react-dom';
import FormBox from './App';

class MainPage extends React.Component {
    render() {
        return (
            <FormBox/>
        );
    }
}

ReactDOM.render(
    <MainPage/>,
    document.getElementById('root')
);