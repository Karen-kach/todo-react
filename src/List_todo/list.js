import React from 'react';

class List extends React.Component {

    state= {
        items:'',
        text:''
    }
    handleSubmit (e) {
        e.preventDeafault();
        this.setState({
            text:e.target.value,
            items:true
        })
    }
    
    render() {
        console.log(this.state)
        return(
            <div>
             
            </div>
        )
    }
}
export default List