import React, {useEffect} from 'react';

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

import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../redux/useSlice';

interface IFoodDTO {
  foto?: string;
  name?: string;
  peso?: string;
  id?: string;
}

interface FoodDataProps extends IFoodDTO {
  data: IFoodDTO;
  index: number;
}

const FoodList: React.FC<FoodDataProps> = ({data, index}) => {
  const dispatch = useDispatch();

  const {value} = useSelector((state: any) => state.listValue);

  const handleQuantityAdd = (item: object) => {
    dispatch(increment(item));
  };

  const handleQuantityRemove = (item: object) => {
    dispatch(decrement(item));
  };

  //@ts-ignore
  const countById = (data, id) => {
    return data.reduce(
      //@ts-ignore
      (count, item) => (item.id === id ? count + 1 : count),
      0,
    );
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
      <AddOrRemove onPress={() => handleQuantityRemove(data)}>
        <AddOrRemoveText>-</AddOrRemoveText>
      </AddOrRemove>
      <FoodQuantityValue>
        <FoodQuantityValueText>
          {countById(value, data.id)}
        </FoodQuantityValueText>
      </FoodQuantityValue>
      <AddOrRemove onPress={() => handleQuantityAdd(data)}>
        <AddOrRemoveText>+</AddOrRemoveText>
      </AddOrRemove>
    </Container>
  );
};

export {FoodList};
