// const BASE_URL = "http://67.205.176.136:5000"
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
    delete_slider: `${BASE_URL}/api/slider/delete_slider_img/`,
    getAnyImages: `${BASE_URL}/api/image?filename=`,
    getMembersOfMukiya: `${BASE_URL}/api/memberdetails/getAll?mukhiyaId=`,

    getPrayojak: `${BASE_URL}/api/prayojak/get`,
    addprayojak: `${BASE_URL}/api/prayojak/create`,
    deletePrayojk: `${BASE_URL}/api/prayojak/remove/`,
    getDataShree: `${BASE_URL}/api/datashree/get`,
    addDatashree: `${BASE_URL}/api/datashree/create`,
    deleteDataShree: `${BASE_URL}/api/datashree/remove/`,
    // Advertisement
    getAdvertisementData: `${BASE_URL}/api/advertisement/get`,
    deleteAdvertisementData: `${BASE_URL}/api/advertisement/remove/`,
    createAdvertisementData: `${BASE_URL}/api/advertisement/create`,
    // Business
    getBusinessData: `${BASE_URL}/api/business/get`,
    deleteBusinessData: `${BASE_URL}/api/business/remove/`,
    // Event
    getEventData: `${BASE_URL}/api/event/get`,
    createEventData: `${BASE_URL}/api/event/add`,
    updateEventImage: `${BASE_URL}/api/event/photo`,
    deleteEventData: `${BASE_URL}/api/event/remove/`,

    getAllMotivation: `${BASE_URL}/api/motivation/get`,
    createMotivation: `${BASE_URL}/api/motivation/create`,
    remove_Motivation: `${BASE_URL}/api/motivation/remove/`,

    getNotices: `${BASE_URL}/api/suchna/get`,
    deleteNotices: `${BASE_URL}/api/suchna/delete/`,
    addNotice: `${BASE_URL}/api/suchna/create`,

    getAllNews: `${BASE_URL}/api/news/get`,
    createNews: `${BASE_URL}/api/news/create`,
    remove_News: `${BASE_URL}/api/news/delete/`,

    //Download Excel Sheet
    downloadSheet: `${BASE_URL}/api/admin/mukhiya/excel`,

    getCommityMembers: `${BASE_URL}/api/commitymember`,
    addCommityMembers: `${BASE_URL}/api/cammitymember/add`,
    deleteCommityMembers: `${BASE_URL}/api/commitymember/remove/`

}

export { apiconst, BASE_URL }