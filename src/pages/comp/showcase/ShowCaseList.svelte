<script>
    import HorizenLine from "../../../common/comp/HorizenLine.svelte";
    export let showcaseList = [];
</script>

<div class="border-radius" style="width:250px; padding:0 20px 0">
    <p id="title">Live Showrooms</p>
    <HorizenLine width={113} />
    {#each showcaseList as showcase}
        <div class="content">
            <img src={showcase.img} alt="tempShowRoom" />
            <p>{showcase.title}</p>
        </div>
    {/each}
</div>

<style>
    .border-radius {
        border: 0.5px solid #000000;
        box-sizing: border-box;
        border-radius: 15px;
    }

    #title {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        margin-top: 24px;
        margin-bottom: 15px;
    }

    .content {
        width: 218px;
        border-radius: 7px;
        margin-top: 24px;
    }

    .content p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
    }
</style>
