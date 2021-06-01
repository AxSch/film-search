import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectCurrentItem } from '../../reducers/searchResults/searchResultSlice'
import { fetchMovieCredits, fetchPersonCredits, fetchTVCredits, fetchPersonImage, fetchTVShowImage, fetchMovieImage, configureAPI } from '../../api/api'
import { Container } from '../Search/Search.styled';
import {
    DetailHeaderSection,
    DetailBackNav,
    DetailsKnownFor,
    DetailCastCrew,
    DetailsImage,
    DetailsImageSection,
    DetailsOverviewSection
} from './Details.styled';


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
                    return <DetailsImage src={imgSrc} alt={`poster of ${currentItem.name}`} />
                }
            } else {
                imgPath = currentItem.poster_path !== null ? currentItem.poster_path.split('/')[1] : ''
                if (imgPath !== null && imgPath !== '') {
                    imgSrc = imageDetails.images.base_url + imageDetails.images.profile_sizes[1] + '/' + imgPath
                    return <DetailsImage src={imgSrc} alt={`poster of ${currentItem.name}`} />
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
                    <DetailsKnownFor key={index}>
                        <div>
                            {imgPath !== '' ? <img alt={castMember.name} src={imgSrc} /> : null}
                            <h4>{castMember.name}</h4>
                            {castMember.character !== "" ? <span>as {castMember.character}</span> : null}
                        </div>
                    </DetailsKnownFor>
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
                    <DetailsKnownFor key={index}>
                        {imgPath !== '' ? <img alt={castMember.title} src={imgSrc} /> : null}
                        <div>
                            <h4>{castMember.title}</h4>
                            {castMember.character !== "" ? <span>as {castMember.character}</span> : null}
                        </div>
                    </DetailsKnownFor>
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
                    <DetailsKnownFor key={index}>
                        {imgPath !== '' ? <img alt={crewMember.name} src={imgSrc} /> : null}
                        <div>
                            <h4>{crewMember.title}</h4>
                            <p>Role: {crewMember.job}</p>
                            <span>Released: {crewMember.release_date}</span>
                        </div>
                    </DetailsKnownFor>
                )
            })
        }
    }

    const renderMoreInfoSection = () => {
        if (isActor) {
            return (
                <>
                    <h3>Cast</h3>
                    <DetailCastCrew>
                        {renderKnownForCast()}
                    </DetailCastCrew>
                    <h3>Production</h3>
                    <DetailCastCrew>
                        {renderKnownForCrew()}
                    </DetailCastCrew>

                </>
            )
        }
        return (
            <>
                <h3>Cast:</h3>
                <DetailCastCrew>
                    {renderCast()}
                </DetailCastCrew>
            </>
        )
    }

    return (
        <Container>
            <DetailBackNav>
                <a href="#goBack" onClick={() => history.goBack()}>Back</a>
            </DetailBackNav>
            <DetailHeaderSection>
                <DetailsImageSection>
                    {Object.keys(imageDetails).length > 0 ? renderImg() : null}
                </DetailsImageSection>
                <DetailsOverviewSection>
                    {isActor || qsCategory === 'tvShows' ? <h1>{currentItem.name}</h1> : <h1>{currentItem.title}</h1>}
                    {isActor ? <span>{currentItem.known_for_department}</span> : ''}
                    {currentItem.overview !== "" ? <p>{currentItem.overview}</p> : null}
                </DetailsOverviewSection>
            </DetailHeaderSection>
            <div>
                {renderMoreInfoSection()}
            </div>
        </Container>
    )

}

export default Details
