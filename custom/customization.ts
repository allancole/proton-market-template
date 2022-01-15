const customizationJson: ThemeProps = {
  collection: '443545351211',
  owner: 'allancole',
  typography: {
    h1: {
      font: 'Cabinet Grotesk',
      size: '32px',
      fontWeight: '500',
      isItalic: false,
    },
    h2: {
      font: 'Cabinet Grotesk',
      size: '28px',
      fontWeight: '500',
      isItalic: false,
    },
    h3: {
      font: 'Cabinet Grotesk',
      size: '24px',
      fontWeight: '500',
      isItalic: true,
    },
    h4: {
      font: 'Cabinet Grotesk',
      size: '17px',
      fontWeight: '500',
      isItalic: false,
    },
    paragraph: {
      font: 'Cabinet Grotesk',
      size: '17px',
      fontWeight: '500',
      isItalic: false,
    },
    label: {
      font: 'Cabinet Grotesk',
      size: '17px',
      fontWeight: '800',
      isItalic: false,
    },
    caption: {
      font: 'Cabinet Grotesk',
      size: '15px',
      fontWeight: '500',
      isItalic: false,
    },
  },
  navbar: {
    logo: '/ac-logo-red.png',
    logoLink: '/',
    backgroundColor: 'transparent',
    defaultAvatarImage: '/default-avatar.png',
    navLinkFontType: 'label',
    navLinks: [
      // recommended 3 - 5
      {
        link: '/about',
        color: '#000000',
      },
      {
        link: '/about',
        color: '#000000',
      },
      {
        link: '/my-items', // always recommended to keep
        color: '#000000',
      },
    ],
    balanceSubtitleFontType: 'label',
    buttonFontColor: '#FFFFFF',
    buttonBackgroundColor: '#000000',
    buttonBorderColor: '#000000',
    buttonFontType: 'label',
    bottomBorderColor: 'transparent',
  },
  footer: {
    logo: '/ac-logo-red.png',
    socialMediaLinks: [
      {
        link: 'https://facebook.com',
        type: 'facebook',
        color: '#1877F2',
      },
      {
        link: 'https://twitter.com',
        type: 'twitter',
        color: '#1DA1F2',
      },
      {
        link: 'https://youtube.com',
        type: 'youtube',
        color: '#FF0000',
      },
    ],
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  nftCard: {
    mainBackgroundColor: '#ffffff',
    secondaryBackgroundColor: 'transprent',
    borderColor: 'lightgrey',
    borderRadius: '8px',
    priceFont: {
      type: 'h4',
      color: '#000000',
    },
    countFont: {
      type: 'label',
      color: '#000000',
    },
    titleFont: {
      type: 'h4',
      color: '#000000',
      carouselHeight: '32px',
    },
    collectionNameFont: {
      type: 'label',
      color: '#000000',
    },
  },
  featuredSection: {
    carousel: true,
    titleFont: {
      type: 'h2',
      color: '#000000',
    },
    paddingTop: '96px',
    backgroundColor: '#ffffff',
    carouselButtonsBackgroundColor: '#ffffff',
    carouselButtonsBorderColor: 'lightgrey',
  },
  header: {
    image: '/custom-header-image.png',
    imagePlacement: 'right',
    backgroundColor: 'white',
    highlightFont: {
      isShown: true,
      type: 'paragraph',
      color: '#000000',
    },
    mainHeadingFont: {
      type: 'h1',
      color: '#000000',
    },
    subheadingFont: {
      type: 'h4',
      color: '#000000',
    },
    button: {
      isShown: true,
      textColor: 'white',
      textFont: 'caption',
      backgroundColor: 'black',
      link: 'https:/google.com',
    },
  },
  myItemsPage: {
    backgroundColor: '#ffffff',
    headerFont: {
      type: 'h2',
      color: 'black',
    },
  },
  detailPage: {
    imagePlacement: 'left',
    imageBackgroundColor: 'transparent',
    imageShadow: false,
    cardTitleFont: {
      type: 'h1',
      color: 'black',
    },
    collectionNameFont: {
      type: 'caption',
      color: '#000000',
    },
    priceEditionLabelFont: {
      type: 'caption',
      color: '#000000',
    },
    priceFont: {
      type: 'h2',
      color: '#c71f3e',
    },
    editionFont: {
      type: 'h2',
      color: 'black',
    },
    cardDescriptionFont: {
      type: 'caption',
      color: '#000000',
    },
    errorFont: {
      type: 'caption',
      color: '#c71f3e',
    },
    button: {
      textColor: 'white',
      textFont: 'caption',
      backgroundColor: 'black',
    },
    dropdown: {
      borderColor: '#f2f2f2',
      arrowDropdownColor: '#666',
      textColor: 'black',
      textFont: 'caption',
    },
  },
};

export const generateFontImportLink = (
  typographyVariants: TypographyVariant[]
): string => {
  const stylesByFont = {};
  typographyVariants.forEach(({ font, fontWeight, isItalic }) => {
    if (!stylesByFont[font] || !stylesByFont[font][fontWeight]) {
      stylesByFont[font] = {
        [fontWeight]: {
          shouldLoadItalic: isItalic,
        },
      };
    }

    if (isItalic) {
      stylesByFont[font][fontWeight] = {
        shouldLoadItalic: true,
      };
    }
  });

  const fonts = Object.keys(stylesByFont).map((font) => {
    const styles = stylesByFont[font];
    let shouldLoadItalic = false;

    const partialStyleStrings = Object.keys(styles).map((weight) => {
      const iItalic = styles[weight].shouldLoadItalic;
      if (iItalic) {
        shouldLoadItalic = true;
      }
      return iItalic ? `${weight};1,${weight}` : `${weight}`;
    });

    const stylesString = shouldLoadItalic
      ? partialStyleStrings.map((string) => `0,${string}`).join(';')
      : partialStyleStrings.join(';');

    return `f[]=${font.replace(/\s/g, '+')}:${
      shouldLoadItalic ? 'ital,' : ''
    }wght@${stylesString}`;
  });

//  return `https://api.fontshare.com/css2?${fonts.join('&')}&display=swap`;
  return `https://api.fontshare.com/css?f[]=cabinet-grotesk@500,800&display=swap`;
};

export interface HeaderProps {
  image: string;
  imagePlacement: string;
  backgroundColor: string;
  highlightFont: {
    isShown: boolean;
    type: string;
    color: string;
  };
  mainHeadingFont: {
    type: string;
    color: string;
  };
  subheadingFont: {
    type: string;
    color: string;
  };
  button: {
    isShown: boolean;
    textColor: string;
    textFont: string;
    backgroundColor: string;
    link: string;
  };
}

export interface NavbarProps {
  logo: string;
  logoLink: string;
  backgroundColor: string;
  defaultAvatarImage: string;
  navLinkFontType: string;
  navLinks: {
    link: string;
    color: string;
  }[];
  balanceSubtitleFontType: string;
  buttonFontColor: string;
  buttonBackgroundColor: string;
  buttonBorderColor: string;
  buttonFontType: string;
  bottomBorderColor: string;
}

export interface FeaturedSectionProps {
  carousel: boolean;
  titleFont: {
    type: string;
    color: string;
  };
  backgroundColor: string;
  paddingTop: string;
  carouselButtonsBackgroundColor: string;
  carouselButtonsBorderColor: string;
}

export interface FooterProps {
  logo: string;
  socialMediaLinks: {
    link: string;
    type: string;
    color: string;
  }[];
  backgroundColor: string;
  borderColor: string;
}

export interface MyItemsPageProps {
  backgroundColor: string;
  headerFont: {
    type: string;
    color: string;
  };
}

export interface NftCardProps {
  mainBackgroundColor: string;
  secondaryBackgroundColor: string;
  borderColor: string;
  borderRadius: string;
  priceFont: {
    type: string;
    color: string;
  };
  countFont: {
    type: string;
    color: string;
  };
  titleFont: {
    type: string;
    color: string;
    carouselHeight: string;
  };
  collectionNameFont: {
    type: string;
    color: string;
  };
}

export interface DetailPageProps {
  imagePlacement: string;
  imageBackgroundColor: string;
  imageShadow: boolean;
  cardTitleFont: {
    type: string;
    color: string;
  };
  collectionNameFont: {
    type: string;
    color: string;
  };
  priceEditionLabelFont: {
    type: string;
    color: string;
  };
  priceFont: {
    type: string;
    color: string;
  };
  editionFont: {
    type: string;
    color: string;
  };
  cardDescriptionFont: {
    type: string;
    color: string;
  };
  errorFont: {
    type: string;
    color: string;
  };
  button: {
    textColor: string;
    textFont: string;
    backgroundColor: string;
  };
  dropdown: {
    borderColor: string;
    arrowDropdownColor: string;
    textColor: string;
    textFont: string;
  };
}

export interface TypographyVariant {
  font: string;
  size: string;
  fontWeight: string;
  isItalic: boolean;
}

export interface Typography {
  h1: TypographyVariant;
  h2: TypographyVariant;
  h3: TypographyVariant;
  h4: TypographyVariant;
  paragraph: TypographyVariant;
  label: TypographyVariant;
  caption: TypographyVariant;
}

export interface FontProps {
  type: string;
  color: string;
  typography: Typography;
}

export type ThemeProps = {
  collection: string;
  owner: string;
  typography: Typography;
  navbar: NavbarProps;
  footer: FooterProps;
  nftCard: NftCardProps;
  featuredSection: FeaturedSectionProps;
  header: HeaderProps;
  myItemsPage: MyItemsPageProps;
  detailPage: DetailPageProps;
};

export default customizationJson;
