import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';
import { UserProgress } from '../types';


interface ProgressTrackerProps {
  progress: UserProgress;
}


const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Learning Progress
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">Lessons Completed: {progress.lessonsCompleted}</Typography>
          <LinearProgress 
            variant="determinate" 
            value={(progress.lessonsCompleted / 50) * 100} 
            sx={{ mt: 1 }}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">Words Learned: {progress.wordsLearned}</Typography>
        </Box>
        <Box>
          <Typography variant="body2">Current Streak: {progress.streak} days</Typography>
          <Typography variant="body2">Level: {progress.currentLevel}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};


export default ProgressTracker;