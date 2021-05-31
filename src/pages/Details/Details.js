import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectCurrentItem } from '../../reducers/searchResults/searchResultSlice'
import { fetchMovieCredits, fetchPersonCredits, fetchTVCredits, fetchPersonImage, fetchTVShowImage, fetchMovieImage, configureAPI } from '../../api/api'


const Details = () => {
    const { id } = useParams()
    const history = useHistory()
    const [itemDetails, setItemDetails] = useState({})
    const [imageDetails, setImageDetails] = useState({})
    const [isActor, setIsActor] = useState(false)
    const currentItem = useSelector(selectCurrentItem)
    const qs = String(id).split('&')
    const qsCategory = qs[1].split('=')[1]

    useEffect(() => {
        const fetchDetails = async (category) => {
            let details, image
            let newDetailsObj = {}
            const config = await configureAPI()
            setImageDetails(config)

            if (currentItem && currentItem.id) {
                if (category === 'people') {
                    details = await fetchPersonCredits(currentItem.id)
                    image = await fetchPersonImage(currentItem.id)
                } else if (category === 'tvShows') {
                    details = await fetchTVCredits(currentItem.id)
                    image = await fetchTVShowImage(currentItem.id)
                } else {
                    details = await fetchMovieCredits(currentItem.id)
                    image = await fetchTVShowImage(currentItem.id)
                }
                newDetailsObj = {
                    details,
                    image
                }
                setItemDetails(newDetailsObj)
            }
        }
        fetchDetails(qsCategory)
        if (qsCategory === 'people') {
            setIsActor(true)
        }
    }, [currentItem, qsCategory, isActor])

    const renderImg = () => {
        let imgPath, imgSrc
        if (Object.keys(imageDetails).length > 0 && Object.keys(currentItem).length > 0) {
            if (isActor) {
                imgPath = currentItem.profile_path !== null ? currentItem.profile_path.split('/')[1] : ''
                if (imgPath !== null && imgPath !== '') {
                    imgSrc = imageDetails.images.base_url + imageDetails.images.profile_sizes[1] + '/' + imgPath
                    return <img src={imgSrc} alt={`poster of ${currentItem.name}`} />
                }
            } else {
                imgPath = currentItem.poster_path !== null ? currentItem.poster_path.split('/')[1] : ''
                if (imgPath !== null && imgPath !== '') {
                    imgSrc = imageDetails.images.base_url + imageDetails.images.profile_sizes[1] + '/' + imgPath
                    return <img src={imgSrc} alt={`poster of ${currentItem.name}`} />
                }
            }
        }
    }

    const renderCast = () => {
        if (Object.keys(itemDetails).length > 0) {
            return itemDetails.details.cast.map((castMember, index) => {
                const imgPath = castMember.profile_path !== null ? castMember.profile_path.split('/')[1] : ''
                const imgSrc = imageDetails.images.base_url + imageDetails.images.profile_sizes[1] + '/' + imgPath
                return (
                    <div key={index}>
                        {imgPath !== '' ? <img alt={castMember.name} src={imgSrc} /> : null}
                        <h4>{castMember.name}</h4>
                        {castMember.character !== "" ? <span>as {castMember.character}</span> : null}
                    </div>
                )
            })
        }
    }

    const renderKnownForCast = () => {
        if (Object.keys(itemDetails).length > 0) {
            return itemDetails.details.cast.map((castMember, index) => {
                const imgPath = castMember.poster_path !== null ? castMember.poster_path.split('/')[1] : ''
                const imgSrc = imageDetails.images.base_url + imageDetails.images.profile_sizes[1] + '/' + imgPath
                return (
                    <div key={index}>
                        {imgPath !== '' ? <img alt={castMember.title} src={imgSrc} /> : null}
                        <h4>{castMember.title}</h4>
                        <h5>{castMember.name}</h5>
                        {castMember.character !== "" ? <span>as {castMember.character}</span> : null}
                    </div>
                )
            })
        }
    }

    const renderKnownForCrew = () => {
        if (Object.keys(itemDetails).length > 0) {
            return itemDetails.details.crew.map((crewMember, index) => {
                const imgPath = crewMember.poster_path !== null ? crewMember.poster_path.split('/')[1] : ''
                const imgSrc = imageDetails.images.base_url + imageDetails.images.profile_sizes[1] + '/' + imgPath
                return (
                    <div key={index}>
                        {imgPath !== '' ? <img alt={crewMember.name} src={imgSrc} /> : null}
                        <h4>{crewMember.title}</h4>
                        <h4>{crewMember.job}</h4>
                        <span>{crewMember.release_date}</span>
                    </div>
                )
            })
        }
    }

    const renderMoreInfoSection = () => {
        if (isActor) {
            return (
                <div>
                    <div>
                        <h3>Cast</h3>
                        {renderKnownForCast()}
                    </div>
                    <div>
                        <h3>Production</h3>
                        {renderKnownForCrew()}
                    </div>

                </div>
            )
        }
        return (
            <>
                <h3>Cast:</h3>
                {renderCast()}
            </>
        )
    }

    return (
        <div>
            <div>
                <a href="#goBack" onClick={() => history.goBack()}>Back</a>
            </div>
            <div>
                <h1>{currentItem.name}</h1>
                {isActor ? <span>{currentItem.known_for_department}</span> : ''}
                {Object.keys(imageDetails).length > 0 ? renderImg() : null}
                {currentItem.overview !== "" ? <p>{currentItem.overview}</p> : null}
            </div>
            <div>
                {renderMoreInfoSection()}
            </div>
        </div>
    )

}

export default Details
