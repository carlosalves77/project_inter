import React, {useState} from 'react';

import {
  ConfirmButton,
  Container,
  FeedBackCard,
  FeedBackCardTitle,
} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

import {useDispatch} from 'react-redux';
import {closeModal} from '../../redux/useAvaliationSucess';

interface FeedBackModalProps {
  onClose: () => void;
}

const FeedBackAvaliation: React.FC<FeedBackModalProps> = ({onClose}) => {
  const [rating, setRating] = useState(0);
  const [onConfirm, setOnConfirm] = useState(false);

  const dispatch = useDispatch();

  const confirmRating = (onConfirm: () => void) => {
    setOnConfirm(true);
    console.log('Avaliação confirmada', rating);
    onConfirm();
    dispatch(closeModal());
  };

  return (
    <Container>
      <FeedBackCard>
        <FeedBackCardTitle>
          Obrigado{'\n'}por realizar{'\n'}a avaliação
        </FeedBackCardTitle>
        <ConfirmButton onPress={() => confirmRating(onClose)}>
          <Icon name="checkmark-outline" size={28} color="red" />
        </ConfirmButton>
      </FeedBackCard>
    </Container>
  );
};

export {FeedBackAvaliation};
