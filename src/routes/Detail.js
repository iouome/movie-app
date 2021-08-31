import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // 유저가 /detail url로 접근했을때, home으로 리다이렉트
        console.log('state', location.state);
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return (
                <div className="detail">
                    <span className="detail__title">{location.state.title}</span>
                    <img src={location.state.poster} alt={location.state.title} />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;
