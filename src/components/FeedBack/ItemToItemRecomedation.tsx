import React from 'react';
import {ActivityIndicator} from 'react-native';

import {
  Container,
  FeedBackCard,
  NameProduct,
  ProductImage,
  Title,
} from './styles';

interface ItemToItemRecomedationProps {
  name: string;
  foto: string | undefined;
}

const ItemToItemRecomedation: React.FC<ItemToItemRecomedationProps> = ({
  name,
  foto,
}) => {
  return (
    <Container>
      <FeedBackCard>
        <Title>
          Pessoas que doam esses alimentos também costumam doar esses aqui:{' '}
        </Title>

        <ProductImage source={{uri: foto}} />
        <NameProduct>{name}</NameProduct>

        <ActivityIndicator style={{marginTop: 15}} size="large" color="#fff" />
      </FeedBackCard>
    </Container>
  );
};

export {ItemToItemRecomedation};
