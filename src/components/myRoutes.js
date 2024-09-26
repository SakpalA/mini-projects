import { MdDashboard, MdOutlineFastfood, MdOutlineTimer10 } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { CiCalculator1, CiSearch } from "react-icons/ci";
import { IoFilterSharp, IoToggleSharp  } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { FaFan, FaRegHeart  } from "react-icons/fa";

export const navRoutes = [
    {
        icon: <MdDashboard />,
        lable: 'Dashboard',
        link: '/'
    },
    {
        icon: <LuListTodo />,
        lable: 'TODO',
        link: '/todo'
    },
    {
        icon: <CiCalculator1 />,
        lable: 'Calculator',
        link: '/calculator'
    },
    {
        icon: <CiSearch />,
        lable: 'Search',
        link: '/search'
    },
    // {
    //     icon: <MdOutlineFastfood />,
    //     lable: 'Recipe',
    //     link: '/recipe'
    // },
    {   
        icon: <IoFilterSharp />,
        lable: 'Filter',
        link: '/filter'
    },
    {
        icon: <IoToggleSharp />,
        lable: 'Grid to List',
        link: '/grid-to-list'
    },
    {
        icon: <IoIosLogIn />,
        lable: 'Signup-Login',
        link: '/signup-login'
    },
    // {
    //     icon: <FaFan />,
    //     lable: 'Fan',
    //     link: '/fan'
    // },
    {
        icon: <FaRegHeart />,
        lable: 'Wishlist',
        link: '/wishlist'
    },
    {
        icon: <MdOutlineTimer10 />,
        lable: 'Digital Clock',
        link: '/digital-clock'
    }
]

export default navRoutes 