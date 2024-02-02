import React, { useRef, useState } from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';

const PostShare = () => {

    const [image, setImage] = useState(null)

    const imageRef = useRef()
    const desc = useRef()

    const { user } = useSelector((state) => state.authReducer.authData)
    const loading = useSelector((state) => state.postReducer.uploading)

    const dispatch = useDispatch()

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage(img)
        }
    }

    const handleShare = (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if (image) {
            const data = new FormData()
            const fileName = Date.now() + image.name
            data.append("name", fileName)
            data.append("file", image)
            newPost.image = fileName

            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(uploadPost(newPost))
        resetShare()
    }

    const resetShare = () => {
        setImage(null)
        desc.current.value = ""
    }

    return (
        <div className='PostShare'>
            <img src={ProfileImg} alt='' />
            <div>
                <input type='text' placeholder="What's happening" ref={desc} required />
                <div className="post-options">
                    <div className="option" style={{ color: "var(--photo)" }} onClick={() => imageRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--schedule)" }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className='button ps-button' onClick={handleShare} disabled={loading}>
                        {loading ? "Uploading..." : "Share"}
                    </button>
                    <div style={{ display: "none" }}>
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image &&
                    <div className="preview-image">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                }
            </div>
        </div>
    )
}

export default PostShare
