---
to: _templates/<%= name %>/<%= action || 'new' %>/hello.ejs.t
---
---
to: app/hello.js
---
const hello = ```
Hello!
This is your first prompt based hygen template.

Learn what it can do here:
<%= name %>
https://github.com/jondot/hygen
```

console.log(hello)


