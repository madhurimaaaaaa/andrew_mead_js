

let restaurant = {
    name: 'N Nepal',
    guestCapacity: 70,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsAvailable = this.guestCapacity - this.guestCount
        return partySize <= seatsAvailable
    },
    seatParty: function (partySize) {
        this.guestCount = partySize + this.guestCount

    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount -partySize
    }


}
restaurant.seatParty(68)
console.log(restaurant.checkAvailability(4)) 
restaurant.removeParty(6)
console.log(restaurant.checkAvailability(4))
