<script>
    import HorizenLine from "../../../common/comp/HorizenLine.svelte";
    export let artistsList = [];
</script>

<div>
    <p id="title">Artists Involved -</p>
    <HorizenLine width={113} />
    <div class="flex flex-rows" style="margin-top: 35px;">
        {#each artistsList as artists}
            <div class="flex flex-rows" style="margin-right:20px">
                <div>
                    <img src={artists.img} alt="tempShowRoom" />
                </div>
                <div class="flex flex-col items-center justify-center" style="margin-left:16px">
                    <div>
                        <p class="name">@{artists.name}</p>
                    </div>
                    <div>
                        <p class="price">{artists.totalPrice} ETH</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    #title {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        margin-top: 24px;
        line-height: 31px;
        margin-bottom: 15px;
    }

    .name {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
    }

    .price {
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 17px;
    }
</style>
