import React from 'react'
import { Composition, Box } from 'atomic-layout'

import { Grid } from '../components/Grid'
import { TextLead } from '../components/TextLead'
import { Accent } from '../components/Accent'
import { Text } from '../components/Text'
import {
  ObliqueSection,
  ObliqueSectionContent,
} from '../components/ObliqueSection'

export const IncrementalDevelopment = () => {
  return (
    <ObliqueSection>
      <ObliqueSectionContent>
        <Grid>
          <Composition
            templateColsLg="repeat(2, 1fr)"
            alignItems="center"
            justifyItems="center"
            gap={64}
            paddingVertical={64}
            paddingVerticalMd={100}
            maxWidth="100%"
            width="80%"
            marginHorizontal="auto"
          >
            <Box order={1}>
              <p>Some image</p>
            </Box>
            <div>
              <h2>Develop incrementally</h2>
              <TextLead>
                Modern solution for <Accent>competitive development</Accent>.
              </TextLead>
              <Text color="gray">
                Present a fully functioning application or kick off the next
                successful startup without having any backend at all. RESTful
                API today, or GraphQL tomorrow? Experiment, combine, and find
                what suits your project best before committing to the ecosystem.
              </Text>
            </div>
          </Composition>
        </Grid>
      </ObliqueSectionContent>
    </ObliqueSection>
  )
}
