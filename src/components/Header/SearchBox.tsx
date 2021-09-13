import {Flex, Icon, Input} from "@chakra-ui/react";
import {RiSearchLine} from "react-icons/ri";
import {useRef} from "react";

export function SearchBox() {
  // const [search, setSearch] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{color: "gray.300"}}
        ref={searchInputRef}
        px="4"
        mr="4"
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
