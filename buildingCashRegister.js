/*

But this method only works as long as you can remember the cost of every item in the store.
We need something like a bar code scanner where just knowing the item name will automatically add the cost of that item to the total.

So we create a method called scan. This method takes some item parameter, and adds the cost of this item to the total. item is a string.

We also use a switch statement. Previously, we would have probably used multiple if-else statements. Here, things work in a similar way.

For example, if the item is "eggs" (line 8), we then call the add method, passing through 0.98 as the itemCost.
This will add 0.98 to cashRegister.total. If instead the item is "milk" or "chocolate" or "magazine", the relevant itemCost is added.
Note no default case is needed for this switch statement.

Instructions

Write the add method which has a single parameter, itemCost. It will add the itemCost to the total.
We have partially written the scan method for you and started a switch statement. Add the following 2 items to the switch statement:
"magazine", 4.99
"chocolate", 0.45
Finally, use the scan method to buy "eggs" twice and a "magazine" three times.

*/


var cashRegister = {
    total: 0,
//insert the add method here
    add: function(item) {
        this.total += item;
    },

    scan: function (item) {
        switch (item) {
        case "eggs":
            this.add(0.98);
            break;

        case "milk":
            this.add(1.23);
            break;

        case "magazine":
            this.add(4.99);
            break;

        case "chocolate":
            this.add(0.45);
            break;

        }
        return true;
    }
};

//Scan 2 eggs and 3 magazines
cashRegister.scan('eggs');
cashRegister.scan('eggs');
cashRegister.scan('magazine');
cashRegister.scan('magazine');
cashRegister.scan('magazine');

//Show the total bill
console.log('Your bill is '+cashRegister.total);



/*
Instructions
Modify the scan method such that if we tell it the quantity of each item, it will be able to add
the right amount to the total. Since you currently tell scan nothing about quantity, it may be useful to create another parameter.

Scan 4 of each item using your improved scan method. Previously we would have needed to call scan 16 times! Now it is down to 4.
*/


var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item, numItem) {
        switch (item) {
        case "eggs": this.add(0.98 * numItem); break;
        case "milk": this.add(1.23 * numItem); break;
        case "magazine": this.add(4.99 * numItem); break;
        case "chocolate": this.add(0.45 * numItem); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan('eggs', 4);
cashRegister.scan('milk', 4);
cashRegister.scan('magazine', 4);
cashRegister.scan('chocolate', 4);


//Show the total bill
console.log('Your bill is '+cashRegister.total);


/*
Now that we have our objects representing the staff, lets update our cash register to actually apply the discount.

Instructions
On line 10 create a new object called me of type StaffMember for yourself with a staff discount of 20%

Create a new method called applyStaffDiscount in the cashRegister object which accepts a parameter employee.
When this method is called, cashRegister should apply the staff member's discountPercent to total.

Under the comment, 'Apply your staff discount by passing the me object, call your new applyStaffDiscount and pass the object me.

*/


function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Mario", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(employee){
        //we need to divide by 100 because we need to convert our percentage into a decimal fraction
        this.total -= this.total*(employee.discountPercent / 100);
    }

};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
