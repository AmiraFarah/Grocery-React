

//parent App component
class App extends React.Component {

state={    // state object has properties that place the form's new values 
    item:'',
    brand:'',
    unit:'',
    quantity:'',
    isPurchased:'false',
 groc:list 
}
handleChange=(eventt)=>{            // function whenever we put new value it handles the change 
    console.log(eventt.target.value)
    // state is object so the argument should be between {}
    this.setState({[eventt.target.id]:eventt.target.value}) //[] necessary it holdes all values from the form 
}

handleSubmit=(eventt)=>{
    eventt.preventDefault()
    const newItem={
        item:this.state.item,
        brand: this.state.brand,
        unit: this.state.unit,
        quantity:this.state.quantity
    }
    console.log('new item',newItem)
   
    // //sort list by quantity from larger to smaller
    // and we can put sort((a,b)).... in map too  
this.setState({
    groc:[newItem,...this.state.groc].sort((a, b) => (a.quantity < b.quantity? 1 : -1))

})
}
togglePurchased=()=>{
this.setState({
    isPurchased:!(this.state.isPurchased)
})
}
    render() {
        return (
            <div>
                <h1>My Grocery App</h1>
                <h2>Add New Item</h2>
                 <form  className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="item">Item:</label>
                <input type="text" value={this.state.item} 
                 onChange={this.handleChange} id="item"/>
                 <label htmlFor="brand">Brand</label>
                 <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"/>
                 <label htmlFor="unit">Unit</label>
                 <input type="text"  value={this.state.unit} onChange={this.handleChange} id="unit"/>
                 <label htmlFor="quantity">Quantity</label>
                 <input type="number" id="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                 <input type="submit"  value="submit"/>

                </form>
 
<hr />
<h1>  All items rendered</h1>
            <ul className='dd'>

  {this.state.groc.map(ele =>( (<li className="list-box"> 
  Brand : {ele.brand} <hr/>Item : {ele.item} <hr/>Unit:{ele.unit} <hr/>Quantity : {ele.quantity}</li>)))}
                

</ul>
<hr />
 <h1>  Items rendered conditionally</h1>
<ul className='dd'>

{this.state.groc.map(ele =>((ele.isPurchased)? (<li className="list-box"> 
Brand : {ele.brand} <hr/>Item : {ele.item} <hr/>Unit:{ele.unit} <hr/>Quantity : {ele.quantity}</li>): <h2>this item has been purchased</h2>))}
              

</ul>
<button onClick={this.togglePurchased}> remove</button>
{!(this.state.isPurchased)? <h3>false</h3> : <h3> true</h3>}

        </div>

        )
    }
}
// rendering parent component
ReactDOM.render(<App />, document.querySelector('.container'));
