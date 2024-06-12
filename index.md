---
layout: default
---

---

A place all for me to just ramble and rant. And you've come across this place. How unfortunate of you.

---

|   test   |     test     |
|:--------:|:------------:|
|  `code`  |  ```code```  |
|  `code`  |    `code`    |
|  `code`  |    `code`    |

The usual [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
does not cover some of the more advanced Markdown tricks, but here
is one. You can combine verbatim HTML with your Markdown. 
This is particularly useful for tables.
Notice that with **empty separating lines** we can use Markdown inside HTML:

<table>
<tr>
<th>Json 1</th>
<th>Markdown</th>
</tr>
<tr>
<td>
<pre>
{
"id": 1,
"username": "joe",
"email": "joe@example.com",
"order_id": "3544fc0"
}
</pre>
</td>
<td>
<pre>
{
"id": 1,
"username": "joe",
"email": "joe@example.com",
"order_id": "3544fc0"
}
</pre>
</td>
</tr>
</table>

```
{
  "id": 5,
  "username": "mary",
  "email": "mary@example.com",
  "order_id": "f7177da"
}
```