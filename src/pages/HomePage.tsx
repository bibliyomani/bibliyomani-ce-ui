import React from 'react';
import { Card, Text, Button, Grid } from '@mantine/core';

const HomePage = () => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Text size="sm" color="dimmed">
            Book Upload
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            component="a"
            href="/upload"
          >
            Click
          </Button>
        </Card>
      </Grid.Col>
   </Grid>
  );
};

export default HomePage;
