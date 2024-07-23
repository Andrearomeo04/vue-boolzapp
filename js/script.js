const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: "Michele",
                    avatar: "./img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "15:30",
                            message: "Hai portato a spasso il cane?",
                            status: "sent"
                        },
                        {
                            date: "15:50",
                            message: "Ricordati di stendere i panni",
                            status: "sent"
                        },
                        {
                            date: "16:15",
                            message: "Tutto fatto!",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Fabio",
                    avatar: "./img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "16:30",
                            message: "Ciao come stai?",
                            status: "sent"
                        },
                        {
                            date: "16:30",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received"
                        },
                        {
                            date: "16:35",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Samuele",
                    avatar: "./img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10:10",
                            message: "La Marianna va in campagna",
                            status: "received"
                        },
                        {
                            date: "10:20",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },
                        {
                            date: "16:15",
                            message: "Ah scusa!",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Alessandro B.",
                    avatar: "./img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "15:30",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },
                        {
                            date: "15:50",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Alessandro L.",
                    avatar: "./img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "15:30",
                            message: "Ricordati di chiamare la nonna",
                            status: "sent"
                        },
                        {
                            date: "15:50",
                            message: "Va bene, stasera la sento",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Claudia",
                    avatar: "./img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "15:30",
                            message: "Ciao Claudia, hai novità?",
                            status: "sent"
                        },
                        {
                            date: "15:50",
                            message: "Non ancora",
                            status: "received"
                        },
                        {
                            date: "15:51",
                            message: "Nessuna nuova, buona nuova",
                            status: "sent"
                        }
                    ]
                },
                {
                    name: "Federico",
                    avatar: "./img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "15:30",
                            message: "Fai gli auguri a Martina che è il suo compleanno!",
                            status: "sent"
                        },
                        {
                            date: "15:50",
                            message: "Grazie per avermelo ricordato, le scrivo subito!",
                            status: "received"
                        }
                    ]
                },
                {
                    name: "Davide",
                    avatar: "./img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "15:30",
                            message: "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received"
                        },
                        {
                            date: "15:50",
                            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: "sent"
                        },
                        {
                            date: "15:51",
                            message: "OK!!",
                            status: "received"
                        }
                    ]
                }
            ],
            textmessage: '',
            activeIndex: 0,
            me:{
                    name: "Sofia",
                    avatar: "./img/avatar_io.jpg",
                },
                searchContact: '',
            filteredContacts: []
        }
    },
    methods: {
        selectactivecontact(index) {
            this.activeIndex = index
        },

        // date function
        getCurrentTime() {
            let now = new Date();
            let hour = now.getHours();
            let minute = now.getMinutes();
            return `${hour}:${minute}`
        },

        // send a new message function
        newMessage() {
            setTimeout(() => {
                let botMessage = {
                    date: this.getCurrentTime(),
                    message: 'ok',
                    status: "received"
                }
                this.contacts[this.activeIndex].messages.push(botMessage)
            }, 1000);
            
            if (this.textmessage !== '') {
                let newMessage = {
                    date: this.getCurrentTime(),
                    message: this.textmessage,
                    status: "sent"
                }
                this.contacts[this.activeIndex].messages.push(newMessage)
                this.textmessage = ''
            }
        },

        // filter contacts function
        filterContacts() {
            if (this.searchContact === '' || this.searchContact === ' ') {
                this.filteredContacts = this.contacts;
            } else {
                this.filteredContacts = this.contacts.filter(contact => 
                    contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
                );
            }
        },

        // cut message function
        dottedmsg(message) {
            const maxLength = 35
            if (message.length > maxLength) {
                return message.substring(0, maxLength) + '...';
            }
            return message;
        }
    },
    mounted() {
        this.filteredContacts = this.contacts
    }
}).mount('#app')