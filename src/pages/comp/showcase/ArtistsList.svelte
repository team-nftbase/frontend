<script>
    import { _ } from "svelte-i18n";
    import HorizenLine from "../../../common/comp/HorizenLine.svelte";
    export let artistsList = [];
</script>

<div class="mt-24">
    <p id="title">{$_("artists.title")}</p>
    <HorizenLine width={140} />
    <div
        id="artist_list"
        class="flex flex-rows justify-between"
        style="margin-top: 35px;"
    >
        {#each artistsList as artists}
            <div class="flex flex-rows" style="margin-right:20px">
                <div>
                    <img src={artists.img} alt="tempShowRoom" width="60px" />
                </div>
                <div
                    class="flex flex-col items-center justify-center"
                    style="margin-left:16px"
                >
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

    #artist_list {
        box-shadow: 0px 11px 17px rgba(116, 134, 198, 0.2);
        border-radius: 10px;
        padding:40px;
    }
</style>
