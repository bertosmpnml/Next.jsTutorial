import SideNav from '@/app/ui/dashboard/sidenav'; // sidenav ui for <app />

export default function Layout({ children } : { children: React.ReactNode }){
    return (
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <div className='w-full flex-none md:w-64'>
                <SideNav />
            </div>
            <div> {children} </div>
        </div>
    );
}

