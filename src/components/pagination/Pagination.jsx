import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ totalPost, postPerPage, setCurrentPage, currentPage }) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }

    const Prev = () => {
        if (currentPage >= 2) {
            setCurrentPage(currentPage - 1);
            setStart(start - 1);
            setEnd(end - 1);
        }
    }

    const Next = () => {
        if (currentPage < totalPost / postPerPage) {
            setCurrentPage(currentPage + 1);
            setStart(start + 1);
            setEnd(end + 1);
        }
    }

    return (
        <div>
            <div className='flex flex-row justify-center items-center overflow-hidden sm:pt-0 xsm:pt-4'>
                <div className='bg-[#F1F7FF] rounded-[8px]'>
                    <button onClick={Prev} className=' bg-[#5d687a] text-white rounded-lg p-2 cursor-pointer'>
                        <MdKeyboardArrowLeft size={20} color='#ffffff' />
                    </button>
                </div>
                <div className='flex flex-row px-2'>
                    <p className='text-gray-100 text-[15px] font-bold'>{currentPage}/{postPerPage}</p>
                </div>
                <div className='bg-[#F1F7FF] rounded-[8px]'>
                    <button onClick={Next} className=' bg-[#5d687a] text-white rounded-lg p-2 cursor-pointer'>
                        <MdKeyboardArrowRight size={20}  color='#ffffff'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;