import React from 'react';
import { Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import Flashcard from '../components/Flashcard';
import { VocabularyWord } from '../types';


const mockVocabulary: VocabularyWord[] = [
  // Add mock vocabulary data
];


export default function Vocabulary() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Vocabulary Review
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {mockVocabulary.map((word) => (
          <Grid item key={word.id}>
            <Flashcard word={word} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}