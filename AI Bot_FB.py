import fbchat
import getpass

username="dustinread71@gmail.com"

password=getpass.getpass('Mypass7108:')

client = fbchat.Client(password, username)

client.listen(client)
