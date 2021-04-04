<script>
  import { _ } from "svelte-i18n";
  import { HorizenLine } from "common/comp/index.js";
</script>

<div class="container mx-auto py-12 px-72">
  <p class="text-4xl font-bold mb-3">{$_("fnq.whatisnft")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.whatisnft_paragraph1")}</p>
  <p>{$_("fnq.whatisnft_paragraph2")}</p>
  <p>{$_("fnq.whatisnft_paragraph3")}</p>
  <p>
    {$_("fnq.whatisnft_paragraph4")}
    <a href="https://opensea.io/blog/guides/non-fungible-tokens/">
      https://opensea.io/blog/guides/non-fungible-tokens/
    </a>
  </p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.whatisnftbase")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.whatisnftbase_paragraph1")}</p>
  <p>{$_("fnq.whatisnftbase_paragraph2")}</p>
  <p>{$_("fnq.whatisnftbase_paragraph3")}</p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.whatcanidowithnftbase")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.whatcanidowithnftbase_paragraph1")}</p>
  <p>{$_("fnq.whatcanidowithnftbase_paragraph2")}</p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.whatdoiuseforpayment")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.whatdoiuseforpayment_paragraph1")}</p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.iamanartist")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.iamanartist_paragraph1")}</p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.whatismetamask")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.whatismetamask_paragraph1")}</p>

  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.isnftbasesafe")}</p>
  <HorizenLine width={160} />
  <p>
    {$_("fnq.isnftbasesafe_paragraph1")} <br />
    {$_("fnq.isnftbasesafe_paragraph2")}<br />
    {$_("fnq.isnftbasesafe_paragraph3")}
  </p>
  <p>{$_("fnq.isnftbasesafe_paragraph4")}</p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.howcanireverse")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.howcanireverse_paragraph1")}</p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.iwanttobuyanitem")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.iwanttobuyanitem_paragraph1")}</p>
  <p>{$_("fnq.iwanttobuyanitem_paragraph2")}</p>
  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.howdoiselldigital")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.howdoiselldigital_paragraph1")}</p>

  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.iwanttomakemyfirstlisting")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.iwanttomakemyfirstlisting_paragraph1")}</p>
  <p>{$_("fnq.iwanttomakemyfirstlisting_paragraph2")}</p>
  <p>{$_("fnq.iwanttomakemyfirstlisting_paragraph3")}</p>
  <p>{$_("fnq.iwanttomakemyfirstlisting_paragraph4")}</p>
  <p>{$_("fnq.iwanttomakemyfirstlisting_paragraph5")}</p>
  <p>{$_("fnq.iwanttomakemyfirstlisting_paragraph6")}</p>

  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.doesnftbasecharge")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.doesnftbasecharge_paragraph1")}</p>
  <p>{$_("fnq.doesnftbasecharge_paragraph2")}</p>

  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.canisendmynft")}</p>
  <HorizenLine width={160} />
  <p>{$_("fnq.canisendmynft_paragraph1")}</p>

  <p class="text-4xl font-bold pt-24 mb-3">{$_("fnq.ihavesuggestion")}</p>
  <HorizenLine width={160} />
  <p>
    {$_("fnq.ihavesuggestion_paragraph1")} :
    <a href="mailto:contact@NFTbase.ai">contact@NFTbase.ai</a><br />
    {$_("fnq.ihavesuggestion_paragraph2")} :
    <a href="mailto:service@NFTbase.ai">service@NFTbase.ai</a>
  </p>
</div>

<style>
  p {
    margin-top: 24px;
  }
</style>
