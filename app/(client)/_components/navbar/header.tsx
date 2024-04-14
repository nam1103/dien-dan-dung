import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

import { IoMdHome } from "react-icons/io";

import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import { addresses, contactInfo } from "@/constants";
import { FaPhoneAlt } from "react-icons/fa";

export const Header = () => {
	return (
		<>
			<div className="flex flex-col lg:hidden">
				<div className="md:h-[47px] h-[32px] bg-red-500 flex items-center justify-center gap-2">
					<Link href="#">
						<FaFacebook className="md:h-7 md:w-7 h-5 w-5 fill-white" />
					</Link>
					<Link href="#">
						<div className="md:h-7 md:w-7 h-5 w-5 rounded-full bg-white flex justify-center items-center">
							<FaTwitter className="md:h-5 md:w-5 h-3 w-3 fill-red-500" />
						</div>
					</Link>
					<Link href="#">
						<div className="md:h-7 md:w-7 h-5 w-5 rounded-full bg-white flex justify-center items-center">
							<FaInstagram className="md:h-5 md:w-5 h-3 w-3 fill-red-500" />
						</div>
					</Link>
					<Link href="#">
						<div className="md:h-7 md:w-7 h-5 w-5 rounded-full bg-white flex justify-center items-center">
							<FaYoutube className="md:h-5 md:w-5 h-3 w-3 fill-red-500" />
						</div>
					</Link>
				</div>
				<div className="bg-background md:h-[75px] h-[50px] flex items-center justify-between px-5">
					<MobileSidebar />
					<Link
						href="/"
						className="h-[calc(100%-10px)] aspect-[134/88] relative"
					>
						<Image fill alt="Logo" src="/logo.png" className="object-contain" />
					</Link>
				</div>
			</div>
			<div className="hidden lg:flex h-[140px] relative">
				<div className="h-full flex absolute top-0 left-0 z-10">
					<Link href="/" className="w-[240px] h-full bg-red-500 relative">
						<Image
							alt="Logo"
							fill
							src={"/logo.png"}
							className="invert brightness-0 object-contain"
						/>
					</Link>
					<div className="h-full w-[55px] triangle"></div>
				</div>
				<div className="w-full">
					<div className="bg-neutral-300 h-[55px] items-center flex justify-center relative">
						<h2 className="uppercase text-lg font-medium">
							Home Services - BTP
						</h2>
						<div className="h-full absolute right-10 flex">
							<div className="w-0 h-0 border-solid border-red small-triangle-1"></div>
							<div className="h-full bg-red-500 flex gap-x-2 px items-center px-5">
								<Link href="#">
									<FaFacebook className="h-9 w-9 fill-white" />
								</Link>
								<Link href="#">
									<div className="h-9 w-9 rounded-full bg-white flex justify-center items-center">
										<FaTwitter className="h-6 w-6 fill-red-500" />
									</div>
								</Link>
								<Link href="#">
									<div className="h-9 w-9 rounded-full bg-white flex justify-center items-center">
										<FaInstagram className="h-6 w-6 fill-red-500" />
									</div>
								</Link>
								<Link href="#">
									<div className="h-9 w-9 rounded-full bg-white flex justify-center items-center">
										<FaYoutube className="h-6 w-6 fill-red-500" />
									</div>
								</Link>
							</div>
							<div className="w-0 h-0 border-solid border-red small-triangle-2"></div>
						</div>
					</div>
					<div className="h-[calc(100%-55px)] bg-background flex items-center justify-center">
						<div className="flex gap-x-2 items-center">
							<div className="bg-red-500 rounded-full p-1">
								<IoMdHome className="h-7 w-7 fill-white" />
							</div>
							<p className="text-sm">{addresses.office}</p>
						</div>
						<div className="absolute right-5 flex items-center gap-x-5">
							<FaPhoneAlt className="fill-red-500 h-10 w-10" />
							<p className=" text-3xl text-red-500 font-semibold">
								{contactInfo.hotline.replaceAll(".", " ")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
