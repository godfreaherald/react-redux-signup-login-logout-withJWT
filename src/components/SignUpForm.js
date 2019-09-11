import React , { Component } from 'react';

class SignUpForm extends Component {


     constructor(props){
         super(props);
         const initState =  {
             email :'',
             fullname : '',
             password :'',
             password2 :''

         }
         this.state = initState;
     }

         handleChange = e =>{
             const { name , value } = e.target;
            this.setState({ [ name ] : value});
          
         }

         handleSubmit = e =>{
             e.preventDefault();
   console.log(this.state)
           
          
         }



    render(){
        return(
            <div >
            <p>Register to HeraldOnline Mall</p>

            <form onSubmit ={this.handleSubmit}>
            <div className="form-group">
            <label className = "label-control">Email</label>
            <input 
               type ="text" 
               name ="email"
               className ="form-control"
               placeholder="Email"
               value ={this.state.email} onChange ={this.handleChange}/>
            </div>
            <div className="form-group">
           <label className = "label-control" >Full Name</label>
           <input type="text" 
            name ="fullname"
           className="form-control"  placeholder="Full Name"
           value ={this.state.fullname} onChange ={this.handleChange}/>
          </div>

           <div className="form-group">
           <label className = "label-control">Password</label>
           <input type="password" 
            name ="password"
           className="form-control"  placeholder="Password"
           value ={this.state.password} onChange ={this.handleChange}/>
          </div>
          <div className="form-group">
           <label className = "label-control">Confirm Password</label>
           <input type="password" 
            name ="password2"
           className="form-control"  placeholder="Confirm Password"
           value ={this.state.password2} onChange ={this.handleChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">Register</button>
            </div>
            
            </form>
            </div>
        )
    }
}

export default SignUpForm;


