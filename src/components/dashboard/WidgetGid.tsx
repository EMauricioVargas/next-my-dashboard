'use client';

import { IoCartOutline } from "react-icons/io5";
import SimpleWidget from "./SimpleWidget";
import { useAppSelector } from "@/store";

const WidgetGrid = () => {
    const isCart = useAppSelector(state => state.counter.count);


    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget href={`dashboard/counter`} title={`${isCart}`} subTitle="Productos agregados" label="Contador" icon={<IoCartOutline className="text-blue-500" size={70}></IoCartOutline>}></SimpleWidget>
        </div>
    )
}
export default WidgetGrid