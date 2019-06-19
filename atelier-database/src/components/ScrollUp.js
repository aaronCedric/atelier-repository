import React, {Component} from 'react';

class ScrollUp extends Component {

    constructor() {
        super()
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll() {
        let scrollY = 0
        scrollY = window.scrollY
        if (scrollY >= 300) {
            document.getElementById('scrollToTop').classList.add('open')
        } else if (scrollY <= 300) {
            document.getElementById('scrollToTop').classList.remove('open')
        }
    }

    scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div id='scrollToTop' onClick={this.scrollToTop}>
                <a href="#">
                    ^
                </a>
            </div>
        )
    }
}

export default ScrollUp