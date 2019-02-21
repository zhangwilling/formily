import { connect, registerFormField } from '@uform/react'
import { Checkbox } from '@alife/next'
import { mapStyledProps, mapTextComponent } from '../utils'

const { Group: CheckboxGroup } = Checkbox

registerFormField(
  'checkbox',
  connect({
    getProps: mapStyledProps,
    getComponent: mapTextComponent
  })(CheckboxGroup)
)
