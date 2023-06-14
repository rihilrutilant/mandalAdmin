const BASE_URL = "http://localhost:5000"


const apiconst = {
    admin_login: `${BASE_URL}/api/admin/admin_login`,
    fetch_slider_imgs: `${BASE_URL}/api/slider/fetch_all_slider_imgs`,
    fetch_head_line: `${BASE_URL}/api/headline/fatch_headline`,
    edit_headline: `${BASE_URL}/api/headline/edit_headline/`,
    fatch_all_members: `${BASE_URL}/api/slider/admin/fatch_all_members`,
    create_mukhya_member: `${BASE_URL}/api/mukhya_member/create_mukhya_member`,
    fetch_all_slider_imgs: `${BASE_URL}/api/slider/fetch_all_slider_imgs`,
    edit_mukhya_member: `${BASE_URL}/api/slider/admin/edit_mukhya_member/`,
    add_slider: `${BASE_URL}/api/slider/add_slider_img`,
    remove_member: `${BASE_URL}/api/slider/remove_member/`,
}

export { apiconst, BASE_URL }