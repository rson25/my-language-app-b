import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { VolumeUp, Flip } from '@mui/icons-material';
import { VocabularyWord } from '../types';


interface FlashcardProps {
  word: VocabularyWord;
}


const Flashcard: React.FC<FlashcardProps> = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };


  const playAudio = () => {
    if (word.audioUrl) {
      new Audio(word.audioUrl).play();
    }
  };


  return (
    <Card sx={{ 
      width: 300, 
      height: 200, 
      perspective: '1000px',
      '&:hover': { cursor: 'pointer' }
    }} onClick={handleFlip}>
      <CardContent sx={{
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant="h5">
          {isFlipped ? word.translation : word.word}
        </Typography>
        {isFlipped && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            {word.example}
          </Typography>
        )}
        {word.audioUrl && !isFlipped && (
          <IconButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            playAudio();
          }}>
            <VolumeUp />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
};


export default Flashcard;