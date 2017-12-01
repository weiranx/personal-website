import React, {Component} from 'react';
var axios = require('axios');

class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            title: "",
            instagramUsername: "weiranxiong",
            imgUrls: [],
            isLoading: false,
            currentlyShowing: "",
            imgMsg: []
        };

    }
    componentDidMount() {
        this.getImages()
    }
    getImages() {
        const imgUrlsArr = [], imgMsgArr = [];
        axios.get('https://www.instagram.com/'+this.state.instagramUsername+'/?__a=1')
            .then((res) => {
                const media = res.data.user.media.nodes;
                for (let i = 0; i < media.length; i++) {
                    imgUrlsArr.push(media[i]['display_src'])
                    imgMsgArr.push(media[i]['caption'])
                    this.setState({
                        imgUrls: imgUrlsArr,
                        imgMsg: imgMsgArr,
                        isLoading: false,
                        currentlyShowing: "Showing result for: "+res.data.user.username
                    });
                }
            }).catch((err) => {
            console.log("ERROR");
            this.setState({
                isLoading: false,
                currentlyShowing: "Error loading "+this.state.instagramUsername
            })
        });
    }
    handleOnValueChange = (evt) => {
        this.setState({
            instagramUsername: evt.target.value,
            isLoading: true
        })
        this.getImages()
    }
    render = () => {
        console.log(this.state.imgUrls);
        return (
            <div className="Main">
                <div className="container">
                    <h4>This is just a test tool for pulling data from Instagram</h4>
                    <form>
                        <div className="form-group">
                            <label for="instagram">Instagram Username</label>
                            <input onChange={this.handleOnValueChange} type="text" placeholder="username" defaultValue={this.state.instagramUsername} className="form-control instagram-username-search"/>
                            {this.state.isLoading ? <div class="spinner ">
                                <div class="rect1"></div>
                                <div class="rect2"></div>
                                <div class="rect3"></div>
                                <div class="rect4"></div>
                                <div class="rect5"></div>
                            </div> : null}
                        </div>

                    </form>
                    <p>{this.state.currentlyShowing}</p>
                    {this.state.imgUrls.map((imgUrl, index) => {
                        return (
                            <figure className="figure">
                               <img src={imgUrl} className="figure-img img-fluid rounded"/>
                                <figcaption class="figure-caption">{this.state.imgMsg[index]}</figcaption>
                            </figure>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Main;