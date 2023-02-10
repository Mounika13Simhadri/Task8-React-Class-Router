import React,{Component} from 'react'
import Axios from "axios"


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={products:null}
  }
  componentDidMount() {
    Axios
      .get("https://fakestoreapi.com/products")
      .then(res => this.setState({ products: res.data }));
  }
 
  render()
   {
    const {products}=this.state;

    return(
    <div className="dashboard">
  
      <label className="header">
        DASHBOARD PAGE
      </label>
      <div className="page">
      {products !== null&&products.map((p,index) =>{
      return(
      <div className="page" key={p.id}>
 
          <div className="display">
            <div className="card">
              <div> <img alt="img"src={p.image}/></div>
            </div>
            <div className="content">
              <div> {p.title}</div>
              <div> {p.price}$</div>
              <div> {p.rating.rate}*</div>
            </div>
        </div>
      </div>

    )
    })}
    </div>
    </div>)
    
    
}
}
 
    


export default Dashboard

