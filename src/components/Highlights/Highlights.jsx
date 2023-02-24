import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import {
    Wrapper
} from './styles'
import { connect } from 'react-redux'

function Highlights(props) {
    const {
        groups
    } = props
    
    return groups && groups.length ? <Wrapper id='home-highlights'>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showThumbs={false}
            showArrows={false}
            swipeable={true}
        >
            {groups && groups.map((mappedItem, index) => {
                const {
                    highlights,
                } = mappedItem

                const groupId = index
                return highlights && highlights.map((acc, index) => {
                    const key = `highlights-item-${index}-${groupId}`
                    return <img key={key} src={acc.image} alt={key}></img>
                })

            })}
        </Carousel>
    </Wrapper> : null
}
const mapStateToProps = (state) => {
    return {
        groups: state.ui.groups
    };
}

export default connect(
    mapStateToProps, {   
})(Highlights);