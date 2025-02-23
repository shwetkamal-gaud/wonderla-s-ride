import {  useState } from 'react';
import LocationSvg from '../assets/LocationSvg';

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [isOpenOffCanvas, setIsOpenOffCanvas] = useState(false);
    const toggleDropdown = (id: any) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const toggleSubDropdown = (id: any) => {
        setOpenSubDropdown(openSubDropdown === id ? null : id);
    };
    const [openOffCanvasDropdown, setOpenOffCanvaDropdown] = useState(null);

    const toggleOffCanvasDropdown = (id: any) => {
        setOpenOffCanvaDropdown(openOffCanvasDropdown === id ? null : id);
    };
    
    const offCanvas = [
        {
            id: 1,
            name: "Parks",
            subText: 'Explore your favourite Wonderela Park',
            isDropDown: true,
            imgClass: 'h-8 w-8 object-contain',
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=32&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=48&q=75 2x',
            class: ' border-b border-gray-500 py-2 flex flex-col items-center',
            isImage: true,
            imageOptions: [
                {
                    optionsSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_1_c46850a98c.png?w=48&q=75',
                    optionsSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_1_c46850a98c.png?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_1_c46850a98c.png?w=96&q=75 2x',
                    name: 'Kochi',
                },
                {
                    optionsSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_a5c3902ca6.png?w=48&q=75',
                    optionsSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_a5c3902ca6.png?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_a5c3902ca6.png?w=96&q=75 2x',
                    name: 'Hyderabad',
                },
                {
                    optionsSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_2_04e5b929ab.png?w=48&q=75',
                    optionsSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_2_04e5b929ab.png?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6136_2_04e5b929ab.png?w=96&q=75 2x',
                    name: 'Bengaluru',
                },
                {
                    optionsSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_1_f18a5c6566.png?w=48&q=75',
                    optionsSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_1_f18a5c6566.png?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Ellipse_6137_1_f18a5c6566.png?w=96&q=75 2x',
                    name: 'Bhubaneswer',
                }
            ]
        },
        {
            id: 2,
            name: "Resorts",
            subText: 'Get A Rejuvenating Experience At Wonderla Resort',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=32&q=75',
            class: ' border-b border-gray-500 py-2 flex justify-between items-center',
            imgClass: 'h-8 w-8 object-contain',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75 2x',
        },
        {
            id: 3,
            name: "Offer & Combos",
            subText: 'Plan the Perfect day with Exciting Offers',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=32&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=48&q=75 2x',
            imgClass: 'h-8 w-8 object-contain',
            class: ' border-b border-gray-500 py-2 flex justify-between items-center',
        },
        {
            id: 4,
            name: "Timings and Guidlines",
            subText: 'Know the timings and guidlines',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=32&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=48&q=75 2x',
            imgClass: 'h-8 w-8 object-contain',
            class: ' border-b border-gray-500 py-2 flex justify-between items-center',
        },
        {
            id: 5,
            name: "Group Booking",
            subText: 'Reach Out to Wonderla Team',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=48&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75 2x',
            imgClass: 'h-8 w-8 object-contain',
            class: ' text-black bg-[#FAD600] rounded-lg py-2 flex justify-between items-center',
        },
        {
            id: 6,
            name: "Tour Operator Portal",
            subText: 'Reach Out to Wonderla Team',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=48&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=96&q=75 2x',
            imgClass: 'h-8 w-8 object-contain',
            class: 'bg-[#334DCF] text-white rounded-lg py-2 flex justify-between items-center',
            isblue: true
        },
        {
            id: 7,
            name: "Partner With Us",
            subText: 'Reach Out to Wonderla Team',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=48&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=96&q=75 2x',
            imgClass: 'h-8 w-8 object-contain',
            class: 'text-black bg-[#FAD600] rounded-lg py-2 flex justify-between items-center',
        },
        {
            id: 8,
            name: "About Us",
            subText: 'Know All About Wonderla Team',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=32&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=48&q=75 2x',
            imgClass: 'h-8 w-8 object-contain',
            class: ' border-b border-gray-500 py-2 flex justify-between items-center',
        },
        {
            id: 9,
            name: "Quick Links",
            subText: 'Explore all other relevant information here',
            isDropDown: true,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=32&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=48&q=75 2x',
            options: ['Restaurants', 'Merchandise', 'Events'],
            isImage: false,
            imgClass: 'h-8 w-8 object-contain',
            class: 'border-b border-gray-500 py-2 flex flex-col items-center',
        },
        {
            id: 10,
            name: "Contact Us",
            subText: 'Get in Touch Wonderla Team',
            isDropDown: false,
            src: 'https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=32&q=75',
            srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=48&q=75 2x',
            imgClass: 'h-8 w-8 object-contain',
            class: ' border-b border-gray-500 py-2 flex justify-between items-center',
        },
    ]

    const navbar = [
        {
            id: 1,
            name: 'LOCATION',
            logo: <LocationSvg />,
            isDropDown: true,
            options: [
                {
                    itemName: 'Kochi',
                    srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75 2x',
                    src: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75',
                    isOptionDropDown: false,
                },
                {
                    itemName: 'BENGALURU',
                    srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75 2x',
                    src: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75',
                    isOptionDropDown: true,
                    optionsItem: [
                        {
                            optionItemName: 'Park',
                            itemSrcSet: 'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75 1x, https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75 2x',
                            itemSrc: 'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-park.png&w=96&q=75'
                        },
                        {
                            optionItemName: 'Resort',
                            itemSrcSet: 'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75 1x, https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75 2x',
                            itemSrc: 'https://www.wonderla.com/_next/image?url=%2Fimages%2Fbangalore-resort.png&w=96&q=75'
                        },
                    ]
                },
                {
                    itemName: 'Hyderabad',
                    srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75 2x',
                    src: 'https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75',
                    isOptionDropDown: false,
                },
                {
                    itemName: 'Bhubaneshwar',
                    srcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=48&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75 2x',
                    src: 'https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75',
                    isOptionDropDown: false,
                },
            ]
        },
        {
            id: 2,
            name: 'Offers',
            navSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75',
            navSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75 2x',
            isDropDown: false,
        },
        {
            id: 3,
            name: 'Rides',
            navSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=32&q=75',
            navSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75 2x',
            isDropDown: false,
        },
        {
            id: 4,
            name: 'Restaurants',
            navSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=32&q=75',
            navSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75 2x',
            isDropDown: false,
        },
        {
            id: 5,
            name: 'Events',
            navSrc: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=32&q=75',
            navSrcSet: 'https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=32&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75 2x',
            isDropDown: false,
        },
    ]
    return (
        <header className='fixed left-0 right-0 top-0 lg:left-12 lg:right-12 lg:top-[35px] xl:left-[60px] xl:right-[60px] z-[1000]'>
            <div className='flex h-[60px] items-center justify-between gap-5 rounded-bl-2xl rounded-br-2xl px-4 transition duration-300 ease-in-out md:h-[68px] md:pl-[30px] md:pr-[38px] lg:rounded-2xl bg-white text-blue-gray shadow-[0px_4px_8px_0px_#0000001A] lg:shadow-none lg:outline lg:outline-[1px] lg:outline-blue/20'>
                <a className="inline-block" href="/">
                    <div className="inline-block capitalize -ml-4 aspect-[118/38] w-[132px] lg:w-[152px]" tabIndex={0}>
                        <img alt="Desktop Logo" fetchPriority="high" width="118" height="38" decoding="async" data-nimg="1" srcSet='https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75 2x' className="h-full w-full aspect-[118/38] object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75" style={{ color: "transparent" }} />
                    </div>
                </a>
                <nav className="mx-auto hidden flex-wrap items-center gap-x-7 gap-y-1 lg:flex">
                    {navbar.map((item) => {
                        return (
                            <>
                                {item.isDropDown ? (<div key={item.id} className='group relative flex items-center'>
                                    {item.logo}
                                    <button onClick={() => toggleDropdown(item.id)} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex capitalize items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{item.name}
                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    <div id="dropdownNavbar" className={`absolute left-0 mt-70 w-50 bg-white rounded-lg shadow-lg transition-all duration-300 ${openDropdown === item.id ? "block" : "hidden"
                                        }`}>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                            {item.options?.map((option, index) => {
                                                return (
                                                    <div key={index}>
                                                        {option.isOptionDropDown ? <li aria-labelledby="dropdownNavbarLink">
                                                            <button onClick={() => toggleSubDropdown(option.itemName)} id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex capitalize gap-2 items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                <img alt={option.itemName} loading='lazy' width={10} height={10} decoding='async' data-nimg="1" className='w-10 h-10 object-cover rounded-[10px]' srcSet={option.srcSet} src={option.src} />
                                                                <span className='capitalize text-black'>{option.itemName}</span>
                                                                <svg height="24" width="24" className="ml-auto size-5" viewBox="0 0 24 24" fill="none" stroke="#717D92" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6L15 12L9 18"></path></svg>
                                                            </button>
                                                            <div id="doubleDropdown" className={`absolute left-full top-0 mt-10 ml-2 w-44 bg-white rounded-lg shadow-lg transition-all duration-300 ${openSubDropdown === option.itemName ? "block" : "hidden"
                                                                }`}>
                                                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                                                    {option.optionsItem?.map((optionItem, id) => {
                                                                        return (
                                                                            <li key={id}>

                                                                                <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                                                                    <img alt={optionItem.optionItemName} loading='lazy' width={4} height={4} decoding='async' data-nimg="1" className='h-10 w-10 object-cover rounded-[10px]' srcSet={optionItem?.itemSrcSet} src={optionItem.itemSrc} />
                                                                                    {optionItem.optionItemName}
                                                                                </a>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </li> : <li className='p-2'>
                                                            <a className='capitalize flex cursor-pointer items-center gap-2' target='_self' href='#'>
                                                                <div className='flex items-center gap-2'>
                                                                    <img alt={option.itemName} loading='lazy' width={48} height={48} decoding='async' data-nimg="1" className='h-10 w-10 object-cover rounded-[10px]' srcSet={option?.srcSet} src={option.src} />
                                                                    <span className='inline-block text-sm text-black uppercase leading-[14px]'>{option.itemName}</span>
                                                                </div>
                                                            </a>
                                                        </li>}
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>) :
                                    (<div key={item.id} className='group relative'>
                                        <a className='capitalize flex cursor-pointer items-center gap-2' target='_self' href='#'>
                                            <div className='flex items-center gap-2'>
                                                {item.logo ? item.logo : <img alt={item.name} loading='lazy' width={10} height={10} decoding='async' data-nimg="1" className='logo h-5 w-5 object-cover rounded-[10px]' src={item.navSrc} srcSet={item.navSrcSet} />}
                                                <span className='inline-block text-sm text-black uppercase leading-[14px]'>{item.name}</span>
                                            </div>
                                        </a>
                                    </div>)
                                }

                            </>
                        )
                    })}
                </nav>
                <div className="flex shrink-0 items-center gap-3 lg:gap-5">
                    <a className="inline-block" target="_blank" href="https://bookings.wonderla.com">
                        <div className="capitalize text-[#334DCF] bg-[#FAD600] flex h-[34px] items-center rounded-lg px-2.5 md:px-3.5" tabIndex={0}>
                            <h6 className="font-mulish !leading-[1.255] flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[-0.03em] text-blue md:text-xs">Book tickets
                                <svg width="12" height="11" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.1.04a2.119 2.119 0 0 0-.628.304C6.267.493.834 4.765.683 4.896a1.983 1.983 0 0 0-.409.504c-.253.467-.221 1.028.085 1.49.109.164.847 1.108.867 1.109.01.001.113-.074.23-.167.118-.092.264-.193.324-.225.1-.052.129-.057.31-.057.255 0 .364.044.515.209.141.153.183.271.171.487a.69.69 0 0 1-.186.46 8.735 8.735 0 0 1-.487.406c-.015.011.79 1.022.906 1.139.306.307.651.456 1.051.453.327-.003.644-.115.949-.335.162-.116 5.52-4.328 5.759-4.527.286-.237.5-.56.586-.882a1.455 1.455 0 0 0-.023-.72 1.867 1.867 0 0 0-.277-.54c-.176-.237-.781-1-.792-.999-.007 0-.102.072-.212.159-.11.088-.254.189-.32.225-.114.062-.131.065-.33.065-.189 0-.221-.006-.323-.056a.672.672 0 0 1-.357-.727c.05-.241.124-.341.434-.588l.244-.194-.391-.497C8.576.539 8.449.399 8.27.271a1.24 1.24 0 0 0-.78-.263A1.103 1.103 0 0 0 7.1.04M5.708 1.952c.101.132.17.238.16.248-.01.009-.184.148-.388.309l-.37.292-.074-.082a4.646 4.646 0 0 1-.188-.231c-.099-.129-.111-.154-.086-.177.049-.048.747-.591.758-.59.005.001.09.105.188.231m1.1 1.407c.095.12.172.227.172.238 0 .011-.172.155-.383.32l-.384.3-.178-.227a2.865 2.865 0 0 1-.177-.239c.001-.015.746-.607.765-.61.007 0 .09.097.185.218M7.927 4.78c.095.121.173.227.172.235-.001.019-.751.605-.773.604-.013-.001-.163-.185-.332-.409l-.035-.047.382-.302c.21-.165.389-.301.397-.301.008 0 .093.099.189.22m1.11 1.409c.101.125.183.233.183.238 0 .013-.737.593-.768.605-.036.014-.388-.442-.362-.469.012-.011.757-.6.762-.602.001-.001.085.102.185.228" fill="#334DCF" fill-rule="evenodd"></path>
                                </svg>
                            </h6>
                        </div>
                    </a>

                    <div
                        onClick={() => setIsOpenOffCanvas(true)}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue md:mx-2 lg:h-[17px] lg:w-[26px] lg:bg-transparent"
                        tabIndex={0}
                    >
                        <svg width="27" height="17" viewBox="0 0 27 17" xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-4 fill-yellow lg:h-[17px] lg:w-[26px] lg:fill-blue">
                            <rect x="0.32" y="0.09" width="26.33" height="3.15" rx="1.57"></rect>
                            <rect x="0.32" y="6.96" width="26.33" height="3.15" rx="1.57"></rect>
                            <rect x="0.32" y="13.84" width="26.33" height="3.15" rx="1.57"></rect>
                        </svg>
                    </div>
                    <div
                        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto bg-white w-100 dark:bg-gray-800 transform transition-transform ${isOpenOffCanvas ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className='flex justify-between items-center'>
                            <a className="inline-block" href="/">
                                <div className="inline-block capitalize -ml-4 aspect-[118/38] w-[132px] lg:w-[152px]" tabIndex={0}>
                                    <img alt="Desktop Logo" fetchPriority="high" width="118" height="38" decoding="async" data-nimg="1" srcSet='https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=128&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75 2x' className="h-full w-full aspect-[118/38] object-contain" src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75" style={{ color: "transparent" }} />
                                </div>
                            </a>
                            <button
                                style={{ borderRadius: '50%' }}
                                onClick={() => setIsOpenOffCanvas(false)}
                                className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 flex items-center justify-center text-sm w-8 h-8"
                            >
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close menu</span>
                            </button>
                        </div>
                        <ul className="mt-4">
                            {offCanvas.map((item) => (
                                <div className='py-2'>
                                    {item.isDropDown ? <li key={item.id} className={`${item.class} px-4 py-2`}>
                                        <button onClick={() => toggleOffCanvasDropdown(item.id)} className="flex w-full justify-between items-center cursor-pointer">
                                            <div className='flex items-center justify-center gap-2'>
                                                <img loading='lazy' width={1} height={1} decoding='async' data-nimg="1" src={item.src} srcSet={item.srcSet} className={item.imgClass} style={{ color: 'transparent' }} />
                                                <div className='flex flex-col'>
                                                    <h3 className="text-lg font-semibold text-start text-black">{item.name}</h3>
                                                    <p className="text-sm text-gray-500">{item.subText}</p>
                                                </div>
                                            </div>
                                            <svg className="w-2.5 h-2.5 ms-2.5 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>

                                        <ul className={`mt-2 w-full ${openOffCanvasDropdown === item.id ? 'block' : 'hidden'} ${item.isImage ? 'grid grid-cols-2 items-start  gap-4' : ''} `}>
                                            {item?.options?.map((option, idx) => (
                                                <li className='text-start text-black w-full' key={idx}>{option}</li>

                                            ))}
                                            {item?.imageOptions?.map((optoin, idx) => {
                                                return (
                                                    <li style={{border:'0.5px'}} key={idx} className='rounded-lg  shadow text-black flex items-center flex-col justify-center'>
                                                        <img loading='lazy' width={1} height={1} decoding='async' data-nimg="1" src={optoin.optionsSrc} srcSet={optoin.optionsSrcSet} className={'h-8 w-8 '} style={{ color: 'transparent', borderRadius: '50%' }} />
                                                        {optoin.name}
                                                    </li>
                                                )
                                            })

                                            }
                                        </ul>

                                    </li> :

                                        <li key={item.id} className={`${item.class} px-4 py-2`}>
                                            <div className="flex justify-between items-center cursor-pointer">
                                                <div className='flex items-center gap-2 justify-center'>
                                                    <img loading='lazy' width={1} height={1} decoding='async' data-nimg="1" src={item.src} srcSet={item.srcSet} className={item.imgClass} style={{ color: 'transparent' }} />
                                                    <div className='flex flex-col'>
                                                        <h3 className={`text-lg font-semibold text-start  ${item.isblue ? 'text-white':'text-black'}`}>{item.name}</h3>
                                                        <p className={`text-sm text-gray-500 ${item.isblue ? 'text-white' : 'text-gray-500'}`}>{item.subText}</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </li>
                                    }

                                </div>
                            ))}
                        </ul>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar