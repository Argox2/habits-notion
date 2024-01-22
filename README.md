---
title: 'Notion Habits.'
date: '2024-01-20'
---

# Notion habits. 

He estado usando Notion ya hace un tiempo, y la verdad es que me gusta como herramienta, me gusta la versatilidad que puede tener. Me gusta que puedes hacer casi lo que sea y no tengo que estar usando 20 herramientas para 20 propositos diferentes.

En ese camino, de querer migrar toda mi vida a Notion, pues tambien tenia que hacerlo con mi tracker de habitos, que hasta ese momento habia sido [uhabits](https://github.com/iSoron/uhabits/), una aplicación para android que aunque me gustaba mucho (ya que tenia un sistema de score, que en mi opinión aunque simple, muy bueno), no era multiplataforma. 

Entonces este proyecto se trata de agregar una de las mejores funcionalidads de uhabits a Notion, al menos de manera externa, para poder saber el score de mis propios habitos.

El proyecto en realidad es muy simple, solo utilice [Notion SDK](https://github.com/makenotion/notion-sdk-js), el cliente oficial de Notion para obtener los datos de mi base de datos. 

Después de esto, solo era procesarlos para que fueran de utilidad, y pudieramos usarlo con la formula estadistica "exponential smoothing", esto nos permite ganar (o perder) momentum de manera más realista, haciendo que los resultados mas cercanos a hoy valgan más que los más lejanos. 

Gracias por leer. 
