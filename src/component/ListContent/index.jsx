import React from 'react';
import {fetchRandomDataCon} from '../../services.js'
class ListContent extends React.Component{
    constructor(){
        super();
        this.state = {
            data : ''
        }
        this.goBack = this.goBack.bind(this);
    }
    goBack(){
        this.props.history.goBack()  
    }
    componentDidMount(){
        this.getContent();
      }
      getContent(){
        fetchRandomDataCon(this.props.match.params.id)
        .then((res)=>{
            const data = res.data.content;
          this.setState({
            data,
          })
        })
      }
    render(){
        return(
            <div>
                <button onClick={()=>{this.goBack()}}>返回上一级</button>
                <pre dangerouslySetInnerHTML={{ __html: this.state.data}} />
            </div>
        )
    }
}

export default ListContent;