import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {
    return (
        
        <div class="flip-card card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="https://images.unsplash.com/photo-1569073120512-05362a6b92e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Avatar"></img>
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
          </div>
        </div>
      </div>
     
      
        
    );
  }
}

export default ProjectCard;