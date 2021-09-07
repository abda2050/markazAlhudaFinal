import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datas from '../../../data/blog/recent-post.json';
import { Styles } from '../styles/recentPost.js';

class RecentPost extends Component {
    render() {
        return (
            <Styles>
                {/* Recent Post */}
                <div className="recent-blog">
                    <h5>M A R K A Z AL HUDA</h5>
                    <div className="blog-items">
                        {
                            Datas.map((data, i) => (

                                <div className="item-box d-flex" key={i}>
                                   
                                    
                                </div>

                            ))
                        }
                    </div>
                </div>
            </Styles>
        )
    }
} 

export default RecentPost
