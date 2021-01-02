import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location,history}=this.props;
        if(location.state===undefined){
            history.push("/");
        }
    }
    render(){
        const {location}=this.props;
        if(location.state){
            return (
            <div>
                 <img src ={location.state.poster}/>
                 <h3>{location.state.title}</h3>
                 <span>{location.state.year}</span>
                 <li>{location.state.genres}</li>
                 <p>{location.state.summary}</p>
            </div>
            );
        }else{
            return null;
        }
        
    }
}

export default Detail;