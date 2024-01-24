import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ openModal, setOpenModal }) {
    const theme = useMantineTheme();

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
                    <input type="text" className="info-input" name="firstname" placeholder="First Name" />
                    <input type="text" className="info-input" name="lastname" placeholder="Last Name" />
                </div>
                <div>
                    <input type="text" className="info-input" name="worksAt" placeholder="Works at" />
                </div>
                <div>
                    <input type="text" className="info-input" name="linesIn" placeholder="Lives in" />
                    <input type="text" className="info-input" name="country" placeholder="Country" />
                </div>
                <div>
                    <input type="text" className="info-input" name="relationshipStatus" placeholder="Relationship Status" />
                </div>
                <div>
                    Profile Image
                    <input type="file" name="profile-image" />
                    Cover Image
                    <input type="file" name="cover-image" />
                </div>
                <button className="button info-button">Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal;