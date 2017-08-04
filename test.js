var test = require('tape')
var noope = require('./')

test('noope', t=> {
  t.ok(noope, 'exists')
  t.end()

  t.test('should trace when called', t=> {
    t.end(noope('foo', 'bar', 'baz'))
  })
})

