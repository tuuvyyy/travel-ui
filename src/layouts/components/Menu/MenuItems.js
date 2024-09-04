import config from '~/config'

export const MENU_ITEMS = [
    {
        title: 'TRANG CHỦ',
        id: 'home',
        to: config.routes.home,
    },
    {
        title: 'GIỚI THIỆU',
        id: 'introduce',
        to: config.routes.home,
        // to: config.routes.introduce,
    },
    {
        title: 'ĐIỂM ĐẾN',
        id: 'destination',
        to: config.routes.destination,
        children: {
            data: [
                {
                    type: 'destination',
                    title: 'DANH LAM THẮNG CẢNH',
                    to: '/destination/places',
                    iconUrl:
                        'https://cdn4.vectorstock.com/i/1000x1000/76/63/mountains-icon-isolated-on-white-background-vector-23367663.jpg',
                },
                {
                    type: 'destination',
                    title: 'DI TÍCH LỊCH SỬ',
                    to: '/destination/history',
                    iconUrl:
                        'https://cdn2.vectorstock.com/i/1000x1000/71/06/black-historical-building-icon-vector-9417106.jpg',
                },
                {
                    type: 'destination',
                    title: 'KHÁCH SẠN',
                    to: '/destination/hotel',
                    iconUrl:
                        'https://img.freepik.com/premium-vector/hotel-icon-logo-vector-design-template_827767-3569.jpg?w=2000',
                },
                {
                    type: 'destination',
                    title: 'CHỖ Ở RIÊNG',
                    to: '/destination/homestay',
                    iconUrl:
                        'https://png.pngtree.com/png-clipart/20200701/original/pngtree-homestay-icon-png-image_5394511.jpg',
                },
            ],
        },
    },
    {
        title: 'TIN TỨC',
        id: 'news',
        to: config.routes.news,
        children: {
            data: [
                {
                    type: 'news',
                    title: 'THỜI TIẾT',
                },
                {
                    type: 'news',
                    title: 'ƯU ĐÃI',
                },
            ],
        },
    },
    {
        title: 'LIÊN HỆ',
        id: 'contact',
        to: config.routes.home,
        // to: config.routes.contact,
    },
]
