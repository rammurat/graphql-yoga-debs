const allUserRoles = [{
    id: "1",
    name: 'admin'
}, {
    id: "2",
    name: 'user'
}]

const allUsers = [{
    id: "1",
    name: 'admin',
    email: 'admin@gmail.com',
    password: "idea123",
    role: "1"
},{
    id: "2",
    name: 'ram',
    email: 'ram@gmail.com',
    password: "idea123",
    role: "2"
}, {
    id: "3",
    name: 'Deepak',
    email: 'deepak@gmail.com',
    password: "idea123",
    role: "2"
}]

const allCategories = [{
    id: "1",
    name: 'Women',
    subCategories: [1,2,3,4]
}, {
    id: "2",
    name: 'Lingerie',
    subCategories: [5,6,7,8]
}]

const allSubCategories = [{
    id: "1",
    name: 'Dresses',
    cat_id: "1",
    image: "https://media.debenhams.com/i/debenhams/01_12_20_beauty_PandA_epsp_feature_2?w=776&h=776&qlt=70&fmt=webp&v=2"
}, {
    id: "2",
    name: 'Party Wear',
    cat_id: "1",
    image: "https://media.debenhams.com/i/debenhams/06_11_20_womens_nightwear_epsp_adspot_3?w=504&h=504&qlt=70&fmt=webp&v=2"
},{
    id: "3",
    name: 'Knickers',
    cat_id: "2",
    image: "https://media.debenhams.com/i/debenhams/16_01_20_lingerie_knickers_epsp_adspot_5?w=776&h=776&qlt=70&fmt=webp&v=1"
}, {
    id: "4",
    name: 'Brands',
    cat_id: "2",
    image: "https://media.debenhams.com/i/debenhams/07_09_20_beauty_armani_epsp_adspot_1?w=776&h=776&qlt=70&fmt=webp&v=1"
}]

const allSubSubCategories = [{
    id: "1",
    name: 'Red dresses',
    cat_id: '1',
    sub_cat_id: "1"
}, {
    id: "2",
    name: 'Maxi dresses',
    cat_id: '1',
    sub_cat_id: "1"
},{
    id: "3",
    name: 'Brazillian knickers',
    cat_id: '2',
    sub_cat_id: "3"
}, {
    id: "4",
    name: 'Thongs',
    cat_id: '2',
    sub_cat_id: "3"
}]

const allProducts = [{
    id: "1",
    name: 'Mantaray - Baby Boys Blue Denim Shorts',
    price: [{gbp: 10}, {euro: 15}],
    description: "Wow dress",
    sizes: [8,10,12,14,16],
    tags: [{name: "Dresses", url: "/dresses"}],
    cat_id: "1",
    sub_cat_id: "1",
    sub_sub_cat_id: "1",
    sub_cat_name: "Dresses",
    images: {
        url: "https://media.debenhams.com/i/debenhams/222020652445/baby_boys_blue_denim_shorts.jpg?w=1000&h=1000&fmt=webp&qlt=60",
        thumbs: [
            "https://media.debenhams.com/i/debenhams/222020652445_1/baby_boys_blue_denim_shorts.jpg?w=1000&h=1000&fmt=webp&qlt=60",
            "https://media.debenhams.com/i/debenhams/222020652445_2/baby_boys_blue_denim_shorts.jpg?w=1000&h=1000&fmt=webp&qlt=60"
        ]
    },
    related_products: [2]
}, {
    id: "2",
    name: 'Lisca - Grey Green Giselle Underwired Full Cup Bra',
    price: [{gbp: 10}, {euro: 15}],
    description: "Wow dress 2",
    sizes: [8,10,12,14,16],
    tags: [{name: "Lingerie", url: "/dingerie"}],
    cat_id: "2",
    sub_cat_id: "3",
    sub_sub_cat_id: "3",
    sub_cat_name: "Knickers",
    images: {
        url: "https://media.debenhams.com/i/debenhams/222020652445/baby_boys_blue_denim_shorts.jpg?w=1000&h=1000&fmt=webp&qlt=60",
        thumbs: [
            "https://media.debenhams.com/i/debenhams/222020652445_1/baby_boys_blue_denim_shorts.jpg?w=1000&h=1000&fmt=webp&qlt=60",
            "https://media.debenhams.com/i/debenhams/222020652445_2/baby_boys_blue_denim_shorts.jpg?w=1000&h=1000&fmt=webp&qlt=60"
        ]
    },
    related_products: [1]
}]


const allReviews = [{
    id: "1",
    text: 'This is review 1',
    author: "2",
    product: "1"
}, {
    id: "2",
    text: 'This is review 2',
    author: "3",
    product: "2"
}]

const db = {allUserRoles, allUsers, allCategories, allSubCategories, allSubSubCategories, allProducts, allReviews}

export default db