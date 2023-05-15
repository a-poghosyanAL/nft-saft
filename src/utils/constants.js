import DiscordIcon from '../assets/icons/discord.png'
import InstagramIcon from '../assets/icons/instagram.png'
import LinkedInIcon from '../assets/icons/linkedin.png'
import TelegramIcon from '../assets/icons/telegram.png'
import TwitterIcon from '../assets/icons/twitter.png'
import NftIcon from '../assets/images/Nft.png'
import MetaMaskIcon from '../assets/icons/metamask.png'
import WalletConnectIcon from '../assets/icons/walletconnect.png'
import WalletIcon from '../assets/icons/wallet.png'
import FormaticIcon from '../assets/icons/formatic.png'
import AmericanExpress from '../assets/images/americanexpressConnect.png'
import MasterCard from '../assets/images/masterCardConnect.png'
import Visa from '../assets/images/visaConnect.png'

export const socialLinks = [
  { image: TelegramIcon, link: 'https://t.me/liquidcryptofinance' },
  { image: DiscordIcon, link: 'https://discord.io/liquidcrypto' },
  { image: TwitterIcon, link: 'https://twitter.com/_LiquidCrypto' },
  {
    image: InstagramIcon,
    link: 'https://www.instagram.com/liquidcrypto.finance',
  },
  {
    image: LinkedInIcon,
    link: 'https://www.linkedin.com/company/liquidcrypto/',
  },
]

export const footerLinks = [
  {
    title: 'Company',
    categories: ['About us', 'White paper'],
  },
  {
    title: 'Product',
    categories: ['LIQUID+', 'Baskets', 'Bridge+', 'Learning'],
  },
  {
    title: 'Policies',
    categories: ['Terms', 'Privacy', 'Licenses'],
  },
]

export const navigation = [
  { name: 'About', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Promotions', href: '#' },
]

export const sellingData = [
  {
    sollary: '500',
    limit: 'Limited',
  },
  {
    sollary: '1000',
    limit: 'Limited',
  },
]

export const walletIcons = [
  // { id: 1, src: LiquidIcon, name: 'liquid' },
  { id: 2, src: MetaMaskIcon, name: 'metamask' },
  // { id: 3, src: TWTIcon, name: 'twt' },
  { id: 4, src: WalletConnectIcon, name: 'walletconnect' },
  { id: 5, src: WalletIcon, name: 'wallet' },
  { id: 6, src: FormaticIcon, name: 'formatic' },
]

export const cardTypes = [MasterCard, Visa, AmericanExpress]
