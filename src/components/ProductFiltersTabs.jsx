import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CardProductOverview from "./CardProductOverview.jsx";

const tabLists = [
    {id: 'all', name: 'All'},
    {id: 'bomber', name: 'Bomber'},
    {id: 'denim', name: 'Denim'},
    {id: 'vests', name: 'Vests'},
    {id: 'skin-effect', name: 'Skin Effect'},
    {id: 'puffer', name: 'Puffer'},
    {id: 'racing', name: 'Racing'},
    {id: 'coats', name: 'Coats'}
]

const all = [
    {
        id:1,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:2,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:3,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:4,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:5,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]
const bomber = [
    {
        id:1,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:2,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:5,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]
const denim = [
    {
        id:2,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:3,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:4,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:5,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]
const vests = [
    {
        id:1,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:2,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]
const skinEffect = [
    {
        id:1,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]
const puffer = [
    {
        id:1,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:2,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:3,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:4,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:5,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]
const racing = [
    {
        id:2,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:3,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:4,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:5,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]
const coats = [
    {
        id:5,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:6,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    },
    {
        id:7,
        title: "Embroidered cloth bomber jacket",
        images: [
            "https://i.pinimg.com/736x/40/14/a7/4014a794baa273cd3f6dd0eedd84000e.jpg",
            "https://source.unsplash.com/random",
            "https://images.bewakoof.com/uploads/grid/app/types-of-shirts-for-men-bewakoof-blog-10-1610963791.jpg",
        ],
        price: 33.23,
        variants: [
            {size:"XS", stock:"available"},
            {size:"S", stock:"exhausted"},
            {size:"M", stock:"available"},
            {size:"L", stock:"available"},
            {size:"XL", stock:"exhausted"},
        ],
    }

]


export default function ProductFiltersTabs(){
    return(
        <section className="py-6">
            <h3 className="font-medium text-xl mb-4 px-8">Coats</h3>
            <Tabs>
                <TabList className="flex flex-wrap gap-3 mb-4 px-8">
                    {tabLists.map(tab => {
                        return <Tab key={tab.id} className="text-xs p-2 border border-[#e6e6e6] rounded-md cursor-pointer focus:outline-0" selectedClassName="font-bold text-white bg-black scale-[110%] rounded-md">{tab.name}</Tab>
                    })}
                </TabList>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {all.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {bomber.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {denim.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {vests.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {skinEffect.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {puffer.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {racing.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
                <TabPanel className="px-1 space-y-4 md:space-y-0 md:grid md:grid-cols-12 md:gap-x-1 md:gap-y-6">
                    {coats.map(item=> {
                        return <div key={item.id} className="md:col-span-6 lg:col-span-3">
                            <CardProductOverview item={item}/>
                        </div>
                    })}
                </TabPanel>
            </Tabs>
        </section>
    )
}