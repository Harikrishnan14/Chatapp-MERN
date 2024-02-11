import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

function ProfileModal({ openModal, setOpenModal, data }) {
    const theme = useMantineTheme();

    const { password, ...other } = data;

    const [formData, setFormData] = useState(other)
    const [profileImg, setProfileImg] = useState(null)
    const [coverImg, setCoverImg] = useState(null)

    const dispath = useDispatch()

    const params = useParams()

    const { user } = useSelector((state) => state.authReducer.authData)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            e.target.name === "profile-image" ? setProfileImg(img) : setCoverImg(img)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let UserData = formData
        if (profileImg) {
            const data = new FormData()
            const filename = Date.now() + profileImg.name
            data.append("name", filename)
            data.append("file", profileImg)
            UserData.profilePicture = filename
            try {
                dispath(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
        if (coverImg) {
            const data = new FormData()
            const filename = Date.now() + coverImg.name
            data.append("name", filename)
            data.append("file", coverImg)
            UserData.coverPicture = filename
            try {
                dispath(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
        dispath(updateUser(params.id, UserData))
        setOpenModal(false)
    }

    return (
        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size="55%"
            opened={openModal}
            onClose={() => setOpenModal(false)}
        >
            <form className="info-form">
                <h3>Your info</h3>
                <div>
                    <input type="text" className="info-input" name="firstname" placeholder="First Name" onChange={handleChange} value={formData.firstname} />
                    <input type="text" className="info-input" name="lastname" placeholder="Last Name" onChange={handleChange} value={formData.lastname} />
                </div>
                <div>
                    <input type="text" className="info-input" name="worksAt" placeholder="Works at" onChange={handleChange} value={formData.worksAt} />
                </div>
                <div>
                    <input type="text" className="info-input" name="livesIn" placeholder="Lives in" onChange={handleChange} value={formData.livesIn} />
                    <input type="text" className="info-input" name="country" placeholder="Country" onChange={handleChange} value={formData.country} />
                </div>
                <div>
                    <input type="text" className="info-input" name="relationshipStatus" placeholder="Relationship Status" onChange={handleChange} value={formData.relationshipStatus} />
                </div>
                <div>
                    Profile Image
                    <input type="file" name="profile-image" onChange={onImageChange} />
                    Cover Image
                    <input type="file" name="cover-image" onChange={onImageChange} />
                </div>
                <button className="button info-button" onClick={handleSubmit}>Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal;