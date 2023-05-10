import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {
  ConfirmButton,
  Container,
  FeedBackCard,
  FeedBackCardText,
  FeedBackCardTitle,
  FeedBackContentStars,
} from './styles';

import {THEME} from '../../theme';

import Icon from 'react-native-vector-icons/Ionicons';

import {useDispatch} from 'react-redux';
import {closeModal} from '../../redux/useDonationSucess';
interface FeedBackModalProps {
  onClose: () => void;
}

const FeedBackDonationSucess: React.FC<FeedBackModalProps> = ({onClose}) => {
  const [rating, setRating] = useState(0);
  const [onConfirm, setOnConfirm] = useState(false);

  const dispatch = useDispatch();

  const handleRate = (value: number) => {
    setRating(value);
  };

  const renderStars = (rating: number, onRate: (rating: number) => void) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const name = i <= rating ? 'star' : 'star-outline';
      const star = (
        <TouchableOpacity key={i} onPress={() => onRate(i)}>
          <Icon name={name} size={38} color={THEME.colors.white} />
        </TouchableOpacity>
      );
      stars.push(star);
    }

    return stars;
  };

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
          Doação{'\n'}recebida{'\n'}com sucesso
        </FeedBackCardTitle>
        <FeedBackCardText>Avalie sua experiência</FeedBackCardText>
        <FeedBackContentStars>
          {renderStars(rating, handleRate)}
        </FeedBackContentStars>
        <ConfirmButton onPress={() => confirmRating(onClose)}>
          <Icon name="checkmark-outline" size={28} color="red" />
        </ConfirmButton>
      </FeedBackCard>
    </Container>
  );
};

export {FeedBackDonationSucess};