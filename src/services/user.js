import { request } from "../configs/axios";

const LoginApi = (data) => {
    return request({
        data: data,
        url: '/QuanLyNguoiDung/DangNhap',
        method: 'POST',
    });
};

export { LoginApi };