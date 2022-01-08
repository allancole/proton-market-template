const localizationJson: LocalizationText = {
  en: {
    header: {
      highlightText: 'Exclusive',
      headerLine1: 'Collectible Art & NFTs',
      headerLine2: 'by Allan Cole',
      description:
        'These exclusive pieces are released in limited quantities. Get them while you can!',
      buttonText: 'Get Started',
    },
    navbar: {
      "navLinks": [
        "About",
        "Other",
        "My items"
      ],
      "balanceText": "Balance",
      "loginText": "Connect Wallet"
    },
    detailPage: {
      priceLabelText: 'Price',
      editionLabelText: 'Edition Size',
      placeholderPriceText: 'Not for sale',
      placeholderDropdownText: 'No assets',
      buyButtonText: 'Buy now',
      viewButtonText: 'View on Proton Market',
      sellButtonText: 'Sell on Proton Market',
      cancelSaleButtonText: 'Cancel sale on Proton Market',
    },
    nftCard: {
      nftsLeft: 'Left',
      nftsOwnedForSale: 'For sale',
      soldOut: 'Sold out',
    },
    featuredSection: {
      heading: '', // optional
    },
    myItemsPage: {
      header: 'My items',
    },
  },
};

export interface HeaderTextProps {
  highlightText: string;
  headerLine1: string;
  headerLine2: string;
  description: string;
  buttonText: string;
}

export interface NftCardTextProps {
  nftsLeft: string;
  nftsOwnedForSale: string;
  soldOut: string;
}

export interface NavbarTextProps {
  navLinks: string[];
  balanceText: string;
  loginText: string;
}

export interface FeaturedSectionTextProps {
  heading: string;
}

export interface DetailPageTextProps {
  priceLabelText: string;
  editionLabelText: string;
  placeholderPriceText: string;
  placeholderDropdownText: string;
  buyButtonText: string;
  viewButtonText: string;
  sellButtonText: string;
  cancelSaleButtonText: string;
}

export interface Text {
  header: HeaderTextProps;
  navbar: NavbarTextProps;
  detailPage: DetailPageTextProps;
  nftCard: NftCardTextProps;
  featuredSection: FeaturedSectionTextProps;
  myItemsPage: {
    header: string;
  };
}

interface LocalizationText {
  [language: string]: Text;
}

export default localizationJson;
