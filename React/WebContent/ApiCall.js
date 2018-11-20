import React from 'react';
class MyComponent extends React.Component {


    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        emp: []
      };
    }
  
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              emp: result.emp
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, emp } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {emp.map(emp => (
              <li key={emp.name}>
                {emp.name} {emp.emp}
              </li>
            ))}
          </ul>
        );
      }
    }
  }
  export default MyComponent;