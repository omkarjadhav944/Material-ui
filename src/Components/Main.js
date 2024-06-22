import { Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { posts } from '../Data/Data'
import Markdown from 'markdown-to-jsx'

const Main = ({ Title }) => {
    return (
        <Grid item xs={12} md={8} >
            <Typography variant='h6' gutterBottom>
                {Title}
            </Typography>
            <Divider />
            {
                posts.map((post) => (
                    <Markdown key={post.body} >
                        {post.body}
                    </Markdown>
                ))}
        </Grid>
    )
}

export default Main
