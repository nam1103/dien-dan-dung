import { Container } from "@/components/shared/container";
import { FaCanadianMapleLeaf } from "react-icons/fa";
export const Commitment = () => {
	return (
		<div className="mt-10">
			<Container
				className="bg-yellow-50 py-5"
				innerClassName="flex flex-col items-center"
			>
				<h1 className="px-10 font-semibold md:text-3xl text-xl drop-shadow-md text-yellow-500 uppercase">
					ĐỘI NGŨ SỬA CHỮA ĐIỆN NƯỚC, CHỐNG THẤM, THÔNG NGHẸT CHUYÊN NGHIỆP VÀ
					CAO CẤP, HIỆN ĐẠI NHẤT TẠI Home Services
				</h1>
				<div className="relative w-full px-10 py-3">
					<div className="border-[0.3px] max-w-[650px] mx-auto w-full border-black"></div>
					<div className="top-1/2 right-1/2 transform translate-x-5  -translate-y-1/2 absolute bg-yellow-50 px-5">
						<FaCanadianMapleLeaf className="h-5 w-5 fill-yellow-600 " />
					</div>
				</div>
				<h2 className="text-xl font-semibold drop-shadow-sm self-start px-10 mt-5">
					Uy tín, chất lượng, hiệu quả
				</h2>
				<p className="text-sm font-light px-10 mt-5 self-start">
					Chúng tôi luôn tự hào bởi đã giúp khách hàng tìm được những giá trị
					tuyệt vời nhất cho cuộc sống của mình. Đội ngũ chuyên môn am hiểu thị
					trường, am hiểu lĩnh vực chắc chắn sẽ giúp bạn đảm bảo hệ thống điện
					nước hoạt động ổn định nhất.
				</p>
				<p className="text-sm font-light px-10 self-start mt-1">
					Chúng tôi không chỉ phục vụ bạn ở những bước đầu mà là mãi mãi, cùng
					đồng hành với bạn để cuộc sống thêm trọn vẹn.
				</p>
				<p className="text-sm font-light px-10 self-start mt-1">
					Mọi dịch vụ của Home Services đều hướng tới sự chất lượng. Từ đó nhằm
					mang lại cho bạn sự tuyệt vời để giúp bạn hưởng trọn tiện nghi trong
					chính không gian của mình.
				</p>
				<p className="text-sm font-light px-10 self-start mt-1">
					Cam kết mọi chi phí cho mỗi dịch vụ đều được báo giá chuẩn xác, rõ
					ràng.
				</p>
				<p className="text-sm font-light px-10 self-start mt-1">
					Mọi công trình đều được bảo hành trọn đời để bạn yên tâm sử dụng.
				</p>
			</Container>
		</div>
	);
};
