import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import AllCategories from './AllCategories';
import AllPosts from './AllPosts';
import SortingDropdown from './SortingDropdown';

const HomePage = () => (
  <Grid centered>
    <Grid.Column width={8}>
      <Container textAlign="right">
        <Link to="/createpost">
          <Button className="add-post-button" size="small">
            <Icon name="plus" />
            Add Post
          </Button>
        </Link>
        <SortingDropdown />
      </Container>
      <AllPosts />
    </Grid.Column>
  </Grid>
);

export default HomePage;
