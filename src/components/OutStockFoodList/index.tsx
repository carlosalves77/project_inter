import React from 'react';

import {
  Container,
  FoodName,
  FoodListContent,
  FoodListImage,
  FoodListImageContainer,
  FoodDescription,
  FoodListInfoContent,
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

const OutStockFoodList: React.FC<FoodDataProps> = ({data}) => {
  return (
    <Container>
      <FoodListContent>
        <FoodListImageContainer>
          <FoodListImage source={{uri: data.foto}} />
        </FoodListImageContainer>
        <FoodListInfoContent>
          <FoodName>
            {data.name && data.name?.length > 11
              ? `${data.name?.slice(0, 8)}...`
              : data.name}
          </FoodName>
          <FoodDescription>1kg</FoodDescription>
        </FoodListInfoContent>
      </FoodListContent>
      <FoodQuantityValue>
        <FoodQuantityValueText>1</FoodQuantityValueText>
      </FoodQuantityValue>
    </Container>
  );
};

export {OutStockFoodList};
