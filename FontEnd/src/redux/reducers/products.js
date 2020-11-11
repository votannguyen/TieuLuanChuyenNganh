import * as Types from '../constants/ActionType';
var initialState = [
    {
        id : 1,
        code: 'UEDFPOH9Y',
        name : "Biti's Hunter Layered Upper",
        image: 'https://product.hstatic.net/1000230642/product/02800den__2__de8f6da25a2049b2be1cfc583326bc2f_1024x1024.jpg',
        description : 'Sản phẩm do Bitis sản xuất',
        price: 899000,
        inventory : 100,
        color: 'ĐEN',
        brand: "Biti's",
        group: 'Thời trang'
    },
    {
        id : 2,
        code: 'SHSNYMFQK',
        name : 'VANS CLASSIC OLD SKOOL NAVY/WHITE',
        image: 'https://bizweb.dktcdn.net/100/140/774/products/vans-classic-old-skool-navy-white-vn000d3hnvy1-1.png?v=1526461229607',
        description : 'Sản phẩm do Vans sản xuất',
        price: 1750000,
        inventory : 150,
        color : 'NAVI',
        brand: 'Vans',
        group: 'Thời trang'
    },
    {
        id : 3,
        code: 'C12J9E5AH',
        name : 'ADIDAS PUREBOOST DPR LTD',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/00cf481f99ee48598c76a84f00dc5073_9366/PureBOOST_DPR_LTD_Mau_xam_BB6304_01_standard.jpg',
        description : 'Sản phẩm do Adidas sản xuất',
        price: 3400000,
        inventory : 200,
        color : 'WHITE',
        brand: 'Adidas',
        group: 'Thời trang'
    },
    {
        id : 4,
        code: '0V2UPF79G',
        name : 'ADIDAS 4D RUN 1.0 PARLEY',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ea74c4d3280c4eeda6f6ab5601508eb2_9366/Giay_4D_RUN_1.0_Parley_trang_FW1229_01_standard.jpg',
        description : 'Sản phẩm do Adidas sản xuất',
        price: 5500000,
        inventory : 200,
        color : 'WHITE',
        brand: 'Adidas',
        group: 'Thời trang'
    },
    {
        id : 5,
        code: 'C5Z3BN8RQ',
        name : 'REEBOK HYDRORUSH TR',
        image: 'https://www.reebok.com.vn/media/catalog/product/cache/904d6804a1cf5e49cefbd10ffda28c58/c/n/cn4794_fsl_ecom.jpg',
        description : 'Sản phẩm do Reebok sản xuất',
        price: 2690000,
        inventory : 200,
        color : 'RED',
        brand: 'Reebok',
        group: 'Thời trang'
    },
    {
        id : 6,
        code: 'LY2TLJMP2',
        name : 'VANS CLASSIC SK8-HI BLACK/WHITE VANS CLASSIC SK8-HI BLACK/WHITE VANS CLASSIC SK8-HI BLACK/WHITE VANS ',
        image: 'https://bizweb.dktcdn.net/100/140/774/products/vans-classic-sk8-hi-black-white-vn000d5ib8c-1.png?v=1522140382387',
        description : 'Sản phẩm do Vans sản xuất',
        price: 1850000,
        inventory : 200,
        color : 'white',
        brand: 'Vans',
        group: 'Thời trang'
    },
    {
        id : 7,
        code: '01IMM8EUC',
        name : 'REEBOK LIQUIFECT LS AP',
        image: 'https://www.reebok.com.vn/media/catalog/product/cache/904d6804a1cf5e49cefbd10ffda28c58/r/e/reebok_0581_4.jpg',
        description : 'Sản phẩm do Reebok sản xuất',
        price: 2190000,
        inventory : 200,
        color : 'black/white/humble blue',
        brand: 'Reebok',
        group: 'Thời trang'
    },
    {
        id : 8,
        code: 'XTIGQ3QKP',
        name : "Biti's Hunter Street",
        image: 'https://product.hstatic.net/1000230642/product/dsmh04300xnh-2_943c5cd4e8a741928b4f39af1b4e0257_1024x1024.jpg',
        description : "Sản phẩm do Bitis's sản xuất",
        price: 699000,
        inventory : 200,
        color : 'white/blue',
        brand: "Biti's",
        group: 'Thời trang'
    }
];

const products = (state = initialState, action) => {
    var { product, id} = action
    switch(action.type){
        case Types.ON_LOAD_PRODUCT_IS_SELECT:
            if(product.length > 0){
                for(var i = 0; i < product.length;i++){
                    if(id === product.id){
                        state.push({
                            productSelect : product[i]
                        })
                        break
                    }
                }
            }
            localStorage.setItem('PRODUCT_SELECT', JSON.stringify(product));
        default : return[...state];
    }
}

export default products;