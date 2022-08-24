const items = [
    {
        name: "Persimmon",
        src: "https://cdn.pixabay.com/photo/2015/11/22/17/48/food-1056646_1280.jpg",
        category: "fruit",
        price: 15,
        quantity: 0,
        total: 0
    },
    {
        name: "Banana",
        src: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_1280.jpg",
        category: "fruit",
        price: 5,
        quantity: 0,
        total: 0
    },
    {
        name: "Pineapple",
        src: "https://cdn.pixabay.com/photo/2020/04/29/12/47/pineapple-5108775_1280.jpg",
        category: "fruit",
        price: 12,
        quantity: 0,
        total: 0
    },
    {    
        name: "Kiwifruit",
        src: "https://cdn.pixabay.com/photo/2016/03/05/23/02/breakfast-1239438_1280.jpg",
        category: "fruit",
        price: 7,
        quantity: 0,
        total: 0
    },
    {
        name: "Longan",
        src: "https://cdn.pixabay.com/photo/2016/03/30/06/49/longan-1290167_1280.jpg",
        category: "fruit",
        price: 16,
        quantity: 0,
        total: 0
    },
    {
        name: "Lychee",
        src: "https://cdn.pixabay.com/photo/2015/01/20/12/34/lychees-605399_1280.jpg",
        category: "fruit",
        price: 13,
        quantity: 0,
        total: 0
    },
    {
        name: "Wax Apple",
        src: "https://cdn.pixabay.com/photo/2017/06/25/07/52/wax-apple-2439857_1280.jpg",
        category: "fruit",
        price: 13,
        quantity: 0,
        total: 0
    },
    {
        name: "Rambutan",
        src: "https://cdn.pixabay.com/photo/2017/07/06/10/36/rambutan-2477584_1280.jpg",
        category: "fruit",
        price: 14,
        quantity: 0,
        total: 0
    },
    {
        name: "Mangosteen",
        src: "https://cdn.pixabay.com/photo/2015/06/16/12/00/mangosteen-811154_1280.jpg",
        category: "fruit",
        price: 25,
        quantity: 0,
        total: 0
    },
    {
        name: "Papaya",
        src: "https://cdn.pixabay.com/photo/2017/03/07/04/32/fruit-2123166_1280.jpg",
        category: "fruit",
        price: 16,
        quantity: 0,
        total: 0
    },
    {
        name: "Dragon Fruit(white)",
        src: "https://cdn.pixabay.com/photo/2017/07/06/10/01/fruit-2477515_1280.jpg",
        category: "fruit",
        price: 10,
        quantity: 0,
        total: 0
    },
    {
        name: "Dragon Fruit(red)",
        src: "https://cdn.pixabay.com/photo/2017/03/06/11/59/dragon-fruit-2121292_1280.jpg",
        category: "fruit",
        price: 12,
        quantity: 0,
        total: 0
    },
    {
        name: "Cabbage",
        src: "https://cdn.pixabay.com/photo/2017/09/01/19/20/white-cabbage-2705228_1280.jpg",
        category: "veg",
        price: 18,
        quantity: 0
    },
    {
        name: "Broccoli",
        src: "https://cdn.pixabay.com/photo/2016/03/05/22/00/broccoli-1239149_1280.jpg",
        category: "veg",
        price: 7,
        quantity: 0
    },
    {
        name: "Cauliflower",
        src: "https://cdn.pixabay.com/photo/2016/06/18/21/56/cauliflower-1465732_1280.jpg",
        category: "veg",
        price: 8,
        quantity: 0
    },
    {
        name: "Celery",
        src: "https://cdn.pixabay.com/photo/2020/08/23/01/33/celery-5509677_1280.png",
        category: "veg",
        price: 4,
        quantity: 0
    },
    {
        name: "Tomato",
        src: "https://cdn.pixabay.com/photo/2016/03/05/22/06/tomatoes-1239176_1280.jpg",
        category: "veg",
        price: 4,
        quantity: 0
    },
    {
        name: "Eggplant",
        src: "https://cdn.pixabay.com/photo/2016/09/10/17/47/eggplant-1659784_1280.jpg",
        category: "veg",
        price: 7,
        quantity: 0
    },
    {
        name: "Onion",
        src: "https://cdn.pixabay.com/photo/2013/02/21/19/14/onion-bulbs-84722_1280.jpg",
        category: "veg",
        price: 5,
        quantity: 0
    },
    {
        name: "Carrot",
        src: "https://cdn.pixabay.com/photo/2017/06/09/16/39/carrots-2387394_1280.jpg",
        category: "veg",
        price: 3,
        quantity: 0
    },
    {
        name: "Potato",
        src: "https://cdn.pixabay.com/photo/2014/08/06/20/32/potatoes-411975_1280.jpg",
        category: "veg",
        price: 3,
        quantity: 0
    },
    {
        name: "Corn",
        src: "https://cdn.pixabay.com/photo/2016/10/18/20/29/corn-1751321_1280.jpg",
        category: "veg",
        price: 10,
        quantity: 0
    },
    {
        name: "Sweet Pepper",
        src: "https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068_1280.jpg",
        category: "veg",
        price: 6,
        quantity: 0
    },
    {
        name: "Chicken Breast",
        src: "https://cdn.pixabay.com/photo/2022/07/25/20/15/grilled-chicken-7344499_1280.jpg",
        category: "meat",
        price: 6,
        quantity: 0
    },
    {
        name: "Chicken Leg",
        src: "https://cdn.pixabay.com/photo/2018/11/05/13/28/tree-3796084_1280.jpg",
        category: "meat",
        price: 8,
        quantity: 0
    },
    {
        name: "Chicken Wing",
        src: "https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579_1280.jpg",
        category: "meat",
        price: 7,
        quantity: 0
    },
    {
        name: "Chicken Feet",
        src: "https://cdn.pixabay.com/photo/2015/05/02/01/00/seasoned-chicken-feet-749362_1280.jpg",
        category: "meat",
        price: 5,
        quantity: 0
    },
    {
        name: "Duck Breast",
        src: "https://cdn.pixabay.com/photo/2016/08/19/06/19/pork-1604631_1280.jpg",
        category: "meat",
        price: 22,
        quantity: 0
    },
    {
        name: "Pork Tenderloin",
        src: "https://cdn.pixabay.com/photo/2020/07/17/10/39/pork-loin-5413708_1280.jpg",
        category: "meat",
        price: 19,
        quantity: 0
    },
    {
        name: "Pork Knuckle",
        src: "https://cdn.pixabay.com/photo/2016/11/13/19/47/haxe-1821881_1280.jpg",
        category: "meat",
        price: 15,
        quantity: 0
    },
    {
        name: "Pork Ribs",
        src: "https://cdn.pixabay.com/photo/2020/06/25/21/24/spare-ribs-5340942_1280.jpg",
        category: "meat",
        price: 38,
        quantity: 0
    },
    {
        name: "Pork Sausage",
        src: "https://cdn.pixabay.com/photo/2016/03/05/20/12/barbecue-1238702_1280.jpg",
        category: "meat",
        price: 12,
        quantity: 0
    },
    {
        name: "Filet Mignon",
        src: "https://cdn.pixabay.com/photo/2018/09/21/18/25/fillet-3693670_1280.jpg",
        category: "meat",
        price: 57,
        quantity: 0
    },
    {
        name: "Short Sib",
        src: "https://cdn.pixabay.com/photo/2021/04/30/12/01/short-ribs-6218752_1280.jpg",
        category: "meat",
        price: 40,
        quantity: 0
    },
    {
        name: "Sirloin Steak",
        src: "https://cdn.pixabay.com/photo/2015/12/08/19/08/steak-1083567_1280.jpg",
        category: "meat",
        price: 46,
        quantity: 0
    },
    {
        name: "Snickers",
        src: "https://upload.wikimedia.org/wikipedia/en/3/3c/Snickers_wrapped.png",
        category: "choco",
        link: "https://en.wikipedia.org/w/index.php?curid=46716398",
        author: "By picture taken by Evan-Amos, Fair use",
        price: 2,
        quantity: 0
    },
    {
        name: "m&m's",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Plain-M%26Ms-Pile.jpg/1280px-Plain-M%26Ms-Pile.jpg",
        category: "choco",
        link: "https://commons.wikimedia.org/w/index.php?curid=11926907",
        author: "By Evan-Amos - Own work, Public Domain",
        price: 7,
        quantity: 0
    },
    {
        name: "Toblerone",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Toblerone_3362.jpg/1280px-Toblerone_3362.jpg",
        category: "choco",
        link: "https://commons.wikimedia.org/w/index.php?curid=53119702",
        author: "By Ashley Pomeroy - Own work, CC BY 3.0",
        price: 2,
        quantity: 0
    },
    {
        name: "Kinder",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kinderchocolate.jpg/1920px-Kinderchocolate.jpg?20141203180753",
        category: "choco",
        link: "https://commons.wikimedia.org/w/index.php?curid=2694440",
        author: "By Thegreenj - Own work, CC BY-SA 3.0",
        price: 7,
        quantity: 0
    },
    {
        name: "Ferrero Rocher",
        src: "https://cdn.pixabay.com/photo/2016/01/15/16/15/ferrero-rocher-1141975_1280.jpg",
        category: "choco",
        price: 24,
        quantity: 0
    },
    {
        name: "Kitkat",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kit-Kat-Split.jpg/1920px-Kit-Kat-Split.jpg",
        category: "choco",
        link: "https://commons.wikimedia.org/w/index.php?curid=11927115",
        author: "By Evan-Amos - Own work, Public Domain",
        price: 2,
        quantity: 0
    },
    {
        name: "Dairy Milk",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cadbury-Dairy-Milk-Caramel-Bar.jpg/1920px-Cadbury-Dairy-Milk-Caramel-Bar.jpg",
        category: "choco",
        link: "https://commons.wikimedia.org/w/index.php?curid=13259252",
        author: "By Evan-Amos - Own work, Public Domain",
        price: 2,
        quantity: 0
    },
    {
        name: "Crunchie",
        src: "https://upload.wikimedia.org/wikipedia/en/4/41/Cadbury-Crunchie-Wrapper-Small.jpg",
        category: "choco",
        link: "https://en.wikipedia.org/w/index.php?curid=29288598",
        author: "By picture taken by Evan-Amos, Fair use",
        price: 10,
        quantity: 0
    },
    {
        name: "dove",
        src: "https://upload.wikimedia.org/wikipedia/en/7/7f/Dove-Dark-Wrapper-Small.jpg",
        category: "choco",
        link: "https://en.wikipedia.org/w/index.php?curid=29365372",
        author: "By picture taken by Evan-Amos, Fair use",
        price: 8,
        quantity: 0
    },
    {
        name: "Hershey's Kisses",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Hershey%27s_KISSES_Chocolate_Flavors_Written_on_Paper_Plume.jpg",
        category: "choco",
        link: "https://commons.wikimedia.org/w/index.php?curid=88865513",
        author: "By Kfarren23 - Own work, CC BY-SA 4.0",
        price: 6,
        quantity: 0,
    },
    {
        name: "Twix",
        src: "https://cdn.pixabay.com/photo/2016/10/12/19/56/candy-bar-1735650_1280.jpg",
        category: "choco",
        price: 2,
        quantity: 0,
    }
];