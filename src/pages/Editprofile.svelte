<script>
    import axios from "axios";
    import { base_url } from "common/properties.js";
    import { Banner } from "./comp/mypage";
    import { HorizenLine } from "common/comp/index.js";
    import { user } from "../common/store/common.store";
    import { _ } from "svelte-i18n";

    let userData;
    user.subscribe(async (value) => {
        userData = value;
    });

    let profilePreview = userData && userData.image ? userData.image : null;
    let imageFile;
    let coverImageFile;
    let reader = new FileReader();
    let profileInfo = {};

    const imageChanged = async (e) => {
        if (e.target.files.length) {
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                profilePreview = e.target.result;
            };
            imageFile = e.target.files[0];

            const formData = new FormData();
            formData.append("user_id", userData.id);
            formData.append("file", imageFile);

            const request = await axios.post(
                base_url + "api/account/editProfileImage",
                formData
            );
            if (request.data.result) {
                navigate(`mypage`, { replace: true });
            } else {
                alert("Check your info");
            }
        } else {
            profilePreview = "Fail to upload, please reupload file";
        }
    };

    const coverImageChanged = async (e) => {
        if (e.target.files.length) {
            reader.readAsDataURL(e.target.files[0]);
            coverImageFile = e.target.files[0];

            const formData = new FormData();
            formData.append("user_id", userData.id);
            formData.append("file", coverImageFile);

            const request = await axios.post(
                base_url + "api/account/editProfileBanner",
                formData
            );
            if (request.data.result) {
                navigate(`mypage`, { replace: true });
            } else {
                alert("Check your info");
            }
        } else {
            alert("Fail to upload, please reupload file");
        }
    };

    const handleChange = (e) => {
        profileInfo[e.target.name] = e.target.value;
    };

    async function editProfile() {
        const request = await axios.post(base_url + "api/account/editProfile", {
            ...profileInfo,
            user_id: userData.id,
        });
        if (request.data.result) {
            navigate(`mypage`, { replace: true });
        } else {
            alert("Check your info");
        }
    }
</script>

