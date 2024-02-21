
const seatsbtn = document.getElementsByClassName("seats-btn");
let count = 0;

for (const btn of seatsbtn) {
    btn.addEventListener("click", function (e) {
        if (count < 4) {
            alert;
        }
        // seats left
        const seatsLeft = document.getElementById('seat-left');
        const seatsLeftNumber = seatsLeft.innerText;
        let covertedSeatsLeft = parseInt(seatsLeftNumber);
        setInnertext('seat-left', covertedSeatsLeft - 1);

        // selected btn
        btn.style.backgroundColor = '#1DD100';
        // id="add-seat"
        count = count + 1;
        setInnertext('add-seat', count);

        const perSeat = document.getElementById('perseat').innerText;

        const appendElement = document.getElementById('dynamic-append');
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between')
        li.innerHTML = `<p>${btn.innerText}</p> <p>Economoy</p> <p>${perSeat}</p>`;

        // total-price
        const totalPrice = document.getElementById('total-price').innerText;
        let totalConvertedPrice = parseInt(totalPrice) + parseInt(perSeat);
        setInnertext('total-price', totalConvertedPrice);



     

        document.getElementById('Coupon-input-btn').addEventListener("click", function () {
            const newDiscount = document.getElementById('new-15').innerText;
            const coupleDiscounted = document.getElementById('couple-20').innerText;
            const couponInput = document.getElementById('Coupon-input').value;
            //    grand-total
            const grandTotal = document.getElementById('grand-total').innerText;

            if ( newDiscount  === couponInput ) {               
                let discount = totalConvertedPrice * 15 / 100;
                let afterDiscount = totalConvertedPrice - discount;
                setInnertext('grand-total', afterDiscount);
            } else if (coupleDiscounted === couponInput){
                let discount = totalConvertedPrice * 20 / 100;
                let afterDiscount = totalConvertedPrice - discount;
                setInnertext('grand-total', afterDiscount);
            }
               
 
            
        })

        setInnertext('grand-total', totalConvertedPrice);

        // console.log(typeof grandTotal);

        appendElement.appendChild(li);

    });
}



function setInnertext(id, value) {
    document.getElementById(id).innerText = value;
}