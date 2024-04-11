import { Container } from "@/components/shared/container";
import { ImageModal } from "@/components/shared/image-modal";
import { FaCanadianMapleLeaf } from "react-icons/fa";
export const Commitment = () => {
	return (
		<div className="mt-10">
			<Container
				className="bg-yellow-50 py-5"
				innerClassName="grid md:grid-cols-2 grid-cols-1 px-4 gap-x-6"
			>
				<div className="w-full flex flex-col items-center">
					<h1 className="font-semibold md:text-3xl text-xl drop-shadow-md text-yellow-500 uppercase">
						ĐỘI NGŨ SỬA CHỮA NƯỚC CHUYÊN NGHIỆP VÀ CAO CẤP, HIỆN ĐẠI NHẤT TẠI
						ServiceHome
					</h1>
					<div className="relative w-full py-3">
						<div className="border-[0.3px] max-w-[650px] mx-auto w-full border-black"></div>
						<div className="top-1/2 right-1/2 transform translate-x-5  -translate-y-1/2 absolute bg-yellow-50 px-5">
							<FaCanadianMapleLeaf className="h-5 w-5 fill-yellow-600 " />
						</div>
					</div>
					<h2 className="text-xl font-semibold drop-shadow-sm self-start mt-5">
						Uy tín, chất lượng, hiệu quả
					</h2>
					<p className="text-sm font-light mt-5 self-start">
						Chúng tôi luôn tự hào bởi đã giúp khách hàng tìm được những giá trị
						tuyệt vời nhất cho cuộc sống của mình. Đội ngũ chuyên môn am hiểu
						thị trường, am hiểu lĩnh vực chắc chắn sẽ giúp bạn đảm bảo hệ thống
						điện nước hoạt động ổn định nhất.
					</p>
					<p className="text-sm font-light self-start mt-1">
						Chúng tôi không chỉ phục vụ bạn ở những bước đầu mà là mãi mãi, cùng
						đồng hành với bạn để cuộc sống thêm trọn vẹn.
					</p>
					<p className="text-sm font-light self-start mt-1">
						Mọi dịch vụ của ServiceHome đều hướng tới sự chất lượng. Từ đó nhằm
						mang lại cho bạn sự tuyệt vời để giúp bạn hưởng trọn tiện nghi trong
						chính không gian của mình.
					</p>
					<p className="text-sm font-light self-start mt-1">
						Cam kết mọi chi phí cho mỗi dịch vụ đều được báo giá chuẩn xác, rõ
						ràng.
					</p>
					<p className="text-sm font-light self-start mt-1">
						Mọi công trình đều được bảo hành trọn đời để bạn yên tâm sử dụng.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-x-1">
					<ImageModal
						src="/sua-nuoc1.png"
						className=" w-full aspect-square"
						containerClassName="h-[520px]"
					/>
					<ImageModal
						src="/sua-nuoc2.png"
						className=" w-full aspect-square"
						containerClassName="h-[520px]"
					/>
					<ImageModal
						src="/sua-nuoc3.png"
						className=" w-full aspect-square"
						containerClassName="h-[520px]"
					/>
					<ImageModal
						src="/sua-nuoc4.png"
						className=" w-full aspect-square"
						containerClassName="h-[520px]"
					/>
				</div>
			</Container>
		</div>
	);
};
