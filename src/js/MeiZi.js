import React, {Component} from 'react';
import TimeUtil from '../utils/TimeUtil'
import '../css/pc.css'

import Masonry from 'react-masonry-component';
var masonryOptions = {
    transitionDuration: 0
};

class MeiZi extends Component {

    constructor() {
        super();
        this.state = {
            name: 'default',
            url: 'http://gank.io/api/data/福利/20/1',
            list: [],
            height:this.randomNum(200,400)
        }

    }

    randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1,10);
                break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                break;
            default:
                return 0;
                break;
        }
    }

    onImgClick(item){
        console.log(item.createdAt)
    }

    componentWillMount() {
        // loadData
        this.loadData()
    }

    render() {
        return (

            <Masonry
                className="image-element-class"
                elementType={'ul'}
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >

                {
                    this.state.list.map(item => {
                        return (

                            <li className="image-element-class">
                                <img src={item.url} onClick={this.onImgClick.bind(this,item)} style={{width:300,height:300}}/>
                            </li>
                        )
                    })
                }

            </Masonry>
        )
    }

    loadData() {

        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {

                if (!data.error) {
                    this.setState({
                        list: data.results

                    })
                }
                console.log(data.results)
            })
            .catch(e => console.log("error"))
    }

}

export default MeiZi;