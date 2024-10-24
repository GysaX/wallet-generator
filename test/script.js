// Function to generate mnemonic and wallet
function generateWallet() {
    // Generate a mnemonic phrase (12 words)
    const mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
    
    // Create wallet from mnemonic
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    
    // Display mnemonic and wallet address
    document.getElementById('mnemonic').innerText = mnemonic;
    document.getElementById('walletAddress').innerText = wallet.address;
}

// Add event listener to the "Generate" button
document.getElementById('generateBtn').addEventListener('click', generateWallet);
