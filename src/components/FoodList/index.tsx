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
  onQuantityChange: (add: boolean) => void;
}

const FoodList: React.FC<FoodDataProps> = ({data, onQuantityChange}) => {
  const [quantity, setQuantity] = React.useState({value: 0});

  const handleQuantityChange = (add: boolean) => {
    if (add) {
      setQuantity({value: quantity.value + 1});
    } else {
      if (quantity.value > 0) {
        setQuantity({value: quantity.value - 1});
      }
    }

    return onQuantityChange(add);
  };

  return (
    <Container>
      <FoodListContent>
        <FoodListImageContainer>
          <FoodListImage source={{uri: data.foto}} />
        </FoodListImageContainer>
        <FoodListInfoContent>
          <FoodName>
            {data.name && data.name?.length > 11
              ? `${data.name?.slice(0, 11)}...`
              : data.name}
          </FoodName>
          <FoodDescription>{data.peso}</FoodDescription>
        </FoodListInfoContent>
      </FoodListContent>
      <AddOrRemove onPress={() => handleQuantityChange(false)}>
        <AddOrRemoveText>-</AddOrRemoveText>
      </AddOrRemove>
      <FoodQuantityValue>
        <FoodQuantityValueText>{quantity.value}</FoodQuantityValueText>
      </FoodQuantityValue>
      <AddOrRemove onPress={() => handleQuantityChange(true)}>
        <AddOrRemoveText>+</AddOrRemoveText>
      </AddOrRemove>
    </Container>
  );
};

export {FoodList};
