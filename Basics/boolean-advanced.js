let isGuestOneVegan = true
let isGuestTwoVegan = true

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer up vegan dishes')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer some vegan options')
}
else {
    console.log('Offer up anything on the menu')
}