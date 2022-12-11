import React from 'react';
import RComments from '../../components/dashboard/reports/RComments';
import Rgames from '../../components/dashboard/reports/Rgames';
import Rpost from '../../components/dashboard/reports/Rpost';
import Rreview from '../../components/dashboard/reports/Rreview';

export default function DReports() {
    return (

        <>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:pl-[12%]  m-9 gap-6  mt-32 p-10 rounded-3xl border-t-4 shadow-lg border-grass  dark:bg-slate-800'>
             
                <RComments />
                <Rpost />
                <Rreview />
                <Rgames />


            </div>

        </>

    );
}
