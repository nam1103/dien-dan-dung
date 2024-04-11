import { Container } from "@/components/shared/container";
import { Heart } from "lucide-react";
import Image from "next/image";

export const ReasonForChoosing = () => {
	return (
		<Container className="bg-yellow-500">
			<div className="px-7 md:px-10 lg:px-14 xl:px-20">
				<div className="relative py-10">
					<div className="border-b border-white"></div>
					<div className="w-fit text-white absolute right-1/2 translate-x-1/2 bg-yellow-500 px-5 top-1/2 -translate-y-1/2 flex items-center gap-x-3">
						<Heart className="h-6 w-6" />
						<span className="md:text-xl text-lg truncate uppercase">
							Lý do chọn ServiceHome
						</span>
					</div>
				</div>
				<div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-1 pb-10 gap-y-5 gap-x-4">
					<div className="flex flex-col items-center">
						<Image height={80} width={80} alt="" src="/service.png" />
						<h2 className="font-semibold text-xl text-white mt-2">
							Đa dạng dịch vụ
						</h2>
						<p className="text-center text-white mt-2">
							Điện dân dụng ServiceHome cung cấp đầy đủ các dịch vụ sửa chữa
							thiết yếu cho hộ gia đình, công ty…chỉ với một lần gọi.
						</p>
					</div>
					<div className="flex flex-col items-center">
						<Image height={80} width={80} alt="" src="/diploma.png" />
						<h2 className="font-semibold text-xl text-white mt-2 text-center">
							Đội ngũ thợ chuyên nghiệp
						</h2>
						<p className="text-center text-white mt-2">
							Đội ngũ thợ có bằng cấp hoặc đã qua kiểm tra tay nghề và đào tạo
							kỹ năng. Có kinh nghiệm nhiều năm. Tuân thủ quy trình chuẩn mực
						</p>
					</div>
					<div className="flex flex-col items-center">
						<Image height={80} width={80} alt="" src="/info.png" />
						<h2 className="font-semibold text-xl text-white mt-2">
							Hỗ trợ – Tư vấn 24/7
						</h2>
						<p className="text-center text-white mt-2">
							Chúng tôi hiểu rằng các sự cố hư hỏng có thể xảy ra bất cứ lúc
							nào. Vì vậy chúng tôi luôn sẵn sàng tư vấn và phục vụ 24/24h.
						</p>
					</div>

					<div className="flex flex-col items-center">
						<Image height={80} width={80} alt="" src="/connection.png" />
						<h2 className="font-semibold text-xl text-white mt-2">
							Pháp nhân rõ ràng
						</h2>
						<p className="text-center text-white mt-2">
							Chúng tôi hoạt động với pháp nhân là công ty chứ không phải là đội
							thợ tư nhân. Khách hàng có thể yên tâm về trách nhiệm và nghĩa vụ
							pháp lý .
						</p>
					</div>
					<div className="flex flex-col items-center">
						<Image height={80} width={80} alt="" src="/warranty.png" />
						<h2 className="font-semibold text-xl text-white mt-2">
							Bảo hành chu đáo
						</h2>
						<p className="text-center text-white mt-2">
							Các dịch vụ của ServiceHome cung cấp đều có thời gian bảo hành lên
							đến 12 tháng, đảm báo khách hàng an tâm và hài lòng.
						</p>
					</div>
					<div className="flex flex-col items-center">
						<Image height={80} width={80} alt="" src="/money-bag.png" />
						<h2 className="font-semibold text-xl text-white mt-2">
							Giá cả cạnh tranh
						</h2>
						<p className="text-center text-white mt-2">
							Cơ chế ghi nhận và tính giá hợp lý, minh bạch. Thợ làm việc trung
							thực, hạn chế tối đa phát sinh. Không có chi phí ẩn, chi phí gian
							lận
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};
