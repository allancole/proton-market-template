import { FC, ReactNode } from 'react';
import {
  Container,
  Title,
  CollectionName,
  PriceEditionLabel,
  Price,
  Edition,
  Description,
} from './NftDetails.styled';
import { Row, Box } from '../../styles/index.styled';
import { NftMeta } from '../';
import { Template } from '../../services/templates';
import { DetailPageProps, Typography } from '../../custom/customization';

export const NftDetails: FC<{
  children: ReactNode;
  template: Template;
  detailPageStyles: DetailPageProps;
  detailPageText: {
    priceLabelText: string;
    editionLabelText: string;
    placeholderPriceText: string;
  };
  typography: Typography;
}> = ({
  children,
  template: { lowestPrice, max_supply, collection, immutable_data },
  detailPageStyles: {
    imagePlacement,
    cardTitleFont,
    collectionNameFont,
    priceEditionLabelFont,
    priceFont,
    editionFont,
    cardDescriptionFont,
  },
  detailPageText: { priceLabelText, editionLabelText, placeholderPriceText },
  typography,
}) => (
  <Container imagePlacement={imagePlacement}>
    <NftMeta
      templateName={immutable_data.name}
      collectionName={collection.collection_name}
      collectionDisplayName={collection.name}
      collectionAuthor={collection.author}
      image={immutable_data.image}
      video={immutable_data.video}
    />
    <Box>
      <Title {...cardTitleFont} typography={typography}>
        {immutable_data.name}
      </Title>
      <Row>
        <Box>
          <CollectionName {...collectionNameFont} typography={typography}>
            {collection.name}
          </CollectionName>
          <Description {...cardDescriptionFont} typography={typography}>
            {immutable_data.desc}
          </Description>
        </Box>
        <Box>
          <PriceEditionLabel {...priceEditionLabelFont} typography={typography}>
            {editionLabelText}
          </PriceEditionLabel>
          <Edition {...editionFont} typography={typography}>
            {max_supply}
          </Edition>
        </Box>
      </Row>
      <Box>
        <PriceEditionLabel {...priceEditionLabelFont} typography={typography}>
          {priceLabelText}
        </PriceEditionLabel>
        <Price {...priceFont} typography={typography}>
          {lowestPrice || placeholderPriceText}
        </Price>
      </Box>
    </Box>
    {children}
  </Container>
);
