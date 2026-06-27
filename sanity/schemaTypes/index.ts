import { type SchemaTypeDefinition } from 'sanity'

import { serviceImageType } from './serviceImageType'
import { brandLogoType } from './brandLogoType'
import { testimonialType } from './testimonialType'
import { blogType } from './blogType'
import { teamMemberType } from './teamMemberType'
import { leadType } from './leadType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceImageType, brandLogoType, testimonialType, blogType, teamMemberType, leadType],
}

