'use strict';

var CheckBox = React.createClass({
    getInitialState: function(){
     return{checked:true}
    },
    boxChanged: function(){
        this.setState({checked:!this.state.checked})
    },
    render: function () {
    var msg = 'checked' ;
    if(this.state.checked){
    }
    else{
    msg = 'unchecked';
    }
    return(
    <div>      
    <input type="CheckBox" onChange={this.boxChanged} defaultChecked={this.state.checked} />
    <h3>CheckBox is {msg}</h3>
    </div>
);
}
});
ReactDOM.render(<CheckBox /> , document.getElementById('container'));
