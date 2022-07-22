let initialState = {
    sushiesArr: [
        {sushiId: 1, name: 'СУСИ ТАЙ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203318_7dbaae13.jpg', description: 'Суши с морским окунем.', price: 14, weight: '32', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 2, name: 'СУСИ ТОРИ КУНСЕЙ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203924_47f5c7dd9a.jpg', description: 'Суши гункан с копченым цыпленком и острым соусом спайси.', price: 15, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 3, name: 'СУСИ СПАЙСИ ХАМУ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127204103_0b88e9d9c929.jpg', description: 'Суши с пармской ветчиной и острым соусом спайси.', price: 15, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 4, name: 'СУСИ СПАЙСИ ТОРИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127204006_7ed8aa0ba7c.JPG', description: 'Суши гункан с запеченным филе цыпленка и острым соусом спайси.', price: 16, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 5, name: 'СУСИ СПАЙСИ ТАЙ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203532_724a88583e.jpg', description: 'Суши гункан с морским окунем и острым соусом спайси.', price: 16, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 6, name: 'СУСИ ВАКАМЭ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127205002_e79258ed3.jpg', description: 'Суши с водорослями «Чука».', price: 17, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 7, name: 'СУСИ ЦЕЗАРЬ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127204920_ccfef894.jpg', description: 'Суши с копчёным филе цыплёнка в сочетании с ананасами и соусом цезарь.', price: 17, weight: '32', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 8, name: 'СУСИ СЯКЭ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127202657_4d60af4830d4a.jpg', description: 'Суши с норвежским лососем.', price: 22, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 9, name: 'СУСИ МУРУКАЙ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203452_9a07230.jpg', description: 'Суши с мидиями, жареными в пряных травах и устричном соусе, обёрнутое в слайс огурца.', price: 23, weight: '40', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 10, name: 'СУСИ САЛМОН ТОРИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127204728_464e60d.jpg', description: 'Суши с японским майонезом, филе запеченного цыпленка и амурской горбушей холодного копчения.', price: 23, weight: '40', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 11, name: 'СУСИ КАНИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203408_ce232b06b.jpg', description: 'Суши со снежным крабом, икрой масаго и японским майонезом.', price: 23, weight: '40', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 12, name: 'СУСИ МАГУРО', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203247_cefa6f60c95d.jpg', description: 'Суши с филе желтоперого тунца.', price: 24, weight: '30', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 13, name: 'СУСИ ЧЕДДЕР КРЕМ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127205510_efc6339.jpg', description: 'Суши в сыре чеддер, с сыром Филадельфия, итальянским сыром и соусом унаги.', price: 24, weight: '45', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 14, name: 'СУСИ КУНСЕЙ ТОРИ ЗАПЕЧЁННЫЕ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210325210546_9ff2700.jpg', description: 'Суши гункан с копченым цыпленком, соусом спайси и нежным сырным соусом.', price: 24, weight: '60', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 15, name: 'СУСИ СПАЙСИ СЯКЭ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203758_9f9bab693.jpg', description: 'Суши гункан с норвежским лососем и острым соусом спайси.', price: 24, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 16, name: 'СУСИ СЯКЭ МАРИНЭ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127202950_75a03854707.jpg', description: 'Суши со слабосоленым норвежским лососем.', price: 24, weight: '32', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 17, name: 'СУШИ ТОРИ ЗАПЕЧЁННЫЕ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210325210625_ca9115b8.jpg', description: 'Суши гункан с запеченным филе цыпленка и острым соусом спайси и нежным соусом яки.', price: 25, weight: '60', free: ''},
        {sushiId: 18, name: 'СУСИ СЯКЭ ФИЛАДЕЛЬФИЯ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127202827_8337f0d.jpg', description: 'Суши с норвежским лососем и нежным сыром филадельфия.', price: 26, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 19, name: 'СУСИ СПАЙСИ РЕЗА ТОМАТО', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127204813_bde4715c.jpg', description: 'Суши с запеченным брюшком норвежского лосося, и острым соусом спайси и томатами.', price: 28, weight: '40', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 20, name: 'СУСИ СЯКЭ ФЛАМБЕ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203034_7b5f761320d60.jpg', description: 'Суши с обжаренным норвежским лососем и отборной красной икрой.', price: 30, weight: '33', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 21, name: 'СУСИ СПАЙСИ МАГУРО', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203627_9c4e926aa7.jpg', description: 'Суши гункан с желтоперым тунцом и острым соусом спайси.', price: 31, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 22, name: 'СУСИ АМА ЭБИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203833_a720d67bf14.jpg', description: 'Суши гункан с коктейльной креветкой в соусе спайс.', price: 31, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 23, name: 'СУСИ ЭБИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127203153_0d5e686e8293a.jpg', description: 'Суши с тигровой креветкой.', price: 33, weight: '28', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 24, name: 'СУСИ ЧЕДДЕР XL', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210325210651_e296b7b5a56.jpg', description: 'Суши с жареными мидиями в устричном соусе и нежным соусом яки.', price: 33, weight: '55', free: ''},
        {sushiId: 25, name: 'СУСИ СПАЙСИ ЭБИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127205350_0c99d2a3.jpg', description: 'Суши гункан с тигровой креветкой и острым соусом спайси.', price: 40, weight: '35', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 26, name: 'СУШИ СЯКЭ ЗАПЕЧЁННЫЕ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20210325210602_af47e4556c3.jpg', description: 'Филе норвежского лосося, соус спайси, нежный сырный соус.', price: 41, weight: '60', free: ''},
        {sushiId: 27, name: 'СУСИ УНАГИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127205431_ad89f60.jpg', description: 'Суши с копченым угрем, соусом унаги и белым кунжутом.', price: 41, weight: '31', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 28, name: 'СУСИ СПАЙСИ УНАГИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127205624_ddf1fbd8.jpg', description: 'Суши гункан с копченым угрем и острым соусом спайси.', price: 55, weight: '55', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
        {sushiId: 29, name: 'СУСИ СЯКЕ ЭБИ', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127205234_ec9e4152dd32.jpg', description: 'Суши с коктейльной креветкой в сливочном сыре, обёрнутое в филе норвежского лосося.', price: 33, weight: '55', free: ''},
        {sushiId: 30, name: 'СУСИ ИКУРА', imageUrl: 'https://kingpizza.kh.ua/resources/products/600_20200127205138_37e46c44cc1.jpg', description: 'Суши гункан с отборной красной икрой.', price: 68, weight: '30', free: 'Бесплатно прилагается: имбирь, васаби, соевый соус, палочки.'},
    ]
  };

const SushiReducer = (state = initialState, action) => {
return state;
}

export default SushiReducer;