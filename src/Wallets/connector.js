import MetaMaskIcon from '../assets/icons/metamask.png'
import WalletConnectIcon from '../assets/icons/walletconnect.png'
import WalletIcon from '../assets/icons/wallet.png'
import FormaticIcon from '../assets/icons/formatic.png'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'

export const walletIcons = [
  // { id: 1, src: LiquidIcon, name: 'liquid' },
  {
    id: 2,
    src: MetaMaskIcon,
    name: 'metamask',
    connector: new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] }),
  },
  // { id: 3, src: TWTIcon, name: 'twt' },
  {
    id: 4,
    src: WalletConnectIcon,
    name: 'walletconnect',
    connector: new WalletConnectConnector({
      rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      bridge: 'https://bridge.walletconnect.org',
      qrcode: true,
    }),
  },
  {
    id: 5,
    src: WalletIcon,
    name: 'wallet',
    connector : new BscConnector({})
  },
  {
    id: 6,
    src: FormaticIcon,
    name: 'formatic',
    connector: new FortmaticConnector({ apiKey: 'pk_live_991B038F457524F0', chainId: 1 }),
  },
]
