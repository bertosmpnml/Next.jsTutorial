// static types definition example for a function parameter.
import clsx from 'clsx';


function InvoiceStatus({ status } : { status : string } /* status must be a string */){
    //clsx example
    return ( <span className = {clsx('inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
            'bg-gray 100 text-gray-500': status === 'pending',
            'bg-green-500 text-white': status == 'paid',
        },
    )}> </span>
)
}

