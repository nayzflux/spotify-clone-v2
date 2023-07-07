"use client";

import {useRouter} from "next/navigation";
import Image from "next/image";
import {FaPlay} from "react-icons/fa";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem = ({image, name, href}: ListItemProps) => {
    const router = useRouter();

    const onClick = () => {
        // Add auth before push
        router.push(href);
    }

    return (
        <button className="relative group flex items-center rounded-md gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 overflow-hidden">
            <div
                className="relative min-h-[64px] min-w-[64px]"
            >
                <Image src={image} alt="Image" className="object-cover" fill/>
            </div>

            <p className="font-medium truncate py-5">
                {name}
            </p>

            <div className="asbolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md group-hover:opacity-100 hover:scale-110 right-5">
                <FaPlay className="text-black"/>
            </div>
        </button>
    )
}

export default ListItem;