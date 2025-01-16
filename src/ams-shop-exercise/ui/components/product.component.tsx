import {
  Button,
  Card,
  Center,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Space,
  Image,
  Text
} from "@mantine/core";
import { Product } from "../../lib/types";

export const ProductComponent = (props: {
  product?: Product;
  addProductToCart?: (id: number | undefined) => void;
}) => {
  const { product, addProductToCart } = props;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Center>
          <Image src={product?.thumbnail} h={300} w={300} />
        </Center>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product?.title}</Text>
        <Text fw={500}>$ {product?.price}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {product?.description}
      </Text>

      <Card.Section p={"lg"}>
        <Text size="lg" c="dimmed">
          Reviews
        </Text>
        <Space h={"lg"} />
        {product?.reviews?.map((review, index) => (
          <Container key={index}>
            <SimpleGrid>
              <Text>{review.comment}</Text>
              <Text size={"xs"}>{review.reviewerName}</Text>
              <Text size={"xs"}>{review.reviewerEmail}</Text>
            </SimpleGrid>
            <Space h={"lg"} />
            <Divider />
            <Space h={"lg"} />
          </Container>
        ))}
      </Card.Section>

      {addProductToCart && (
        <Button
          onClick={() => addProductToCart?.(product?.id)}
          color="blue"
          mt="md"
          radius="md"
        >
          Add to cart
        </Button>
      )}
    </Card>
  );
};
