var PRICE = 9.99;
new Vue({
 el: '#app',
 data: {
  total: 0,
  items: [ 
     { id: 1, title: 'Item1' },
     { id: 2, title: 'Item2' },
     { id: 3, title: 'Item3' },
   ],
  cart: [],
  search: ''
 },
 methods: {
  onSubmit: function() {
    console.log('submitted...' + this.search );
    console.log('vue.resource' + this.$http );
  },
  addItem: function(index) {
    console.log('addItem ', + index);
    this.total += PRICE;
    var item = this.items[index];
    var found = false;
    for (var i=0; i<this.cart.length;i++){
      if (this.cart[i].id === item.id ) {
        found= true;
        this.cart[i].qty++;
        break;
      }
    }
    if (!found) {
     this.cart.push({
       id: item.id,
       title: item.title,
       qty: 1,
       price: PRICE
     });
    }
  },
  inc: function(item) {
   item.qty++;
   this.total += PRICE;
  },
  dec: function(item) {
   item.qty--;
   this.total -= PRICE;
   if ( item.qty <= 0 ) {
     for (var i=0 ; i< this.cart.length; i++) {
       if ( this.cart[i].id == item.id ) {
          this.cart.splice(i,1); //remove item from array 
          break;
       }
     } 
   }
  },
 },
 filters: {
   currency: function(price) {
     return '$'.concat(price.toFixed(2));
   }
 }
});
