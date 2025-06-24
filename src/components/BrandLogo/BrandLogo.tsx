import { pathConstants } from "@/routes/pathContants";
import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
    return (
        <Link
            href={pathConstants.HOME.path}
            className="flex items-center gap-0.75">
            <Image src={"/logo.png"} width={40} height={40} alt="icon" />
            <span className="font-medium text-1.25 text-primary-900">Snap</span>
        </Link>
    );
};

export default BrandLogo;
