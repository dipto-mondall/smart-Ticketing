
const seatsbtn = document.getElementsByClassName("seats-btn");
let count = 0;


for (const btn of seatsbtn) {
    btn.addEventListener("click", function (e) {
        btn.setAttribute("disabled", true);
        if (count === 4) {
            alert("Already you selected 4seats ticket!")
            document.getElementsByClassName("seats-btn").setAttribute("disabled", true);


        }

        // selected btn
        btn.style.backgroundColor = '#1DD100';




        // seats left
        const seatsLeft = document.getElementById('seat-left');
        const seatsLeftNumber = seatsLeft.innerText;
        let covertedSeatsLeft = parseInt(seatsLeftNumber);
        setInnertext('seat-left', covertedSeatsLeft - 1);



        // id="add-seat"
        count = count + 1;

        setInnertext('add-seat', count);
        // for (let count = 0; count <= 5; count++) {
        //     alert();


        // }

        const perSeat = document.getElementById('perseat').innerText;

        const appendElement = document.getElementById('dynamic-append');
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between');
        li.innerHTML = `<p>${btn.innerText}</p> <p>Economoy</p> <p>${perSeat}</p>`;

        // total-price
        const totalPrice = document.getElementById('total-price').innerText;
        let totalConvertedPrice = parseInt(totalPrice) + parseInt(perSeat);
        setInnertext('total-price', totalConvertedPrice);

        let grandTotal = totalConvertedPrice;
        setInnertext('grand-total', grandTotal);


        document.getElementById('Coupon-input-btn').addEventListener("click", function () {
    
            const finalGrandtotal = grandTotal;
            console.log(finalGrandtotal)
            const newDiscount = document.getElementById('new-15').innerText;
            const coupleDiscounted = document.getElementById('couple-20').innerText;
            const couponInput = document.getElementById('Coupon-input').value;
            //    grand-total
            const grandTotal2 = document.getElementById('grand-total').innerText;

            if (newDiscount === couponInput) {
                let discount = totalConvertedPrice * 0.15;
                let afterDiscount = totalConvertedPrice - discount;
                
                console.log(discount);

                setInnertext('grand-total', afterDiscount);
                document.getElementById('discount-input-container').classList.add('hidden');
            } else if (coupleDiscounted === couponInput) {
                let discount = totalConvertedPrice * 0.2;
                let afterDiscount = totalConvertedPrice - discount;

                setInnertext('grand-total', afterDiscount);
                document.getElementById('discount-input-container').classList.add('hidden');
            }


        });

        // console.log(typeof grandTotal);

        appendElement.appendChild(li);
  
        grandTotal(grandTotal);

    });
}





document.getElementById('next').addEventListener("click", function () {
    window.location.reload();
})

function setInnertext(id, value) {
    document.getElementById(id).innerText = value;
}