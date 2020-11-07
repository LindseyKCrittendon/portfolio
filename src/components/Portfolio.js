import React, { Component } from 'react'
import ProjectCard from "./project/ProjectCard";
import './Portfolio.css'

class Portfolio extends Component {
    render() {
        return (
	<div class="container-main">
	    	<div class="section-content">
                	<h2>starting code<br />
                   	 	<small>some characters of stuff and things</small>
                	</h2>
                	<address>
                    		an address
                    		<br />500 Puppy Way
                	</address>
            	</div>
                <div class="container-cards">
                    
          <ProjectCard />
          <ProjectCard />
         
        </div>
	</div>
	
        );
    }
}

export default Portfolio