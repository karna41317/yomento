#!/usr/bin/env python

import sys
import re

RE_SUBJECT_LINE = re.compile(r'^(\d+)~~~~~[\s*]*(.+)')
RE_BODY_LINE = re.compile(r'^[\s*]*(.+)')

items = []
for line in sys.stdin:
  m = RE_SUBJECT_LINE.match(line)
  if m:
    items.append({'ts': int(m.group(1)), 'lines': []})
    subject = m.group(2).strip()
    if subject != '':
      items[-1]['lines'].append(subject)
    continue
  m = RE_BODY_LINE.match(line)
  if m:
    body = m.group(1).strip()
    if body != '':
      items[-1]['lines'].append(body)

for item in sorted(items, key=lambda i: i['ts'], reverse=True):
  print '* %s' % '\n'.join(item['lines'])
