import React from 'react';

import {
  Container,
  FoodName,
  FoodListContent,
  FoodListImage,
  FoodListImageContainer,
  FoodDescription,
  FoodListInfoContent,
  AddOrRemove,
  AddOrRemoveText,
  FoodQuantityValue,
  FoodQuantityValueText,
} from './styles';

interface IFoodDTO {
  foto?: string;
  name?: string;
  peso?: string;
}

interface FoodDataProps extends IFoodDTO {
  data: IFoodDTO;
}

const FoodList: React.FC<FoodDataProps> = ({data}) => {
  const [quantity, setQuantity] = React.useState({value: 0});

  const handleAddQuantity = () => {
    setQuantity({value: quantity.value + 1});
  };

  const handleRemoveQuantity = () => {
    if (quantity.value > 0) {
      setQuantity({value: quantity.value - 1});
    }
  };

  return (
    <Container>
      <FoodListContent>
        <FoodListImageContainer>
          <FoodListImage source={{uri: data.foto}} />
        </FoodListImageContainer>
        <FoodListInfoContent>
          <FoodName>{data.name}</FoodName>
          <FoodDescription>{data.peso}</FoodDescription>
        </FoodListInfoContent>
      </FoodListContent>
      <AddOrRemove onPress={() => handleRemoveQuantity()}>
        <AddOrRemoveText>-</AddOrRemoveText>
      </AddOrRemove>
      <FoodQuantityValue>
        <FoodQuantityValueText>{quantity.value}</FoodQuantityValueText>
      </FoodQuantityValue>
      <AddOrRemove onPress={() => handleAddQuantity()}>
        <AddOrRemoveText>+</AddOrRemoveText>
      </AddOrRemove>
    </Container>
  );
};

export {FoodList};
