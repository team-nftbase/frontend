<script>
    import { Banner } from "./comp/mypage";
  </script>
  
  <div>
    <Banner is_use_sns={false}/>
    <div id="card" class="w-full flex flex-col items-center justify-center">
        <p id="title">Edit your profile</p>
    </div>
  </div>
  
  <style>
     #card {
        margin: 136px 222px 104p 222px;
        background: #FFFFFF;
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
     }
  </style>
  