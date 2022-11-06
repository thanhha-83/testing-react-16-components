import Message from './Message'

describe('Message', () => {
  it('should always render the message', () => {
    const notImportantMsg = Message({
      content: 'I see everything twice',
      isImportant: false
    })
    expect(notImportantMsg.props.children.props.children)
      .toBe('I see everything twice')
    const importantMsg = Message({
      content: 'I see everything twice',
      isImportant: true
    })
    expect(importantMsg.props.children.props.children)
      .toBe('I see everything twice')
  })

  it('should make important message strong', () => {
    const importantMsg = Message({
      content: 'I see everything twice',
      isImportant: true
    })
    expect(importantMsg.props.children.type).toBe('strong')
  })

  it('should not make important message strong', () => {
    const notImportantMsg = Message({
      content: 'I see everything twice',
      isImportant: false
    })
    expect(notImportantMsg.props.children.type).not.toBe('strong')
  })
})