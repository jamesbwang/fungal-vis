import React, { Component } from 'react';
import {DropdownMultiple, Dropdown} from 'reactjs-dropdown-component';
import ReactDOM from 'react-dom';
import './App.css';
import FastaForm from'./FastaForm'
import FileUploadField from './FileUpload';

const textElement = <FastaForm/>
const fileUpload = <FileUploadField/>
class NavBar extends Component {
    constructor(){
        super()
        this.state = {
          file: [
            {
              id: 0,
              title: 'File Upload',
              selected: false,
              key: 'file'
            },
            {
              id: 1,
              title: 'Copy-Paste',
              selected: false,
              key: 'file'
            }
          ]
        }
      }
      parseSelection(temp){
        var found = temp.filter(function(temp){return temp.selected === true});
        switch(found[0]["id"]){
            case 0:
            ReactDOM.render(fileUpload, document.getElementById('inputField')); 
            break;       
            case 1:
            default:
           ReactDOM.render(textElement, document.getElementById('inputField'));        
        }
      }
    
      resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
          [key]: temp
        })
        this.parseSelection(temp);
      }
    
    render() {
      return (
        <div className="rows" >
            <div className="row">
            <Dropdown
                title="Upload"
                list={this.state.file}
                resetThenSet={this.resetThenSet}
                
            />
            </div>
            <div className="row_input" id="inputField">

            </div>
        </div>
      );
    }
  }
  
  export default NavBar;
  