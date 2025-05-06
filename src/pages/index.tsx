import React from 'react';
import { Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import ProgressTracker from '../components/ProgressTracker';
import LessonCard from '../components/LessonCard';
import { Lesson, UserProgress } from '../types';


const mockLessons: Lesson[] = [
  // Add mock lesson data
];


const mockProgress: UserProgress = {
  lessonsCompleted: 15,
  wordsLearned: 250,
  streak: 7,
  currentLevel: 'Intermediate'
};


export default function Home() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
        Welcome to LanguageMaster
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProgressTracker progress={mockProgress} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Available Lessons
          </Typography>
          <Grid container spacing={2}>
            {mockLessons.map((lesson) => (
              <Grid item xs={12} sm={6} key={lesson.id}>
                <LessonCard lesson={lesson} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}