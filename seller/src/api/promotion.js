// 统一请求路径前缀在libs/axios.js中修改
import { getRequest, postRequest, postRequestWithNoForm, putRequest, deleteRequest, importRequest, uploadFileRequest } from '@/libs/axios';


// 获取拼团列表
export const getPintuanList = (params) => {
    return getRequest('/promotion/pintuan', params)
}
// 新建 拼团
export const savePintuan = (params) => {
    return postRequest('/promotion/pintuan', params, { 'Content-type': 'application/json' })
}
// 编辑 拼团
export const editPintuan = (params) => {
    return putRequest('/promotion/pintuan', params, { 'Content-type': 'application/json' })
}
// 手动开启拼团活动
export const editPintuanStatus = (pintuanId, params) => {
    return putRequest(`/promotion/pintuan/status/${pintuanId}`, params)
}

// 删除拼团活动
export const deletePintuan = (pintuanId) => {
    return deleteRequest(`/promotion/pintuan/${pintuanId}`)
}

// 根据id获取拼团信息
export const getPintuanDetail = (id) => {
    return getRequest(`/promotion/pintuan/${id}`)
}

// 获取拼团商品列表
export const getPintuanGoodsList = (params) => {
    return getRequest(`/promotion/pintuan/goods/${params.pintuanId}`, params)
}

// 新增优惠券
export const saveShopCoupon = (params) => {
    return postRequest('/promotion/coupon', params, { 'Content-type': 'application/json' })
}

// 修改优惠券
export const editShopCoupon = (params) => {
    return putRequest('/promotion/coupon', params, { 'Content-type': 'application/json' })
}

// 获取优惠券列表
export const getShopCouponList = (params) => {
    return getRequest('/promotion/coupon', params)
}

//  更新优惠券状态
export const updateCouponStatus = (params) => {
    return putRequest(`/promotion/coupon/status`, params)
}

//  作废优惠券
export const deleteShopCoupon = (ids) => {
    return deleteRequest(`/promotion/coupon/${ids}`)
}
//  上架优惠券
export const upShopCoupon = (ids, params) => {
    return postRequest(`/promotion/coupon/up/${ids}`, params)
}
//  获取单个优惠券
export const getShopCoupon = (id) => {
    return getRequest(`/promotion/coupon/${id}`)
}

// 获取优惠券领取详情
export const getMemberReceiveCouponList = (id) => {
    return getRequest(`/promotion/memberCoupon/getByPage/${id}`)
}
//  作废会员优惠券
export const deleteMemberReceiveCoupon = (ids, params) => {
    return deleteRequest(`/promotion/memberCoupon/delByIds/${ids}`, params)
}

// 限时秒杀活动列表
export const seckillList = (params) => {
    return getRequest(`/promotion/seckill`, params)
}

// 限时秒杀活动商品
export const seckillGoodsList = (params) => {
    return getRequest(`/promotion/seckill/apply`, params)
}

// 添加限时抢购 商品
export const setSeckillGoods = (params) => {
    return postRequest(`/promotion/seckill/apply/${params.seckillId}`, params.applyVos, { 'Content-type': 'application/json' })
}

// 添加限时抢购 商品
export const removeSeckillGoods = (seckillId, ids) => {
    return deleteRequest(`/promotion/seckill/apply/${seckillId}/${ids}`)
}

// 限时秒杀活动详情
export const seckillDetail = (seckillId) => {
    return getRequest(`/promotion/seckill/${seckillId}`)
}
// 删除秒杀商品
export const delSeckillGoods = params => {
    return deleteRequest(`/promotion/seckill/apply/${params.seckillId}/${params.id}`);
};
// 满减满赠活动列表
export const getFullDiscountList = (params) => {
    return getRequest(`/promotion/fullDiscount`, params)
}

// 新增满减活动
export const newFullDiscount = (params) => {
    return postRequest(`/promotion/fullDiscount`, params, { 'Content-type': 'application/json' })
}

// 编辑满减活动
export const editFullDiscount = (params) => {
    return putRequest(`/promotion/fullDiscount`, params, { 'Content-type': 'application/json' })
}

// 通过id获取满减活动
export const getFullDiscountById = (id) => {
    return getRequest(`/promotion/fullDiscount/${id}`)
}

// 删除满减活动
export const delFullDiscount = (id) => {
    return deleteRequest(`/promotion/fullDiscount/${id}`)
}
// 开启、关闭满减活动
export const updateFullDiscount = (id, params) => {
    return putRequest(`/promotion/fullDiscount/status/${id}`, params)
}

// 获取优惠券领取记录
export const getCouponReceiveList = (params) => {
    return getRequest("/promotion/coupon/received", params);
};
