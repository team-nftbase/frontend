<script>
    import { Banner } from "./comp/mypage";
    import { HorizenLine } from "common/comp/index.js";
    import { user } from "../common/store/common.store";

    let userData;
        user.subscribe(async (value) => {
        userData = value;
    });

    const imageChanged = (e) => {
    if (e.target.files.length) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        preview = e.target.result;
      };
      imagefile = e.target.files[0];
    } else {
      preview = "Fail to upload, please reupload file";
    }
  };

</script>

<Banner is_use_sns={false} />
<div class="flex justify-center">
    <div id="card" class="flex flex-col items-center justify-center">
        <p id="title">Edit your profile</p>
        <div
            id="content"
            class="grid grid-cols-2 items-center justify-items-center"
            style="margin-top:80px; margin-bottom: 106px"
        >
            <div id="content-left" class="flex flex-col">
                <p id="content-left-title" style="margin-bottom:18px">
                    Enter your details
                </p>
                <HorizenLine width={112} />
                <p class="input-label">Name</p>
                <input class="content-input" placeholder="Full Name" />
                <p class="input-label">Username</p>
                <input class="content-input" placeholder="@username" />
                <p class="input-label">Email ID</p>
                <input
                    class="content-input flex justify-center"
                    placeholder="hello@emailid.com"
                />
                <button class="send-email flex justify-center items-center">
                    <p>Send verification e-mail</p>
                </button>
                <p class="input-label">Bio</p>
                <textarea
                    cols="40"
                    rows="10"
                    class="content-input-area flex justify-center"
                    placeholder="Tell us a bit about yourselt"
                />
                <p class="input-label">Edit Cover Image</p>
                <div
                    id="edit-cover-image"
                    class="flex justify-center items-center"
                >
                    <button
                        class="upload_photo_button flex justify-center items-center"
                    >
                        <p>Upload Photo</p>
                    </button>
                </div>
            </div>

            <div id="content-right" class="flex flex-col justify-center items-center">
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
                    {#if userData && userData.image}
                        <img src="resource/${userData.image}.png" alt="ExperimentalLogo" />
                    {:else}
                        <img src="images/ExperimentalLogo.png" alt="ExperimentalLogo" />
                    {/if}
                </label>
                <p id="content-right-title">Edit Profile Image</p>
                <div style="margin-bottom:22px">
                    <p id="content-right-sns-title">Social Links</p>
                    <HorizenLine width={112}/>
                </div>
                <div class="content-right-sns-content flex flex-col items-center justify-center">
                    <div style="margin-bottom:10px" class="sns-input-container flex jusity-center items-center">
                        <div class="img-container flex flex-col justify-center items-center">
                            <img src="images/instagram.png" alt="images/instagram.png">
                        </div>                        
                        <input
                            style="padding:0 0 0 16%;"
                            class="sns-input border-0 focus:outline-none w-full"
                            placeholder="Instagram Id"
                        />
                    </div>
                    <div style="margin-bottom:10px" class="sns-input-container flex jusity-center items-center">
                        <div class="img-container flex flex-col justify-center items-center">
                            <img src="images/twitter.png" alt="images/twitter.png">
                        </div>                        
                        <input
                            style="padding:0 0 0 16%;"
                            class="sns-input border-0 focus:outline-none w-full"
                            placeholder="Twitter Username"
                        />
                    </div>
                    <div style="margin-bottom:10px" class="sns-input-container flex jusity-center items-center">
                        <div class="img-container flex flex-col justify-center items-center">
                            <img src="images/facebook.png" alt="images/facebook.png">
                        </div>                        
                        <input
                            style="padding:0 0 0 16%;"
                            class="sns-input border-0 focus:outline-none w-full"
                            placeholder="Facebook URL"
                        />
                    </div>
                </div>
            </div>
        </div>

        <button class="save flex justify-center items-center">
            <p>Save Changes</p>
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

    .img-container img {

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
