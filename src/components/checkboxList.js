import React from 'react';

class CheckBoxList extends React.Component{
  render(){
    return(
      <div className="container">
          <ul>
            <li>
              <label> Play with some css and js codes
                <input type="checkbox" name="" value=""/>
                <span className='check'></span>
              </label>
            </li>
            <li>
              <label> Read new Javascript content
                <input type="checkbox" name="" value=""/>
                <span className='check'></span>
              </label>
            </li>
            <li>
              <label>  Finish Task
                <input type="checkbox" name="" value=""/>
                <span className='check'></span>
              </label>
            </li>
            <li>
              <label>  Finish contact list project
                <input type="checkbox" name="" value=""/>
                <span className='check'></span>
              </label>
            </li>
          </ul>
      </div>
    )
  }
}

export default CheckBoxList;
