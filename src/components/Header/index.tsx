import {Flex, useBreakpointValue, IconButton, Icon} from "@chakra-ui/react";
import {RiMenuLine} from "react-icons/ri";
import {useSidebarDrawer} from "../../context/SidebarDrawerContext";
import {Logo} from "../Header/Logo";
import {NotificationsNav} from "../Header/NotificationsNav";
import {Profile} from "../Header/Profile";
import {SearchBox} from "../Header/SearchBox";

export function Header() {
  const {onOpen} = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
