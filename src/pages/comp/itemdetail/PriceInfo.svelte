<script>
  export let price = 0.1;
  export let ethpricenum = 100;
  export let total = 1;
  export let editionNum = 1;
</script>

<div id="layout" class="flex justify-between items-end">
  <p id="ethprice">{price} ETH</p>
  <p id="dprice">${Math.ceil(price * ethpricenum)}</p>
  <div>
    <p id="edition_title">Edition</p>
    <p id="edition">{editionNum}/{total}</p>
  </div>
</div>

<style>
  #layout {
    width: 318px;
  }
  #ethprice {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;

    color: #000000;
  }
  #dprice {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #b3b3b3;
  }
  #edition_title {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;

    color: #000000;
  }
  #edition {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #b3b3b3;
  }
</style>
