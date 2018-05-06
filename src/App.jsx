import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon,} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    search() {
        console.log('this state ', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`; //using template string
        var accessToken = 'BQAtsFmvdP0tH0DzIuSVGg-Zxdpze3iG_uEgqd6S7JojJOF-PyRwz_7JCaWW20JVinBVAp00gwtoluuutNyVsXh6L2g1TZu3FQwjK2KEf3Xa79FyPSNA7t9UB0tCc2EWQLATH8r4aBKyT6YY6YjIWTj3Ia1rADtLgIK2Zvnnp3puRY7Xiw&refresh_token=AQAdRTlM3O2TXxSzCotfqTMHNs7I1skAApt5CGG52Tml8WU5mxK8BSORKiR4xBaQTO_IQ_A8xTeRuN8ePt9qlnl1sBumM0c8-RN-5qhiVZFdpddSDpL2H5Qfbi0e7_Q4oI0';
        var myHeaders = new Headers();
        var myOptions = {
        method: 'GET',
        headers:  {
            'Authorization': 'Bearer ' + accessToken
        },
        mode: 'cors',
        cache: 'default'
        };
        fetch(FETCH_URL, myOptions )
        .then(response => response.json())
        .then(json => console.log(json))
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Music master from App</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="search from an artist..."
                            value={this.state.query}
                            onChange={event => {this.setState({query: event.target.value})}}
                            // search when Enter key is pressed
                            onKeyPress={
                                event => {
                                    return event.key === 'Enter' ? this.search() : ''
                                }
                            }
                    />
                    <InputGroup.Addon onClick={() => this.search()}>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;