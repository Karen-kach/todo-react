import React from 'react';
import './List.css';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items:[]
    } 
    this.addItems = this.addItems.bind(this)
}
    addItems (e) {
        e.preventdefault();
    }    

    render() {
        return(
            <div className='list'> 
               <div className='list_app'>
                   <form onSubmit={this.addItems}>
                       <input type='text'
                       placeholder='Enter'
                       />
                       <button type='submit'>Add</button>
                   </form>
               </div>
            </div>
        )
    }
}
export default List