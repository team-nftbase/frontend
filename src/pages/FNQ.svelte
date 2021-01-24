<script>
  import { _ } from "svelte-i18n";
</script>

<div class="container mx-auto py-12 px-72">
  <p class="text-4xl font-bold">{$_("fnq.whatisnft")}</p>
  <p>
    {$_("fnq.whatisnft_paragraph1")}
  </p>
  <p>
    {$_("fnq.whatisnft_paragraph2")}
  </p>
  <p>
    {$_("fnq.whatisnft_paragraph3")}
  </p>
  <p>
    If you want to go in-depth into NFTs, I suggest this read:
    <a href="https://opensea.io/blog/guides/non-fungible-tokens/">
      https://opensea.io/blog/guides/non-fungible-tokens/
    </a>
  </p>
  <p class="text-4xl font-bold pt-24">What is NFTBase?</p>
  <p>
    NFTBase is a marketplace where you can buy and sell digital goods, including
    collectibles, gaming items, digital art, and other digital assets that are
    backed by the Ethereum blockchain.
  </p>
  <p>
    NFTBase provides users a marketplace where they can buy, sell, and trade any
    of these items with all around the world. It’s possible because NFTBase is
    operating on Ethereum's smart contract, which means reliable and secure
    without the third party’s intervention. You can check every source code to
    make sure yourself.
  </p>
  <p>
    NFTBase is running as a decentralized market, and we believe that everyone
    around the world can participate in the market whenever they want if they
    can connect to the internet.
  </p>
  <p class="text-2xl font-bold">What can I do with NFTBase?</p>
  <p>
    You can buy, sell, trade NFTs. As NFTs become more and more valuable and
    popular, sometimes NFTs are exchanged at high prices.
  </p>
  <p>
    First of all, to buy, sell, trade NFTs, you need to set up Metamask on your
    browser. After logging in NFTbase, you can search NFTs -
    <a href="https://opensea.io/assets/gods-unchained">Gods Unchained</a>,
    <a href="https://opensea.io/assets/cryptospells">CryptoSpells</a>,
    <a href="https://opensea.io/assets/axie">Axie Infinity</a>,
    <a href="https://opensea.io/assets/cryptokitties">CryptoKitties</a>,
    <a href="https://opensea.io/assets/superrare">SuperRare</a>,
    <a href="https://opensea.io/assets/makersplace">Makersplace</a>,
    <a href="https://opensea.io/assets/ens">ENS (Ethereum Name Service)</a> etc,.
  </p>
  <p class="text-2xl font-bold">
    What do I use for payment when buying on NFTBase?
  </p>
  <p>
    Since the items you see on NFTBase are backed by the Ethereum blockchain,
    payment is also made in blockchain-based currencies such as USDC, USDT, ETH.
  </p>
  <p class="text-2xl font-bold">
    I’m an artist. I want to make my own item on the Ethereum blockchain!
  </p>
  <p>
    We will provide users tools to make your own item as ERC721 or NFT. We will
    announce the service soon.
  </p>
  <p class="text-2xl font-bold">What is Metamask?</p>
  <p>
    Metamask is the most reliable and easy Ethereum wallet. After you download
    and setup on your Chrome browser, you can log in and participate in
    transactions on NFTBase. You can install MetaMask in your browser from the
    <a href="https://metamask.io/">MetaMask website</a>. A great video can be
    found on MetaMask here.
  </p>
  <p class="text-2xl font-bold">Does NFTBase charge a fee when I trade ?</p>
  <p>
    Yes, we take 2.5% from the price of a successful sale. The original creator
    of the item (such as the developer of the game) can opt to take a fee on the
    final transaction as well.
  </p>
  <p>
    There's no fee to list items or buy items. But when you list an item, the
    sidebar on the right (or the section on the bottom on mobile) will tell you
    the fee that will be deducted when the item sells.
  </p>
  <p class="text-2xl font-bold">Is NFTBase safe?</p>
  <p>
    NFTBase is operating on the Ethereum blockchain. We don't control the
    proxies that get created, and you have to approve access to each ERC721
    contract individually. Once the contract is approved, the logic of the
    exchange contract only allows it to transfer an asset from your proxy only
    if <br />A) you have signed an order indicating you wish to sell that item,
    and <br />B) it is properly matched by a buyer paying the appropriate funds.
  </p>
  <p>
    So not only does your asset not leave your wallet until it is sold, it is
    only allowed to be swapped if an order you create is properly matched.
  </p>
  <p class="text-2xl font-bold">
    How can I reverse the transaction that I made ?
  </p>
  <p>
    Since transactions on the blockchain are irreversible, we cannot provide
    refunds. We have no ability to cancel, revert, or modify any transactions on
    the Ethereum network.
  </p>
  <p class="text-2xl font-bold">
    I want to buy an item on NFTBase. What should I do ?
  </p>
  <p>
    After you log in with your Metamask, try to find an item that you want to
    buy. When you click "Buy Now", NFTBase and your wallet will work together to
    send the ETH from your wallet to the seller. That’s all. All the things that
    you have to finish the process will be just clicking one or two transactions
    to confirm the transaction on your Metamask.
  </p>
  <p>
    The transaction that you made will be processed on the smartcontract of
    NFTBase. When the transaction is processed (which usually happens after
    30-70 seconds and requires no addiitonal action from you), the item becomes
    yours and the ETH becomes the seller's. All the process is operating on the
    Ethereum blockchain. Once it’s done, you can find the item on your “My page”
    and “My items” slot.
  </p>
  <p class="text-2xl font-bold">How do I sell digital items on NFTBase ?</p>
  <p>
    To list an item, you'll need to find the item on your account page and click
    on it. On the item detail page, click "Sell". Note that the first time you
    auction an item, you will need to complete one or two transactions in order
    to give the exchange contracts access to your items. After you complete
    these initial steps, the process will only require signing a message with
    your wallet. This means that you can sell items without paying gas.
  </p>
  <p class="text-2xl font-bold">
    I want to make my first listing. What transactions are required?
  </p>
  <p>
    NFTBase’'s selling system minimizes the number of on-chain Ethereum
    transactions required to list an item for sale. In fact, once you've
    completed the preliminary steps, auctioning an item will require no on-chain
    transaction at all.
  </p>
  <p>Let me explain the process.</p>
  <p>
    1. For your first NFTBase sale, you will need to initialize your account
    with a free (plus gas) on-chain transaction. You only need to do this only
    for one time.
  </p>
  <p>
    2. When you sell a new "type" of item (for example, your first CryptoKitty
    or your first Autoglyph), you will need to complete another free (plus gas)
    transaction in order to unlock access to that item type. In most cases, you
    only need to do this once per item type! So, for example, once you've
    approved access to Autoglyphs, you can auction as many Autoglyphs as you
    like without having to complete another transaction.
  </p>
  <p>
    3. Once you've unlocked access to that item type, all auctions will simply
    require signing a message with your wallet. No gas required!
  </p>
  <p>
    While there are a few transactions up front, the overall result is a much
    cheaper, faster experience for the end user.
  </p>
  <p class="text-2xl font-bold">Can I send my NFT items to others?</p>
  <p>
    Yes, just go on the detail page of a collectible you own, open the “...”
    menu and select “transfer token”
  </p>
  <p class="text-2xl font-bold">What is the origin of NFTBase?</p>
  <p>
    NFTBase is built to be a global base for NFT creation and trading. We
    believe that a number of people are going to recognize the value of digital
    asset - NFT. As NFT becomes one of the most valuable and creative asset in
    the world, NFTBase will grow up as a decentralized platform for NFT items.
  </p>
  <p class="text-2xl font-bold">Can I cancel the transaction or refund?</p>
  <p>
    We’re sorry that we can’t help you. Because transactions on the blockchain
    are irreversible, we cannot cancel transactions or refunds. We cannot
    cancel, revert or modify any transaction on the Ethereum network.
  </p>
  <p class="text-2xl font-bold">I have a suggestion for NFTBase.</p>
  <p>
    If you have any good project recommendations, please contact to :
    <a href="mailto:contact@nftbase.ai">contact@nftbase.ai</a>
  </p>
  <p>
    you are welcome to email us if you have any problems or help :
    <a href="mailto:service@nftbase.ai">service@nftbase.ai</a>
  </p>
  <p class="text-4xl font-bold pt-24">Let’s NFTbase!</p>
  <p class="text-2xl font-bold">What is NFTbase ?</p>
  <p>
    Since the internet has changed the world and lives of people all around the
    world, we noticed that everything has been changed to digital. Diverse
    businesses became digital. Moreover the way people think became familiar to
    digital as well.
  </p>
  <p>
    Being digital is an awesome experience because it makes people more easy and
    comfortable, but it is not always good. We have experienced that the more we
    rely on specific IT services that we love, the more we lose ourselves. It
    simply means that we need to rely on service providers such as big tech
    companies.
  </p>
  <p>
    In this perspective, the Ethereum blockchain is an incredible human
    invention. It's a decentralized network so that we don’t have to rely on
    specific players to use the network. Moreover, what is the most amazing part
    is that the Ethereum network can be a world computer that you can use
    whenever you want to use it. This is possible because the smart contract
    operates as people agreed and it’s reliable because everyone can inspect
    whether it’s good to use or not. All choices depend on you.
  </p>
  <p>
    Thanks to the Ehereum blockchain, eventually we faced the greatest era when
    we can own something literally 100%. You can have a pure control on your
    digital asset which is registered on the Ethereum blockchain. You do not
    have to rely on someone else such as IT service providers. If you own a
    piece of digital art, you can manage it without using other services. The
    Ethereum wallet would be enough.
  </p>
  <p>
    NFTbase believes that the rise of the blockchain era will change the way
    people think and own assets. As people understand what having a real control
    on assets means, NFT will be an attractive market for everyone. Because NFT
    is the easiest way to own your digital assets.
  </p>
  <p>
    NFTbase is a marketplace where people can make their own digital assets and
    trade them. It’s a base for global NFT users. To make our expectation come
    true and to be an early mover in this area, we are going to work hard to
    broaden NFTbase service.
  </p>
</div>

<style>
  p {
    margin-top: 24px;
  }
</style>
