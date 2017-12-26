import React, {Component} from 'react';

class Pinterest extends Component {

    constructor(props) {
        super(props);
        this.ajaxPull = this.ajaxPull.bind(this);
        this.state = {
            leftData: [],
            centerData: [],
            rightData: [],
            url: 'http://gank.io/api/data/福利/20/1'
        };
        this.ajax = 1;

    };

    //@decorateArmour
    componentWillMount() {
        this.loadData();
    }

    componentDidMount() {
        document.addEventListener('scroll', this.ajaxPull)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.ajaxPull);
    }

    ajaxData = () => {
        fetchData({reqUrl: '/zhanglei/common.json'})
            .then(result => {
            this.ajax = 1;

            result.data.pull.content.map(item => {
                const a = this.getMinContain();
                switch (a.className) {
                    case 'u1':
                        leftData.push(item);
                        break;
                    case 'u2':
                        centerData.push(item);
                        break;
                    case 'u3':
                        rightData.push(item);
                        break;
                    default:
                        return null;
                }
                this.setState({leftData, centerData, rightData});
            });
        });
    };

    loadData() {

        const {leftData, centerData, rightData} = this.state;
        this.ajax = 0;

        fetch(this.state.url)
            .then(response => response.json())
            .then(data => {
                this.ajax = 1;
                data.results.map()

            })
            .catch(e => console.log("error"))
    }

    //获取高度最低的一个
    getMinContain = () => {
        const {newPinterest} = this;
        const {childNodes} = newPinterest;
        let minData = childNodes[0];
        childNodes && childNodes.forEach(item => {
            if (item.offsetHeight < minData.offsetHeight) {
                minData = item
            }
        });
        return minData;
    };

    //滚动事件
    ajaxPull() {
        const height = window.innerHeight;
        const scroll = document.body.scrollTop;
        const domHeight = document.body.scrollHeight;
        if (scroll + height > domHeight - 132 && this.ajax) {
            this.ajaxData();
        }
    };

    mapListToHtml = (data) => {
        const arr = ['fadeIn', 'rotateIn', 'zoomIn'];
        const animate = parseInt(Math.random() * 3);
        return data.map((item, index) => <li
            key={index}>
            <img style={{WebkitAnimation: `${arr[animate]} 0.8s ease-in-out 1 0s alternate forwards`}}
                 src={`/img/${item.url}`} alt={item.name}/>
        </li>);
    };

    render() {
        const {leftData, centerData, rightData} = this.state;
        return (<div ref={ref => this.newPinterest = ref} className="newPinterest clearfix">
            <ul ref={ref => this.leftCol = ref} className="u1">
                {!!leftData && this.mapListToHtml(leftData)}
            </ul>
            <ul ref={ref => this.centerCol = ref} className="u2">
                {!!centerData && this.mapListToHtml(centerData)}
            </ul>
            <ul ref={ref => this.rightCol = ref} className="u3">
                {!!rightData && this.mapListToHtml(rightData)}
            </ul>
        </div>)
    }
}

export default Pinterest;