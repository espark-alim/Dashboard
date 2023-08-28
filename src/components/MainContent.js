import React from 'react';
import { Box, Card, CardBody, CardHeader, Container, HStack, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';

const MainContent = () => {
  return (
    <Container
      maxW="xl"
      p={0}
      m={0}
    >

      <Box bg="white" p={4} shadow="md">

        <Card>
          <CardHeader>
            <Heading size='md'>Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
      <Box bg="white" p={4} shadow="md">
        {/* Your dashboard content goes here */}
        <Card>
          <CardHeader>
            <Heading size='md'>Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
      <Box bg="white" p={4} shadow="md">
        {/* Your dashboard content goes here */}
        <Card>
          <CardHeader>
            <Heading size='md'>Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Summary
                </Heading>
                <Text pt='2' fontSize='sm'>
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Overview
                </Heading>
                <Text pt='2' fontSize='sm'>
                  Check out the overview of your clients.
                </Text>
              </Box>
              <Box>
                <Heading size='xs' textTransform='uppercase'>
                  Analysis
                </Heading>
                <Text pt='2' fontSize='sm'>
                  See a detailed analysis of all your business clients.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Container>
  );
};

export default MainContent;