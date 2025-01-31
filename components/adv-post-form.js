import AccordianItem from './accordian-item'
import * as Yup from 'yup'
import { Input } from './form'
import { InputGroup } from 'react-bootstrap'
import { BOOST_MIN } from '../lib/constants'

export const AdvPostSchema = {
  boost: Yup.number().typeError('must be a number')
    .min(BOOST_MIN, `must be at least ${BOOST_MIN}`).integer('must be whole')
}

export const AdvPostInitial = {
  boost: ''
}

export default function AdvPostForm () {
  return (
    <AccordianItem
      header={<div style={{ fontWeight: 'bold', fontSize: '92%' }}>options</div>}
      body={
        <Input
          label='boost'
          name='boost'
          hint={<span className='text-muted'>ranks posts higher temporarily based on the amount</span>}
          append={<InputGroup.Text className='text-monospace'>sats</InputGroup.Text>}
        />
      }
    />
  )
}
