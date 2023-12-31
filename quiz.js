const maintext = document.getElementById('text')
const Buttons = document.getElementById('option-buttons')
const image = document.getElementById('img');


let state = {} 

function startGame () {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = Choice.find(textNode => textNode.id === textNodeIndex);
    maintext.innerText = textNode.text;

    if (textNode.img) {
        image.src = textNode.img;
        image.style.display = 'block';
    } else {
       image.style.display = 'none';
    }

    while (Buttons.firstChild) {
        Buttons.removeChild(Buttons.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            Buttons.appendChild(button);
        }
    });
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state);
}


function selectOption (option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
      return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId); 

}



const Choice = [
    {
        id: 1,
        img: 'images/1.jpg', 
        text: 'Вы много работали и очень устали. Наступил август и время отпуска. В какую страну вы полетите на отдых?',
        options: [
            {
                text: 'Китай',
                nextText: 2
            },
            {
                text: 'Турция',
                nextText: 3
            },
            {
                text: 'Франция',
                nextText: 4
            },
            {
                text: 'Англия',
                nextText: 5
            },


        ]
    }, 
    {
        id: 2,
        img: 'images/2.jpg',
        text:  'Вы решили полететь в Китай. Вы не знаете их языка, что будете делать?',
        options: [
            {
                text: 'Буду использовать онлайн переводчик',
                nextText: 6
            },
            {
                text: 'Потрачу деньги и найду переводчика',
                nextText: 7
            },
        ]
    },
    {
        id: 3,
        img: 'images/3.jpg',
        text:  'Вы полетели в Турцию. Чем бы вы занялись в первую очередь?',
        options: [
            {
                text: 'Пойду на пляж',
                nextText: 8
            },
            {
                text: 'Буду изучать достопримечательности',
                nextText: 9
            },

        ]
    },
    {
        id: 4,
        img: 'images/4.jpg',
        text:  'Вы выбрали отдохнуть во Франции. Чем займетесь?',
        options: [
            {
                text: 'Конечно пойду к Эйфелевой башне, там сейчас будут проходить Олимпийские игры',
                nextText: 10
            },
            {
                text: 'Я ценитель искусства, поэтому пойду в Лувр',
                nextText: 11
            },
        ]
    },
    {
        id: 5,
        img: 'images/5.jpg',
        text:  'Вы прилетили в Лондон. Вам не повезло с погодой: было дождливо и туманно. Что будете делать?',
        options: [
            {
                text: 'Остаться номере отеля и смотреть фильмы',
                nextText: 12
            },
            {
                text: 'Все равно пойдете гулять',
                nextText: 13
            },
        ]
    },
    {
        id: 6,
        img: 'images/6.jpg',
        text:  'Так как вы не знали китайского языка и у вас был только онлайн переводчик. Вам было тяжело ориентироваться в городе, вы множество раз заблудились и потратили много времени в пустую. Поездка была ужасной, отпуск не удался. Вы не отдохнули, а вам вновь нужно идти на работу.',
        options: [
            {
                text: 'Начать заново',
                nextText: 1
            },
        ]
    },
    {
        id: 7,
        img: 'images/7.jpg',
        text:  'Вы не знаете китайский, и решили потратить деньги на переводчика. Это вам облегчило задачу и сэкономило много времени. Чем бы вы хотели заняться?',
        options: [
            {
                text: 'Увидеть Великую Китайскую стену',
                nextText: 14
            },

            {
                text: 'Познакомиться с кем-нибудь',
                nextText: 15
            }
        ]
    },
    {
        id: 8,
        img: 'images/8.jpg',
        text:  'Вы пошли на пляж. Здесь собралась много туристов. Кто-то купался, кто-то загорал. А чем вы займетесь? ',
        options: [
            {
                text: 'Пойду плавать',
                nextText: 16
            },
            {
                text: 'Буду загорать',
                nextText: 19
            },
        ]
    },
    
    {
        id: 9,
        img: 'images/9.jpg',
        text:  'Вы решили погулять по городу. Неожиданно вы видите своего любимого турецкого актера. Ваши действия?', 
        options: [
            {
                text: 'Подойду сделать селфи',
                nextText: 20
            },
            {
                text: 'Постесняюсь подойти',
                nextText: 21
            },
        ]
    },
    {
        id: 10,
        img: 'images/10.jpg',
        text:  'Вы пришли к набережной Сены. Здесь было много людей. Все пришли посмотреть на самое главное спортивное мероприятие. Чем бы вы хотели заняться?',
        options: [
            {
                text: 'Посмотреть соревнования по волейболу',
                nextText: 24
            },
            {
                text: 'Пообщаться с людьми',
                nextText: 25
            },
        ] 
    },
    {
        id: 11,
        img: 'images/11.jpg',
        text:  'Вы пошли в Лувр. Здесь вы увидели все известные картины, вас поразило увиденное. Но когда вы собирались уходить, вы заметили двух странных людей, которые вели себя подозрительно. Ваши действия? ', 
        options: [
            {
                text: 'Сообщить охране',
                nextText: 22
            },
            {
                text: 'Ничего не делать',
                nextText: 23
            },
        ]
    },
    {
        id: 12,
        img: 'images/12.jpg',
        text:  'Вы остались в номере, решили посмотреть фильм и пойти спать. На следующий день погода стала лучше вы отправились смотреть достопремичательности города. Проходив весь день по известным местам Англии, куда пойдете провести вечер пятницы?', 
        options: [
            {
                text: 'Пойти в библиотеку',
                nextText: 26
            },
            {
                text: 'Пойти в ирландский паб',
                nextText: 27
            },

        ]
    },
    {
        id: 13,
        img: 'images/13.jpg',
        text:  'Вы решили погулять в такую ужасную погоду. Это было ошибкой: на следующий день вы заболели, и вам пришлоь провести весь отпуск в комнате отеля. Отпуск провалился.', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ]
    },
    {
        id: 14,
        img: 'images/14.jpg',
        text:  'Вы посители одно из самых длинных сооружений, прошли много километров пешком. Вы узнали много нового об истории Китая. Вас настолько заинтересовала данная культура, что после поездки вы решили выучить китайский', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ]
    },
    {
        id: 15, 
        img: 'images/15.jpg',
        text: "Вы решили познакомиться познакомиться с местными жителями. Китайцы оказались очень приветливыми и с радостью общались с вами. Благодаря таким знакомствам, вы узнали много нового о Китае, и вы получили много советов, что можно посетить в Китае. Теперь в следующий раз, когда вы поедете сюда, вы точно будете знать, куда можно сходить",
        options: [
            {
                text: 'начать сначала',
                nextText: 1
            },
        ]
    }, 
    {
        id: 16, 
        img: 'images/16.jpg',
        text: "Вы решили поплавать. Вода была теплой и приятной. Вы не замечали ничего вокруг, вам было хорошо. Но неожидано вы случайно врезались в одного туриста. Как поступите?",
        options: [
            {
                text: 'Извинюсь, и немного поболтаю с ним',
                nextText: 17
            },
            {
                text: 'Извинюсь, и продолжу плавать',
                nextText: 18
            },
        ]
    }, 
    {
        id: 17, 
        img: 'images/17.jpg',
        text: "Человек, которого вы чуть не сбили, оказался очень приятным и веселым. Вы еще долго разговаривали, у вас было много общего. Вы нашли нового друга, вы провели весь отпуск с ним. ",
        options: [
            {
                text: 'Начать сначала',
                nextText: 1
            },
        ]
    },
    {
        id: 18,
        img: 'images/18.jpg',
        text:  'Вы не особо ищите компанию, весь оставшийся отпуск вы провели наслаждаясь теплом Турции и одиночеством',
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ] 
    },
    {
        id: 19,
        img: 'images/19.jpg',
        text:  'Вы много времени провели, загорая на палящем солнце. Теперь у вас будет самый красивый загар на работе', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ] 
    },
    {
        id: 20,
        img: 'images/20.jpg',
        text:  'Вы сделали фотографию с вашим любим актером. Вы самый счастливый человек на земле. Отпуск прошел отлично', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ] 
    },
    {
        id: 21,
        img: 'images/21.jpg',
        text:  'Вы много гуляли по Турции, но когда вернулись домой, еще долго сожалели о том, что не сделали фото с любимым актером и не смогли с ним пообщаться   ', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ] 
    },
    {
        id: 22,
        img: 'images/22.jpg',
        text:  'Вы сообщили охране о двух подозрительных людях. Оказалось, что они собирались испортить одну из картин, так как они - экоактивисты. Музей решил выразить благодарность, и оплатил вам ужин в одном из лучших ресторанов Парижа',
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ]  
    },
    {
        id: 23,
        img: 'images/23.jpg',
        text:  'Вы ничего не сказали охране, поэтому охрана не смогла остановить двух экоактивистов во время. Одна из ваших любимых картин пострадала.\n Когда вы вернулись из отпуска, вы еще долго думали об этой ситуации и об вашем бездействие.', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },
        ] 
    },
    {
        id: 24,
        img: 'images/24.jpg',
        text:  'Вы пришли на волейбол. Все трибуны были заняты, каждый болел за свою команду. Вы решили болеть вместе со всеми, вы много кричали и переживали за выбранную вами команду. Возможно благодаря вашей поддержке она выиграла. Вернувшись домой у вас не было голоса, но было много воспоминаний', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },

        ] 
    },
    {
        id: 25,
        img: 'images/25.jpeg',
        text:  'Вы выбрали пообщаться с людьми. ВЫ нашли отличчную компанию на всю вашу поездку. Каждый вечер был насыщенным и интересным вместе с новыми друзьями. Теперь когда вы вернулись домой, у вас есть общий чат с вашими новыми знакомыми, и вы не теряете связь с ними и планируете новые поездки', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },

        ] 
    },
    {
        id: 26,
        img: 'images/26.jpg',
        text:  'В вечер пятницы вы предпочли книги людям. Вы нашли одну из самых больших и красивых библиотек Лондона. Вечер был проведен с одной из ваших любимых книг ', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },

        ] 
    },
    {
        id: 27,
        img: 'images/27.jpg',
        text:  'Вы выбрали пойти в паб в пятницу вечером, поэтому людей было много. Вы заказали кружку пива, но вам пришлось долго ждать вашего заказа, но не теряя времени знакомились с людьми, слушали выступление музыкантов и много веселись. Было выпито много напитков, что на следующий день жутко болела голова, но вы были довольны', 
        options: [
            {
                text: 'начать сначала ',
                nextText: 1
            },

        ] 
    },
]

startGame()