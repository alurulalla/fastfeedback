import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react';
import { LogoIcon } from '@/styles/theme';
import { useAuth } from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection="row"
        backgroundColor="white"
        justifyContent="space-between"
        alignItems="center"
        py={4}
        px={8}
      >
        <Stack spacing={4} isInline justifyContent="center" align="center">
          <LogoIcon fontSize="24px" />
          <Link display="block">Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Flex justifyContent="center" alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Flex>
      </Flex>
      <Flex flexDirection="row" backgroundColor="gray.100" p={8} height="100vh">
        <Flex maxWidth="800px" w="100%" ml="auto" mr="auto" direction="column">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Breadcrumb>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink color="gray.700" fontSize="sm">
                  Sites
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbItem>
                <BreadcrumbLink></BreadcrumbLink>
              </BreadcrumbItem> */}
            </Breadcrumb>

            <Heading pb={4}>Sites</Heading>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
