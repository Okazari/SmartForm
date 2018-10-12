import React from 'react'
import { withStateHandlers, compose } from 'recompose'

const formDescription = {
  entities:  {
    title: {
      key: 'title',
      label: 'Title',
      type: 'String',
    }
  },
  steps: {
    entity: 'title',
    next: [{
      entity: 'title', next: [{
        entity: 'title', next: [{
          entity: 'title',
        }, {
            entity: 'title', next: [{
              entity: 'title', next: [{
                entity: 'title',
              }, {
                entity: 'title',
              }]
            }]
        }]
      },]
    },{
      entity: 'title',
    }]
  }
}

// getAdvices(formDescription, step)
const Field = ({ type, label }) => (
  <div>
    <input placeholder={label}/>
  </div>
)

const ReactSmartform = ({ step, onSelectStep, fields }) => (
  <div>
    Form
    {
      fields.map(({ type, label }) => <Field type={type} label={label} />)
    }
    {
      step.next && step.next.map(n => ({ ...n, ...formDescription.entities[n.entity] })).map((next) => (
        <div>
          <button onClick={() => onSelectStep(next)}>Add {next.label}</button>
        </div>
      ))
    }
    
  </div>
)

export default compose(
  withStateHandlers(
    () => ({ step: formDescription.steps, fields:[] }),
    {
      onSelectStep: ({ fields }) => step => ({ fields: [...fields, step], step }) 
    }
  )
)(ReactSmartform)