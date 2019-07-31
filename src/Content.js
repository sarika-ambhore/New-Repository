import React from 'react';

export default class Content extends React.Component {
    // render() {
    //    return (
    //     //   <div>
    //     //      <h2>Content</h2>
    //     //      <p>The content text!!!</p>
    //     //   </div>

    //     <div>
    //         <h2>{this.props.contentProp}</h2>
    //      </div>
    //    );
    // }

    // componentWillMount() {
    //     console.log('Component WILL MOUNT!')
    //  }
    //  componentDidMount() {
    //     console.log('Component DID MOUNT!')
    //  }
    //  componentWillReceiveProps(newProps) {    
    //     console.log('Component WILL RECIEVE PROPS!')
    //  }
    //  shouldComponentUpdate(newProps, newState) {
    //     return true;
    //  }
    //  componentWillUpdate(nextProps, nextState) {
    //     console.log('Component WILL UPDATE!');
    //  }
    //  componentDidUpdate(prevProps, prevState) {
    //     console.log('Component DID UPDATE!')
    //  }
    //  componentWillUnmount() {
    //     console.log('Component WILL UNMOUNT!')
    //  }
    //  render() {
    //     return (
    //        <div>
    //           <h3>{this.props.myNumber}</h3>
    //        </div>
    //     );
    //  }


    // render() {
    //     return (
    //        <div>
    //           <input type = "text" value = {this.props.myDataProp} 
    //              onChange = {this.props.updateStateProp} />
    //           <h3>{this.props.myDataProp}</h3>
    //        </div>
    //     );
    //  }

    // render() {
    //     return (
    //        <div>
    //           <button onClick = {this.props.updateStateProp}>CLICK</button>
    //           <h3>{this.props.myDataProp}</h3>
    //        </div>
    //     );
    //  }


    render() {
        return (
         //   <div>
         //      <div>{this.props.componentData.component}</div>
         //      <div>{this.props.componentData.id}</div>
         //   </div>

         <div>
         <h1>Content...</h1>
      </div>
        );
     }
 }