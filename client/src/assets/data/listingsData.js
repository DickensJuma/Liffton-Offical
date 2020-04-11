var listingsData = [
  {
    address:'17 Kabarsiran Avenue, Off Waiyaki Way ',
    city: 'Lavington ',
    state: 'Nairobi',
    rooms: 1,
    baths: 2,
    isForSale: true,
    isForRent: true,
    wasSold: false,
    listingType: 'isForRent',
    price: 22000,
    floorSpace:2000,
    extras: [
      'elevator',
      'gym'
    ],
    homeType:'apartment',
    image:'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4147-23/the-hesby-apartments-exterior.jpg'
  },
  {
      address:'Ragati Road ',
      city: 'Pioneer Building',
      state: 'Naivasha',
      rooms: 0,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 50000,
      floorSpace:700,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'townhouse',
      image:'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4022-48/sakura-crossing-apartments-exterior.jpg'
    },
    {
      address:'Lt Tumbo Lane',
      city: 'Yale',
      state: 'Mombasa',
      rooms: 3,
      baths: 2,
      isForSale: true,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 22000,
      floorSpace:2500,
      extras: [
        'pool',
        'Wifi'
      ],
      homeType:'house',
      image:'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/3639-12/mosaic-at-metro-apartments-swimming-pool.jpg'
    },
    {
      address:'Migosi 44',
      city: 'Migosi Estate',
      state: 'Kisumu',
      rooms: 3,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 300000,
      floorSpace:1400,
      extras: [
        'elevator',
        'gym'
      ],
      homeType:'apartment',
      image:'https://thenypost.files.wordpress.com/2019/07/re-44-handsome-avenue.jpg?quality=80&strip=all&w=978&h=652'
    },
    {
      address:' off Kenyatta Avenue',
      city: 'Westend',
      state: 'Nairobi',
      rooms: 3,
      baths: 2,
      isForSale: true,
      isForRent: false,
      wasSold: false,
      listingType: 'wasSold',
      price: 160000,
      floorSpace:2000,
      extras: [
        'elevator',
        'gym'
      ],
      homeType:'townhome',
      image:'https://cdn.vox-cdn.com/thumbor/vAZEMsqZIJsmKcT8paqeFY1xI80=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/56604061/090817wBroadway.0.jpg'
    },
    {
      address:'Next Strip 23',
      city: 'Eldoret Airport',
      state: 'Eldoret',
      rooms: 2,
      baths: 2,
      isForSale: true,
      isForRent: false,
      wasSold: false,
      listingType: 'wasSold',
      price: 21000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'condo',
      image:'https://cdn.vox-cdn.com/thumbor/NeX2IvnaTUvJ8UtQ_yLI-jo3gOE=/0x0:2600x1733/1200x800/filters:focal(1092x659:1508x1075)/cdn.vox-cdn.com/uploads/chorus_image/image/60722051/1300PikeSt_Cam3People_111816.0.png'
    },
    {
      address:'Old white Road',
      city: 'Afra Stadium',
      state: 'Nakuru',
      rooms: 1,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 19000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'townhome',
      image:'http://photos.mredllc.com/photos/property/434/09300434.jpg'
    },
    {
      address:'Oginga Odinga Street',
      city: 'Kisumu Estate',
      state: 'Kisumu',
      rooms: 4,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 23000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'house',
      image:'https://photos.zillowstatic.com/cc_ft_1536/IS62txkeuo0gce1000000000.webp'
    },
    {
      address:'50 Decker ave',
      city: 'Dreamtown',
      state: 'NJ',
      rooms: 5,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForSale',
      price: 100000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'lot',
      image:'https://photos.zillowstatic.com/cc_ft_1536/ISma2jnx1pqodr0000000000.webp'
    },
    {
      address:'20 Jack ave',
      city: 'Dreamtown',
      state: 'KS',
      rooms: 6,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 15000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'house',
      image:'https://photos.zillowstatic.com/cc_ft_1536/ISyva18icd4m0x1000000000.webp'
    },
    {
      address:'Tom Mboya ave',
      city: 'Dreamtown Estate',
      state: 'Nairobi',
      rooms: 8,
      baths: 4,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 40000,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'apartment',
      image:'https://photos.zillowstatic.com/cc_ft_1536/IS276kp2mxehwu0000000000.webp'
    },
    {
      address:'Brooksite Road',
      city: 'Makongeni',
      state: 'Thika',
      rooms: 6,
      baths: 2,
      isForSale: false,
      isForRent: true,
      wasSold: false,
      listingType: 'isForRent',
      price: 42900,
      floorSpace:2000,
      extras: [
        'elevator',
        'pool'
      ],
      homeType:'house',
      image:'https://photos.zillowstatic.com/p_h/ISyvql2w42k9a81000000000.jpg'
    }
]

export default listingsData;