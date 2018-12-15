#!/usr/bin/python

import cgi, cgitb

form = cgi.FieldStorage()

chemical_symbol = form.getvalue('chemical_symbol')

print "Content-type:text/html\r\n\r\n"
print "<html>"
print "<head>"
print "<title>Hello - Second CGI Program</title>"
print "</head>"
print "<body>"
print "<h2>Your chemical is %s</h2>" % (chemical_symbol)
print "</body>"
print "</html>"