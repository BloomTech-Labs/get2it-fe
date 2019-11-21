import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import updateTask from '../../actions'

// buld task component and set up state
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
     // add tasklist to state
    this.state= {taskList:[]
    }
  }
  event

  // build function to add tasks to state
  createTaskList = event => {
    event.preventDefault();
    // pull tasks from props
    const arrList = this.props.userTasks;
    const list =[]
    var listItem;
    var spacer = "      ";
     // loop through each task and post them to state
    for (let i = 0; i < arrList.length;i++) {
      list.push(arrList[i].name)
    };
    console.log(list)
    this.setState({
      taskList: list
    })
  };

  // complete = event => {
  //   if(querySelector(input[type=checkbox]:checked)){
  //     upd()
  //   } else {
  //     check()
  //   }


    // render content to page
  render() {
    return (
      <div>
        <Form>
          <Button onClick={this.createTaskList} variant="primary" type="submit">
            <span>&#10003;</span>
          </Button>
          <Form.Text>TASKS</Form.Text>
        </Form>
        <div>
          {/* for each item on the state tasklist create a task link on the page */}
        <ul>
          {this.state.taskList.map((item, index) => (
            <li key={index}>
              <Form>
                <Form.Group controlId='formBasicCheckbox'>
                  <Form.Check onClick={this.complete} type='checkbox' />
                  <Form.Text>{item}</Form.Text>
                </Form.Group>
              </Form>
            </li>
            
          ))}
        </ul>
      </div>
    );
  }
}
// map state to props
const mapStateToProps = state => ({
  userData: state.userData,
  userTasks: state.userTasks
})
const mapDispatchToProps = {
  updateTask,
  getTASKS
 }
// export the Component
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
