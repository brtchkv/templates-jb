import {useContext, useRef} from 'react';
import {useTranslation} from "react-i18next";
import {userContext} from "../../../settings/user/userContext";
import {ButtonStyled, WrapperStyled} from "./style/profile"
import * as API from "../../../service/api/serviceAPI";
import {Toast} from "primereact/toast";
import {FileWithPath} from "file-selector";

const StudentCourses = () => {
    const {t} = useTranslation();
    const toast = useRef(null);
    const context = useContext(userContext);

    const showErrorToast = (error: {message: string}) => {
        // @ts-ignore
        toast.current.show({
            severity: 'error',
            summary: `${t("profile.error")}`,
            detail: error.message
        })
    }

    const showSuccessToast = () => {
        // @ts-ignore
        toast.current.show({
            severity: 'info',
            summary: `${t("profile.success")}`,
            detail: `${t("profile.fileUploaded")}`
        });
    }

    const sendFile = (props: {files: Array<FileWithPath>}) => {
        API.uploadCSV(props.files[0], context)
            .then(
                () => {
                    showSuccessToast();
                },
                (error) => {
                    showErrorToast(error);
                });
    };

    return (
        <>
            <Toast ref={toast}/>
            <WrapperStyled className="container px-md-0">
                <h2>{t("profile.userRole")} {context.user.role}</h2>
                <div>
                    <h5 className="pr-3 pb-3">{t("profile.uploadLabel")}</h5>
                    <ButtonStyled mode="basic" name="csv" uploadHandler={sendFile}
                                  customUpload chooseLabel={t("profile.upload")}/>
                </div>
            </WrapperStyled>
        </>
    );
}

export default StudentCourses;
