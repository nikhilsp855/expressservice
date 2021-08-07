import React, { Component } from 'react'

export class PreviewImg extends Component {

    changeImg(){
        
        let newImg = this.inputRef.current.value;
        this.props.modifyImg(newImg)
    }

    
    imageHandler = (evt) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(evt.target.files[0])
      };

      state = {
          profileImg : null
      }

    render() {
        return (
            <div>
                {this.profileImg = this.props.data.previmg}
                <input type="file" name='Image-upload' id='inp-img' accept='/image/*.jpg' 
                onChange={this.imageHandler}  />
                <button onClick={()=>{this.props.data.updateImg(this.profileImg)}}>Change Image</button>
            </div>
        )
    }
}

export default PreviewImg
