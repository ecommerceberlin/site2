
const Settings = {

    visitor : {
        ticket_id : 1385,
        email_template : "ecommerceberlin-visitor-registration",
        background : "/static/lanyard.jpg",
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register"
    },

    common : {

        organizer_name : 'E-commerce Capitals Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznan, Jana Matejki 52/4',
        organizer_regno : 'VAT ID 7792439665',
        event_name : 'E-commerce Berlin Expo',
        event_location : 'STATION Berlin',
        event_date : '20th February 2019',
        event_hours : '10:00-17:00',

    },

    rolebuttons : [
        {
          url: 'https://static.eventjuicer.com/photos/12961446_1288640741145929_7684227399478032531_o.jpg',
          label: 'common.visitor1',
          width: '50%',
          onClick : "/visit"
        },
        {
          url: 'https://static.eventjuicer.com/photos/12967348_1288628734480463_3860331543127036065_o.jpg',
          label: 'common.exhibitor234',
          width: '50%',
          target : "/exhibit"
        },
    
    ],

    support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Lucas Zarna',
                position : 'Business Development Manager',
                langs : ["de"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1546386301/ecommerceberlin_support_lz.jpg',
                phone: '+49 157 7254 7327',
                email: 'lucas@ecommerceberlin.com',
                chatlio : true
            },
            {
                name: 'Peter Szczepaniak',
                position : 'Project Manager',
                langs : ["en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1546386405/ecommerceberlin_support_psz.jpg',
                phone: '+48 725 945 403',
                email: 'peter@ecommerceberlin.com',
                chatlio : true
            }
          ]
    },

    schedule : {
        times : {
            '10:30': 'presentation',
            '11:10': 'presentation',
            '11:50': 'presentation',
            '12:30': 'presentation',
            '13:00': 'break_20',
            '13:20': 'presentation',
            '14:00': 'presentation',
            '14:40': 'presentation',
            '15:20': 'presentation'
          },    
          venues : {
            A: { company_id: 1365 },
            B: { company_id: 1366 },
            C: { company_id: 1398 },
            D: { company_id: 1023 }
          },
          venueStyle : "gold",
    },
}

export default Settings;