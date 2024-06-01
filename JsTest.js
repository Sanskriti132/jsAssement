let nftCollection = [];
function mintNFT(name, singer, published) {
    let nft = {
        name: name,
        singer: singer,
        published: published,
    };
    nftCollection.push(nft);
}function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Name: " + nftCollection[i].name);
        console.log("singer: " + nftCollection[i].singer);
        console.log("published: " + nftCollection[i].published);
        console.log('--------------------');
    }
}
function getTotalSupply() {
    return nftCollection.length;
}
mintNFT("Lata Mangeskar", "Classical", 1942);
mintNFT("Badsah", "Rapper", 2012);
mintNFT("Taylor shift", "hollywood", 2006);

console.log("List of all NFTs:");
listNFTs();

console.log("Total Supply of NFTs: " + getTotalSupply());
