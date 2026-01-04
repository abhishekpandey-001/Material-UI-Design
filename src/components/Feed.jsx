import Box from '@mui/material/Box'
import React from 'react'
import FeedCard from './FeedCard'

const Feed = () => {
  return (
    <Box flex={4} sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
    }}>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
    </Box>
  )
}

export default Feed
