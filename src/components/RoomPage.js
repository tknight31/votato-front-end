import React from 'react'
import Room from './Room'
import { Link } from 'react-router-dom'

export default class RoomPage extends React.Component {

	constructor() {
		super()

		this.state = {
			rooms: []
	}
}

	getRoomKeys = () => {
		const roomKeys = this.props.suggestions.map(sugg => sugg["room_id"])
		 return roomKeys.filter((x, i, array) => array.indexOf(x) === i)
	}




	render(){
			if (Array.isArray(this.props.suggestions)) {
				return (
					<div className="room-page">
						<Link to={`/search/${Date.now()}`}>Create a Room</Link>
						{this.getRoomKeys().map((roomNum, index) => <Room key={index} roomKey={roomNum}/>)}
					</div>
					)
			} else {
				return (
					<div className="loader">
						<p>Loading</p>
					</div>
				)
			}
		}

}
