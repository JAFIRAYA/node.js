


        const express=require('express')
        const app=express()
        const port=3001
        
   app.use(express.static('public'))
   app.use(express.urlencoded({ extended: true }));


   app.post('/add', (req, res) => {
    const item = req.body.item;
    const amount = req.body.amount;
    shoppingList.push({ item, amount });
    res.redirect('/shoppingList');
  });

  app.get('/shoppingList', (req, res) => {
    let items = '';
    shoppingList.forEach((entry) => {
      items += `<li>${entry.item} - ${entry.amount}</li>`;
    });
  
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Shopping List</title>
      </head>
      <body>
        <h1>Shopping List</h1>
        <ul>${items}</ul>
      </body>
      </html>
    `;
  
    res.send(html);
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });