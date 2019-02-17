// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
//   );
// ReactDOM.render(React.createElement("h1", null, "Hello, world!"), document.getElementById("root"));

// const data = (
//     <div >
//       <h1>Hello World</h1>
//       <p>Lets render this to the DOM</p>
//     </div>
   
//   );
//   ReactDOM.render(data,document.getElementById('name'));

  class ExampleComponent extends React.Component {
    render () {
      return(
        <div>
          <button {...this.props}>
            Click me!
          </button>
        </div>
      )
    }
  }
  
  class RenderComponent extends React.Component {
    clickHandler () {
      console.log('Click fired!')
    }
  
    render () {
      return(
        <ExampleComponent onClick={this.clickHandler.bind(this)} />
      )
    }
  }
  
  ReactDOM.render(
    <RenderComponent />, 
    document.getElementById('app')
    )
  