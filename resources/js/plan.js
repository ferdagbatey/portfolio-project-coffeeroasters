$(document).ready(() => {
    const $toggle = $('.arrow');
    $toggle.removeClass('active');
    $('#taste').hide();
    $('#typeOfCoffe').hide();
    $('#amount').hide();
    $('#grindPref').hide();
    $('#deliveryPref').hide();
    // $('#arrow-grindPref').removeAttribute('onClick')
    // $('#arrow-grindPref').addAttribute('onClick')
    let taste = '';
    let typeOfCoff = '';
    let amount = '';
    let grindPref = '';
    let deliveryPref = '';

    document.querySelector('.menu-container').addEventListener('click', (event) => {
        $('.menu').toggle()

    })

   



    $toggle.on('click', function (event) {

        const sectionToToggle = $(event.currentTarget).parent()[0].id;
        // console.log(sectionToToggle)
        if (sectionToToggle === 'arrow-taste') {

            $('#taste').toggle()
        } else if (sectionToToggle === 'arrow-typeOfCoffe') {
            $('#typeOfCoffe').toggle()
        } else if (sectionToToggle === 'arrow-amount') {
            $('#amount').toggle()
        } else if (sectionToToggle === 'arrow-grindPref') {
            $('#grindPref').toggle()
        } else if (sectionToToggle === 'arrow-deliveryPref') {
            $('#deliveryPref').toggle()
        }
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });


    //change background after selection

    $('.order-items').on('click', (event) => {
        const selection = $(event.currentTarget).siblings();
        $(event.currentTarget).css('background-color', '#0E8784');
        // console.log($(event.currentTarget).css('background-color'))
        $(selection[0]).css('background-color', '#F4F1EB');
        $(selection[1]).css('background-color', '#F4F1EB');



        // if capsule is selected

        if ($(event.currentTarget).children()[0].innerText === 'Capsule') {

            $("#arrow-grindPref-onclick").css("pointer-events", "none");
            $("#grind-nav").css("pointer-events", "none");

            grindPref = ''
            document.getElementById('coffee-grind').innerText = grindPref;
            document.getElementById('grind-off').innerText = ''
        } else if (($(event.currentTarget).children()[0].innerText === 'Filter') || ($(event.currentTarget).children()[0].innerText === 'Espresso')) {

            $("#arrow-grindPref-onclick").css("pointer-events", "auto");
            $("#grind-nav").css("pointer-events", "auto");
            document.getElementById('grind-off').innerText = 'ground ala'

        }

    

            // setting cost
        const weight = $(event.currentTarget).children()[0].innerText;
        if (weight === '250g') {
            document.getElementById('weekCost').textContent = '$7.20';
            document.getElementById('twoWeeksCost').textContent = '$9.60';
            document.getElementById('monthCost').textContent = '$12.00';
        } else if (weight === '500g') {
            document.getElementById('weekCost').textContent = '$13.00';
            document.getElementById('twoWeeksCost').textContent = '$17.50';
            document.getElementById('monthCost').textContent = '$22.00';
        } else if (weight === '1000g') {
            document.getElementById('weekCost').textContent = '$22.00';
            document.getElementById('twoWeeksCost').textContent = '$32.00';
            document.getElementById('monthCost').textContent = '$42.00';
        }
        const weeks = ($(event.currentTarget).children()[0].innerText);
        console.log(weeks)
        if (weeks === 'Every week' || weeks === 'Every 2 weeks' || weeks === 'Every month') {
            let amt = ($(event.currentTarget).children().children()[0].innerText).split('');
            console.log(amt)
            let finalAmt = [];
            for (let i = 0; i < amt.length; i++) {
                if (amt[i] !== '$') {
                    finalAmt.push(amt[i]);
                }
            }

            finalAmt = finalAmt.join('')
            finalAmt = parseFloat(finalAmt)
            console.log(finalAmt)
            if (weeks === 'Every week') {
                document.getElementById('cost').textContent = `$${finalAmt * 4}/mo`;
            } else if (weeks === 'Every 2 weeks') {
                document.getElementById('cost').textContent = `$${finalAmt * 2}/mo`;
            } else if (weeks === 'Every month') {
                document.getElementById('cost').textContent = `$${finalAmt * 1}/mo`;
            }
            if (screen.width <= 480) {
                document.getElementById('checkOut').innerText = `Checkout - ${document.getElementById('cost').textContent}`
            }

        }
      
       



              // settting summary
        if ($(event.currentTarget).parent()[0].id === 'taste') {
            taste = $(event.currentTarget).children()[0].innerText;
        } else if ($(event.currentTarget).parent()[0].id === 'typeOfCoffe') {
            typeOfCoff = $(event.currentTarget).children()[0].innerText;
        } else if ($(event.currentTarget).parent()[0].id === 'amount') {
            amount = $(event.currentTarget).children()[0].innerText;
        } else if ($(event.currentTarget).parent()[0].id === 'grindPref') {
            grindPref = $(event.currentTarget).children()[0].innerText;
        } else if ($(event.currentTarget).parent()[0].id === 'deliveryPref') {
            deliveryPref = $(event.currentTarget).children()[0].innerText;
        }


        
        if (taste !== '') {
            document.getElementById('coffee-taste').innerText = taste;
        }
        if (typeOfCoff !== '') {
            
            document.getElementById('coffee-type').innerText = typeOfCoff;
        }
        if (amount !== '') {
            document.getElementById('coffee-quantity').innerText = amount;
        }
        if (grindPref !== '')
        {
            document.getElementById('coffee-grind').innerText = grindPref;
        }
        if (deliveryPref !== '') {
            document.getElementById('coffee-times').innerText = deliveryPref;
        }
        
        if (taste !== '' && typeOfCoff !== '' && amount !== ''  && deliveryPref !== '') {
            $('#createPlan').prop("disabled", false);
        } else {
            $('#createPlan').prop("disabled", true);
       }
       
      

     


       

    })










    $('.order-items').on('mouseenter', (event) => {
        if ($(event.currentTarget).css('background-color') !== 'rgb(14, 135, 132)') {
            $(event.currentTarget).css('background-color', '#FDD6BA')
        }

    });

    $('.order-items').on('mouseleave', (event) => {
        if ($(event.currentTarget).css('background-color') !== 'rgb(14, 135, 132)') {
            $(event.currentTarget).css('background-color', '#F4F1EB')
        }

    });


    //navigate sections
    
    $('.pageNav').on('click',(event) => {
        const selection = $(event.currentTarget).children();



        $(event.currentTarget).css('color', '#333D4B');
        // console.log($(event.currentTarget).css('color'))

        if (selection[0].innerText === '01') {
            // $('#taste').toggle()
            $($('#arrow-taste').children()[0]).trigger('click');
        } else if (selection[0].innerText === '02') {
            // $('#typeOfCoffe').toggle()
            $($('#arrow-typeOfCoff').children()[0]).trigger('click');
        } else if (selection[0].innerText === '03') {
            $($('#arrow-amount').children()[0]).trigger('click');
            // $('#amount').toggle()
        } else if (selection[0].innerText === '04') {
            // $('#grindPref').toggle()
            $($('#arrow-grindPref').children()[0]).trigger('click');
        } else if (selection[0].innerText === '05') {
            $($('#arrow-deliveryPref').children()[0]).trigger('click');
            // $('#deliveryPref').toggle()
        }
        // document.getElementById('summaryText').textContent = document.getElementById('order-summary-text').textContent;

    })

    // Creating a plan

    $('#createPlan').on('click', () => {
        console.log(document.getElementById('order-summary-text'))
        $('.popupOverlay, .popupContent').addClass('active');
        
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        const summary = document.getElementById('order-summary-text');
        document.getElementById('summaryText').appendChild(summary)
       
    });
 
    $('#checkOut').on('click', () => {
        $('.popupOverlay, .popupContent').removeClass('active');
    })
   
});



function myFunction(x) {
    x.classList.toggle("change");

}