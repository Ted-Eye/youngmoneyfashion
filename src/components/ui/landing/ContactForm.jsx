import {
    Button,
    Field,
    Fieldset,
    For,
    Input,
    NativeSelect,
    Stack,
    Textarea,
} from "@chakra-ui/react"


export const ContactForm = () => {
    return (
        <Fieldset.Root size="lg" maxW="md" border={'solid 1px #c8640c50'} p={4} borderRadius={4} bg={'#11183c76'}>
        <Stack>
            <Fieldset.Legend>We'd love to hear from you!</Fieldset.Legend>
            <Fieldset.HelperText>
            Leave us a message and we'll get back to you as soon as possible.
            </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
            <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input name="name" />
            </Field.Root>

            <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input name="email" type="email" />
            </Field.Root>

            <Field.Root>
            <Field.Label>City</Field.Label>
            <NativeSelect.Root>
                <NativeSelect.Field name="country" pl={4}>
                <For each={["Yaounde", "Douala", "Bafoussam", "Garoua", "Maroua", "Bamenda", "Ebolowa", "Bertoua", "Ngaoundere", "Kumba", "Loum", "Kribi", "Buea", "Foumban", "Dschang", "Nkongsamba", "Bafia", "Yagoua", "Mbalmayo", "Tiko"]}>
                    {(item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                    )}
                </For>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>
            </Field.Root>
            <Field.Root>
                <Field.Label>Type your message</Field.Label>
                <Textarea name="notes" />
            </Field.Root>
        </Fieldset.Content>

        <Button type="submit" colorScheme={'orange'} fontWeight={'bold'} border={'solid 1px #f397036c'} bg={'white'} color ={'black'}borderRadius={'25px'} px={4} variant={'outline'} mt={4}>
            Send message
        </Button>
        </Fieldset.Root>
    )
    }
