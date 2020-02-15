import React from 'react';
import './List.css';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            item:'',
            list:[]
    } 
}   
updateInput(key, value) {
    this.setState({
        [key]: value
    })
}
addItem() {
    const item ={
        id: 1 + Math.random(),
        value: this.state.item.slice()
    };
    const list = [...this.state.list]
    list.push(item);

    this.setState({
        list,
        item: ''
    })
} 
deleteItem(id) {
    const list = [...this.state.list]

    const updateList = list.filter(item => item.id !==id)
    this.setState({
        list: updateList
    })
}

    render() {
        return(
            <div className='list'> 
               <div className='list_app'>
                    <input type='text'
                    className='inp'
                    placeholder='Enter'
                    value={this.state.item}
                    onChange={e => this.updateInput('item', e.target.value)}
                    />
                    <button className='btn' onClick={() => this.addItem()}>Add</button>
                    <ol>
                        {
                            this.state.list.map(item => {
                                return(
                                    <li key={item.id}>
                                        {item.value}
                                        <button className='btt' onClick={() => this.deleteItem(item.id)}>   
                                            x
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ol>
               </div>
            </div>
        )
    }
}
export default List