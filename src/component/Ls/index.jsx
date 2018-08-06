import React from 'react';
import './List.css'
import {fetchRandomData} from '../../services.js'
import {
    Link,
  }   from 'react-router-dom';

class Ls extends React.Component{
    constructor(){
        super();
        this.state = {
          datas : [],
          count : 1,
          number : 7,
          total : 10,
        };
        this.changePage = this.changePage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prev = this.nextPage.bind(this);
      }
      componentDidMount(){
        this.getData();
      }
      getData(){
        fetchRandomData({count : this.state.count,number : this.state.number})
        .then((res)=>{
          const datas = res.data.map((item) => {
            return item;
          })
          this.setState({
            datas,
          })
        })      
      }
      changePage(index){
            this.setState({
                count : index+1
            })
            setTimeout(() => {
                this.getData();   
            }, 0);
      }
      prevPage(){
          if(this.state.count === 1){
              return
          }else{
            this.setState({
                count : this.state.count-1
            })
            setTimeout(() => {
              this.getData();   
          }, 0);
          }
    }
      nextPage(){
          if(this.state.count === 10){
              return
          }else{
            this.setState({
                count : this.state.count+1
            })
            setTimeout(() => {
              this.getData();   
          }, 0);
          }   
      }
    render (){
        if(!this.state.datas && this.state.datas.length <= 0){
            return (
                <div>暂无数据</div>
            );
        }
        return (
            <div className="ListHeader">
            {
                this.state.datas.map((item)=>{
                    return (
                        <div key={item.id} className="List">
                            <img src={item.author.avatar_url} alt=""/>
                            <span className="list1">{item.reply_count}</span>
                            <span className="list2">/</span>
                            <span className="list3">{item.visit_count}</span>
                            <span className="list4">{item.top === true ? '置顶' : ''}</span>
                            <span className="title"><Link to={`/detail/${item.id}`}>{item.title}</Link></span>  
                        </div>
                    );
                })
            }
                    
                <div className="page-content">
                <button onClick={() => this.prevPage()}>上一篇</button>
                { 
                    (Array.from({length: this.state.total})).map((number,index)=>{
                        return (
                            <span className='page' key={index} onClick={() => this.changePage(index)}><Link to={`/list/${index+1}`}>{index+1}</Link></span>
                        )          
                    })
                }
                <button onClick={() => this.nextPage()}>下一篇</button>
                </div>   
            </div>
        )
    }
}

export default Ls;