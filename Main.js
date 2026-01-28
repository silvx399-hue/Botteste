print("Olá!")
print(nome)

if idade >= 18:
    print("Você é maior de idade")
else:
    print("Você é menor de idade")

def saudar(nome):
    print(f"Olá, {nome}!")
saudar("Pedro")
saudar("Maria")


intents = discord.Intents.default()
intents.message_content = True

@client.event
async def on_message(message):
if message.author == client.user:
    return

if message.content.startswith('!oi'):
    await message.channel.send('Olá!')