<Banner is_use_sns={false} />
<div class="flex justify-center">
    <div id="card" class="flex flex-col items-center justify-center">
        <p id="title">{$_("editprofile.editprofile")}</p>
        <div
            id="content"
            class="grid grid-cols-2 items-center justify-items-center"
            style="margin-top:80px; margin-bottom: 106px"
        >
            <div id="content-left" class="flex flex-col">
                <p id="content-left-title" style="margin-bottom:18px">
                    {$_("editprofile.enterdetails")}
                </p>
                <HorizenLine width={112} />
                <p class="input-label">{$_("editprofile.name")}</p>
                <input
                    name="name"
                    class="content-input"
                    placeholder="Full Name"
                    on:change={handleChange}
                />
                <p class="input-label">{$_("editprofile.username")}</p>
                <input
                    name="username"
                    class="content-input"
                    placeholder="@username"
                    on:change={handleChange}
                />
                <p class="input-label">{$_("editprofile.emailid")}</p>
                <input
                    name="email"
                    class="content-input flex justify-center"
                    placeholder="hello@emailid.com"
                    on:change={handleChange}
                />
                <button class="send-email flex justify-center items-center">
                    <p>{$_("editprofile.sendverificationemail")}</p>
                </button>
                <p class="input-label">{$_("editprofile.bio")}</p>
                <textarea
                    name="bio"
                    cols="40"
                    rows="10"
                    class="content-input-area flex justify-center"
                    placeholder="Tell us a bit about yourselt"
                    on:change={handleChange}
                />
                <p class="input-label">{$_("editprofile.editbanner")}</p>
                <div
                    id="edit-cover-image"
                    class="flex justify-center items-center"
                >
                    <input
                        class="hidden"
                        id="uploadPhoto"
                        name="uploadPhoto"
                        type="file"
                        on:change={(e) => {
                            if (e.target.files.length > 0) {
                                coverImageChanged(e);
                            }
                        }}
                    />
                    <label for={"uploadPhoto"} style="cursor:pointer;">
                        <div
                            class="upload_photo_button flex justify-center items-center"
                        >
                            <p>{$_("editprofile.uploadphoto")}</p>
                        </div>
                    </label>
                </div>
            </div>

            <div
                id="content-right"
                class="flex flex-col justify-center items-center"
            >
                <input
                    class="hidden"
                    id="upload"
                    name="upload"
                    type="file"
                    on:change={(e) => {
                        if (e.target.files.length > 0) {
                            imageChanged(e);
                        }
                    }}
                />
                <label for={"upload"} style="cursor:pointer;">
                    {#if profilePreview}
                        <img
                            src="resource/${profilePreview}.png"
                            alt="ExperimentalLogo"
                        />
                    {:else}
                        <img src="images/mypage/addimage.png" alt="addimage" />
                    {/if}
                </label>
                <p id="content-right-title">{$_("editprofile.editprofileimage")}</p>
                <div style="margin-bottom:22px">
                    <p id="content-right-sns-title" class="text-center">
                        {$_("editprofile.sociallinks")}
                    </p>
                    <HorizenLine width={112} />
                </div>
                <div
                    class="content-right-sns-content flex flex-col items-center justify-center"
                >
                    <div
                        style="margin-bottom:10px"
                        class="sns-input-container flex jusity-center items-center"
                    >
                        <div
                            class="img-container flex flex-col justify-center items-center"
                        >
                            <img src="images/instagram.png" alt="instagram" />
                        </div>
                        <input
                            name="instagram"
                            style="padding:0 0 0 16%;"
                            class="sns-input border-0 focus:outline-none w-full"
                            placeholder="Instagram Id"
                            on:change={handleChange}
                        />
                    </div>
                    <div
                        style="margin-bottom:10px"
                        class="sns-input-container flex jusity-center items-center"
                    >
                        <div
                            class="img-container flex flex-col justify-center items-center"
                        >
                            <img src="images/twitter.png" alt="twitter" />
                        </div>
                        <input
                            name="twitter"
                            style="padding:0 0 0 16%;"
                            class="sns-input border-0 focus:outline-none w-full"
                            placeholder="Twitter Username"
                            on:change={handleChange}
                        />
                    </div>
                    <div
                        style="margin-bottom:10px"
                        class="sns-input-container flex jusity-center items-center"
                    >
                        <div
                            class="img-container flex flex-col justify-center items-center"
                        >
                            <img
                                src="images/facebook.png"
                                alt="images/facebook.png"
                            />
                        </div>
                        <input
                            name="facebook"
                            style="padding:0 0 0 16%;"
                            class="sns-input border-0 focus:outline-none w-full"
                            placeholder="Facebook URL"
                            on:change={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>

        <button
            class="save flex justify-center items-center"
            on:click={editProfile}
        >
            <p>{$_("editprofile.save")}</p>
        </button>
    </div>
</div>

<style>
    #card {
        width: 70%;
        margin: 9% 15% 7% 15%;
        background: #ffffff;
        box-shadow: 0px 19px 70px rgba(80, 101, 173, 0.12);
        border-radius: 15px;
    }

    #title {
        width: 369px;
        height: 62px;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 62px;
        color: #000000;
        margin-top: 87px;
    }

    #content-left-title {
        width: 200px;
        height: 31px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        color: #000000;
    }

    .input-label {
        height: 23px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
        margin-top: 18px;
    }

    .content-input {
        width: 405px;
        height: 67px;
        background: #ffffff;
        border: 0.25px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 19px 70px rgba(80, 101, 173, 0.16);
        border-radius: 10px;
        margin-top: 18px;
        padding-left: 35px;
    }

    .content-input-area {
        width: 405px;
        height: 204px;
        background: #ffffff;
        border: 0.25px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 19px 70px rgba(80, 101, 173, 0.16);
        border-radius: 10px;
        padding-top: 22px;
        padding-left: 35px;
    }

    .send-email {
        width: 280px;
        height: 35px;
        background: #000000;
        border: 1px solid #292929;
        box-sizing: border-box;
        box-shadow: 0px 19px 36px rgba(87, 95, 121, 0.31);
        backdrop-filter: blur(265px);
        border-radius: 15px;
        margin-top: 16px;
    }

    .send-email p {
        width: 136px;
        height: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
    }

    #edit-cover-image {
        width: 405px;
        height: 127px;
        background: #ffffff;
        border: 0.25px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 19px 70px rgba(80, 101, 173, 0.16);
        border-radius: 10px;
    }

    .upload_photo_button {
        width: 347px;
        height: 58px;
        background-image: url(/images/Gradient.png);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
    }

    .upload_photo_button p {
        width: 121px;
        height: 19px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 23px;
        color: #ffffff;
    }

    #content-right-title {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        margin-top: 27px;
        margin-bottom: 60px;
    }

    #content-right-sns-title {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
    }

    .sns-input-container {
        width: 254px;
        height: 42px;
        border: 0.5px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 10px 35px rgba(80, 101, 173, 0.25);
        border-radius: 15px;
    }

    .img-container {
        width: 58px;
        height: 42px;
        background: #000000;
        border: 0.5px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 19px 35px rgba(80, 101, 173, 0.25);
        border-radius: 15px;
    }
    .save {
        width: 362px;
        height: 82px;
        background: #000000;
        box-shadow: 0px 19px 35px rgba(80, 101, 173, 0.25);
        border-radius: 15px;
        margin-bottom: 106px;
    }

    .save p {
        width: 155px;
        height: 27px;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 31px;
        color: #ffffff;
    }
</style>
