
import React, { useState } from "react"
import { Box, Flex, Stack, Text, HStack, Spacer, Button } from "@chakra-ui/react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

const addDays = (date, days) => {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

const isSameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const presets = (() => {
  const now = new Date()
  return [
    { label: "Today", value: now },
    { label: "Tomorrow", value: addDays(now, 1) },
    { label: "Next week", value: addDays(now, 7) },
    { label: "2 weeks", value: addDays(now, 14) },
    { label: "4 weeks", value: addDays(now, 28) },
  ]
})()

export default function DatePicker() {
  const [selected, setSelected] = useState(new Date())

  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <Flex>
        <Stack gap={0} minW="100px" borderRightWidth="1px" py={2} px={2}>
          {presets.map((preset) => {
            const active = isSameDay(preset.value, selected)
            return (
              <Button
                key={preset.label}
                onClick={() => setSelected(preset.value)}
                justifyContent="space-between"
                variant={active ? "solid" : "ghost"}
                size="sm"
                height="10"
                display="flex"
              >
                <Text>{preset.label}</Text>
                <Text color="gray.500" fontSize="sm">
                  {preset.value.toLocaleDateString()}
                </Text>
              </Button>
            )
          })}
        </Stack>

        <Box p={3}>
          <HStack justify="space-between" gap={0} mb={2}>
            <Text fontWeight="medium">{selected.toLocaleDateString()}</Text>
            <Spacer />
          </HStack>

          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        </Box>
      </Flex>
    </Box>
  )
}
