import React, { Component } from 'react';
import {
    Button,
    Modal,
    Form,
    Table,
    Carousel, Tabs, Tab
} from "react-bootstrap";
import {
    CBadge,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
} from '@coreui/react'
import './importGood.css'
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
import GroupService from "../../../services/GroupService";
import SizesService from '../../../services/SizesService';
import ImportService from "../../../services/ImportService";
class ImportGood extends Component {
    state = {
        showModal: false,

        products: {},           //state sản phẩm
        import: {},             //state cho import
        importDetails: {},      //state cho importDetail
        productSize: {},
        imageList: {},          //state cho imagelist
        listProduct: [],        //state cho listProduct
        idProductTemp: [],


        brand: [],
        category: [],
        listImage: [],
        group: [],
        editBrand: '',
        editCategory: '',
        editGroup: '',
        edit: false, // biến đánh dấu edit hay new
        updateDaily: '', /// biến dùng để cập nhật state realtime
        tempImage: '',
        realTime: '',
        typeSize: [
            {
                id: 1,
                name: "US"
            },
            {
                id: 1,
                name: "UK"
            },
            {
                id: 1,
                name: "VN"
            },
        ],
        stateID: '',
        listImageToApi: [], ///List ảnh để đưa xuống backend xử lý
        showModalViewImage: false,    //Biến hiển thị modal ảnh
        showModalViewSizeProduct: false,      //biến hiển thị modal size
        getSizeBySizeType: [],
        sizes: [],
        sizeID: {},        //lưu size id
        avatarProduct: '',
        avatarProductSaveAPI: [],
        message: false,
        listImageProductById: [],
        //state dùng để lưu các giá trị xử lý trong size modal
        stateOnSizeModal: [],
        stateProductOnSizeModal: '',

        //state Publisher Name
        statePublisherName: [],
    };
    componentDidMount() {
        this.loadData();
        console.log(this.props.product)
    }

    loadData = () => {
        ProductService.listProduct().then((res) => {
            this.setState({ listProduct: res.data.products.sort((a, b) => a.id - b.id) });
            this.realTime();
        });
        BrandService.listBrand().then((res) => {
            this.setState({ brand: res.data.brands });
            this.realTime();
        });
        CategoryService.listCategory().then((res) => {
            this.setState({ category: res.data.categories })
            this.realTime();
        });
        GroupService.listGroup().then((res) => {
            this.setState({ group: res.data.Groups })
            this.realTime();
        })
        SizesService.listSize().then((res) => {
            this.setState({ sizes: res.data.sizes });
        });
    }
    realTime = () => {
        this.setState({ updateDaily: '1' });
    }
    InputOnChange = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
        var newProduct = { ...this.state.products, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.realTime();
        this.setState({ products: newProduct });
        this.realTime();
        console.log(this.state.products)
    }
    firstSaveImage = (idProduct) => {
        this.realTime()
        console.log(idProduct)
        console.log(this.state.listImageToApi)
        for (var i = 0; i < this.state.listImageToApi.length; i++) {
            this.saveImage(i, idProduct);
        }
    }
    saveImage = (index, idProduct) => {
        var data = new FormData();
        console.log(idProduct)
        data.append("productId", idProduct);
        data.append("imagePath", this.state.listImageToApi[index]);
        this.realTime()
        console.log(this.state.stateID)
        ProductService.createImage(data)
    }
    saveProduct = () => {
        var { products, avatarProductSaveAPI } = this.state
        var data = new FormData();
        data.append("name", products.name);
        data.append("productCode", products.productCode);
        data.append("price", products.price);
        data.append("description", products.description);
        data.append("color", products.color);
        data.append("imagePath", avatarProductSaveAPI[0]);
        data.append("brandId", products.brandId);
        data.append("categoryId", products.categoryId);
        ProductService.createProduct(data).then(res => {
            this.firstSaveImage(res.data.products.id);
            this.firstSaveSize(res.data.products.id)
        }, function (error) {
            alert("Lỗi")
        });
    }
    firstSaveSize = (idProduct) => {
        var newSize = { ...this.state.sizeID, ['productId']: idProduct } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.setState({ sizeID: newSize });
        this.realTime()
        console.log(this.state.sizeID)
        this.saveSize(this.state.sizeID);
    }
    saveSize(data) {
        this.realTime()
        ProductService.createProductSize(data);
    }
    save = () => {
        // var data = new FormData();
        // data.append("amount", this.state.products.amount);
        // data.append("brandId", this.state.products.brandId);
        // data.append("categoryId", this.state.products.categoryId);
        // data.append("groupId", this.state.products.groupId);
        // data.append("imagePath", this.state.products.imagePath);
        // data.append("description", this.state.products.description);
        // data.append("name", this.state.products.name);
        // data.append("price", this.state.products.price);
        // console.log(this.state.products.amount);

        // ProductService.createProduct(this.state.products).then(res => {
        //   this.setState({stateID : res.data.products.id});
        //   this.realTime();
        // }, function (error) {
        //   alert("Lỗi")
        // });
        var { products } = this.state
        if (products.name === undefined || products.productCode === undefined || products.price === undefined || products.description === undefined
            || products.brandId === undefined || products.color === undefined || products.categoryId === undefined) {
            alert("Vui lòng nhập đủ các ô input")
        }
        else {
            this.saveProduct();
            this.loadData();
            this.setCloseModal();
        }
    }
    setShowModal = (id) => {
        // this.setState({ products: {} });
        // this.setState({ ModalTitle: "New Instructor" });
        if (this.props.products.length <= 0) {
            var newProduct = { ...this.state.products, ['id']: 0 } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
            this.realTime();
            this.setState({ products: newProduct });
        }
        else {
            var newProduct = { ...this.state.products, ['id']: this.props.products.length } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
            this.realTime();
            this.setState({ products: newProduct });
        }
        this.findIdSizeNewCreate()
        this.setState({ showModal: true });
    }
    setShowModalEdit = (id, brand, category) => {        ///edit sản phẩm
        // this.setState({ ModalTitle: "Edit Instructor" });
        ProductService.getProduct(id).then(res => {
            this.setState({ products: res.data.product });
        });
        this.setState({ editBrand: brand });  // cập nhật brand
        this.setState({ editCategory: category });  // cập nhật category
        this.setState({ showModal: true });
        this.setState({ edit: true })
        this.realTime();      //realtime cho các state
    }
    setCloseModal = () => {
        this.setState({ showModal: false });
        this.setState({ edit: false })
        this.setState({ intermediariesMoney: '' });
        this.setState({ listImage: [] })
        this.setState({ tempImage: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg' })
    }
    getImgByIdPro = (id) => {
        ProductService.getImageByProductId(id).then(res => {
            this.setState({ listImageProductById: res.data.productImage })
        }, function (error) {
            alert("Lỗi")
        });
    }

    //Xử lý modal quản lý size cảu sản phẩm tương ứng
    setShowModalViewSizeProduct = (id) => {
        this.setState({ showModalViewSizeProduct: true }) //set để mở modal
        var newStateOnSizeModal = { ...this.state.stateOnSizeModal, ['productId']: id } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.realTime();
        this.setState({ stateOnSizeModal: newStateOnSizeModal });
        console.log(this.state.stateOnSizeModal)
        console.log(this.props.product)
        console.log(this.state.sizes)
        ProductService.getProduct(id).then(res => {
            this.setState({ stateProductOnSizeModal: res.data.product })
        }, function (error) {
            alert("Lỗi không lấy được sản phẩm")
        })

    }

    setCloseModalViewSizeProduct = () => {
        this.setState({ showModalViewSizeProduct: false })
    }

    InputOnChangeCategory = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
        // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        console.log(value)
        this.state.category.map((category) => {
            if (parseInt(category.id) === parseInt(value)) {
                const newProduct = { ...this.state.products, [name]: category.id, ['groupId']: category.Group.id }
                this.setState({ products: newProduct });
            }
        })
        console.log(this.state.products)
    }
    InputOnChangeBrand = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
        // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        {
            this.state.brand.map((brand) => {
                if (brand.name === value) {
                    const newProduct = { ...this.state.products, [name]: brand.id }
                    this.setState({ products: newProduct });
                }
            })
        }
        console.log(this.state.products)
    }

    InputOnChangeGroup = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
        // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        {
            this.state.group.map((group) => {
                if (group.name === value) {
                    const newProduct = { ...this.state.products, [name]: group.id }
                    this.setState({ products: newProduct });
                }
            })
        }
        console.log(this.state.products)
    }
    InputOnChangeTypeSize = (event) => {
        this.setState({ getSizeBySizeType: [] })
        const { value } = event.target;

        SizesService.getSizeByTypeSize(value).then((res) => {
            this.setState({ getSizeBySizeType: res.data.listSize.sort((a, b) => a.sizeName - b.sizeName) })
        });
        console.log(this.state.getSizeBySizeType)
    }
    InputOnChangeSize = (event) => {
        const { name, value } = event.target;
        var newSize = { ...this.state.sizeID, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.realTime();
        this.setState({ sizeID: newSize });
        this.realTime();
        console.log(this.state.sizeID)
    }
    //xử lý các state trong Size Modal
    InputOnChangeSizeModal = (event) => {
        const { name, value } = event.target;
        var newStateOnSizeModal = { ...this.state.stateOnSizeModal, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.realTime();
        this.setState({ stateOnSizeModal: newStateOnSizeModal });


        this.realTime();
        console.log(this.state.stateOnSizeModal)
        console.log(this.state.stateProductOnSizeModal)

    }
    //Lưu size của sản phẩm xuống db 
    loadDataOnSizeModal(id) {
        ProductService.getProduct(id).then(res => {
            this.setState({ stateProductOnSizeModal: res.data.product })
        }, function (error) {
            alert("Lỗi không lấy được sản phẩm")
        })
    }
    saveOnSizeModal = () => {
        // ProductService.createProductSize(this.state.stateOnSizeModal).then(res => {
        // }, function (error) {
        //     alert("Lỗi")
        // })
        // // alert("Thêm thành công")
        // this.loadDataOnSizeModal(this.state.stateOnSizeModal.productId)
        this.props.onAddSizeToImport(this.state.stateOnSizeModal);
    }
    dateCurrent = () => {
        var date = new Date(Date.now()).toLocaleDateString("vi-Vi")
        return date;
    }
    //Xử lý lưu vào redux
    saveToRedux = () => {
        this.props.onAddProductToImport(this.state.products);
        this.setCloseModal();
    }

    deleteProduct = (id) => {
        this.props.onDeleteProductInImport(id);
    }
    deleteProductSize = (indexProductSize) => {
        this.props.onDeleteProductSizeInImport(indexProductSize);
    }
    processFinalTotalProduct = (indexProduct) => {
        var { productSizes } = this.props
        var total = 0;
        for (var i = 0; i < productSizes.length; i++) {
            if (productSizes[i].productSize.productId === indexProduct) {
                total = total + parseInt(productSizes[i].productSize.productCount)
            }
        }
        return total;
    }
    processBrandIdToName = (idBrand) => {
        var brandName;
        for (var i = 0; i < this.state.brand.length; i++) {
            if (idBrand === this.state.brand[i].id) {
                brandName = this.state.brand[i].name;
                break
            }
        }
        return brandName;
    }
    processTotalAllProductInvoiceImport = () => {
        var { products } = this.props
        var resultTotal = 0;
        for (var i = 0; i < products.length; i++) {
            console.log(products[i].product.importPrice)
            console.log(this.processFinalTotalProduct(i))
            resultTotal += parseFloat(products[i].product.importPrice) * parseFloat(this.processFinalTotalProduct(products[i].product.id));
        }
        return resultTotal;
    }
    randomStringCodeImport = () => {
        var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';  ///
        var randomString = '';
        var len = 16;
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }

    processImport = async () => {
        var { products } = this.props;
        if (this.state.statePublisherName.publisherName === undefined) {
            alert('Vui lòng nhập nhà cung cấp');
        }
        else {
            var dataImport = new FormData();
            console.log(this.randomStringCodeImport())
            // console.log(products[0].product.publisherName)
            var importCode = this.randomStringCodeImport()
            // var publisherName = product[0].product.publisherName
            dataImport.append("importCode", importCode);
            dataImport.append("publisherName", this.state.statePublisherName.publisherName);
            // dataImport.append("publisherName", publisherName);
            console.log(dataImport)
            await ImportService.createImport(dataImport).then(res => {
                console.log(res.data.createImport.id);
                this.saveProductInImportDetail(res.data.createImport.id);
            })
            this.deleteImportGoodFromLocalStorage()

        }
    }
    async deleteImportGoodFromLocalStorage() {
        await alert("Lưu hóa đơn thành công");
        await localStorage.removeItem("STATE_IMPORT");
        await this.loadData();
    }
    findIdProductNewCreate = () => {        // hàm tìm id của product mới thêm vào
        var idProduct;
        if (this.state.listProduct.length <= 0) {
            idProduct = 0;
        }
        else {
            idProduct = this.state.listProduct[parseInt(this.state.listProduct.length) - 1].id + 1      //tìm id tiếp theo
        }
        return idProduct
    }
    findIdSizeNewCreate = () => {
        var idProduct, idProductSize;
        console.log(this.state.listProduct)
        if (this.state.listProduct.length <= 0) {
            idProduct = 0;
        }
        else {
            idProduct = this.state.listProduct[parseInt(this.state.listProduct.length) - 1].id
            var index = this.state.listProduct[this.state.listProduct.length - 1].ProductSizes.length - 1
            if (this.state.listProduct[this.state.listProduct.length - 1].ProductSizes.length <= 0) {
                idProductSize = 0;
            }
            else {
                idProductSize = this.state.listProduct[this.state.listProduct.length - 1].ProductSizes[index].id + 1    //tìm id tiếp theo
            }
            //tìm id tiếp theo
        }
        console.log(idProductSize)
        return idProductSize
    }
    async saveProductInImportDetail(idImport) {
        var { products, productSizes } = this.props;
        for (var i = 0; i < products.length; i++) {
            var data = new FormData();
            data.append("name", products[i].product.name);
            data.append("productCode", products[i].product.productCode);
            data.append("color", products[i].product.color);
            data.append("brandId", products[i].product.brandId);
            data.append("categoryId", products[i].product.categoryId);
            data.append("importPrice", products[i].product.importPrice);
            console.log(products[i].product.importPrice)
            data.append("sellPrice", products[i].product.sellPrice);
            console.log(products[i].product.sellPrice)
            data.append("description", products[i].product.description);
            await ProductService.createProduct(data).then(res => {
                // this.saveProductSize(res.data.products.id, idImport, res.data.products.importPrice)
                //var post = { id : res.data.products.id}
                // this.setState({idProductTemp: res.data.products.id})
                // this.state.idProductTemp.push(res.data.products.id)
                this.firstSaveProductSize(res.data.products.id, res.data.products.importPrice, products[i].product.id, idImport)
            })
        }

    }
    async firstSaveProductSize(idPro, importPrice, idProOnState, idImport) {
        var { products, productSizes } = this.props;
        for (var j = 0; j < productSizes.length; j++) {
            if (productSizes[j].productSize.productId === idProOnState) {
                console.log(this.findIdSizeNewCreate())
                var dataProductSize = new FormData();
                // dataProductSize.append("productId", parseInt(parseInt(this.findIdProductNewCreate()) + parseInt(i)));
                dataProductSize.append("productId", idPro);
                dataProductSize.append("sizeId", productSizes[j].productSize.sizeId);
                dataProductSize.append("productCount", productSizes[j].productSize.productCount);
                // setTimeout(ProductService.createProductSize(dataProductSize),500)
                this.saveProductSize(dataProductSize, importPrice, idImport, idPro, idProOnState, productSizes[j].productSize.productCount)
            }
        }
    }
    async saveProductSize(dataProductSize, importPrice, idImport, idPro, idProOnState, productCount) {
        await ProductService.createProductSize(dataProductSize).then(res => {
            console.log(res.data.productSize.id)
            this.firstSaveImportDetail(idImport, importPrice, res.data.productSize.id, idProOnState, productCount)
        })
    }
    async firstSaveImportDetail(idImport, importPrice, productSizeId, idProOnState, productCount) {
        var { productSizes } = this.props

        var dataImportDetail = new FormData();
        //dataImportDetail.append("productSizeId", parseInt(parseInt(this.findIdSizeNewCreate()) + parseInt(i)));
        dataImportDetail.append("productSizeId", productSizeId);
        dataImportDetail.append("importId", idImport);
        dataImportDetail.append("importPrice", importPrice);
        dataImportDetail.append("amount", productCount);
        await this.saveImportDetail(dataImportDetail);

    }
    async saveImportDetail(dataImportDetail) {
        await ImportService.createImportDetails(dataImportDetail)
    }
    // InputOnChangeImport = (event) =>{
    //     const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
    //     var newProduct = { ...this.state.import, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
    //     this.realTime();
    //     this.setState({ products: newProduct });
    //     this.realTime();
    // }
    InputOnChangePublisherName = (event) => {
        const { name, value } = event.target; // đặt biến để phân rã các thuộc tính trong iout ra
        var newPublisherName = { ...this.state.statePublisherName, [name]: value } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        this.realTime();
        this.setState({ statePublisherName: newPublisherName });
        this.realTime();
        console.log(this.state.statePublisherName)
    }
    render() {
        var { products } = this.state;
        const formatterNum = Intl.NumberFormat('en');
        var reader = new FileReader();
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        })

        return (
            <div>
                {/* <div className="row">
                <div className="col-sm-10"></div> */}

                {/* Modal basic */}
                <>
                    <Modal
                        show={this.state.showModal}
                        onHide={this.setCloseModal}
                        keyboard={false}
                        backdrop="static"
                        dialogClassName="modalMaxWidth"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title " dialogClassName="textCenterModalTitle">
                                Thêm thông tin sản phẩm
                                {this.state.message === true ? <div>Vui lòng nhập đủ các ô input</div> : null}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <div className="row">
                                    <div className="col-6">
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Mã sản phẩm</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="productCode"
                                                placeholder="Mã sản phẩm"
                                                onChange={this.InputOnChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Tên sản phẩm</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Tên sản phẩm"
                                                onChange={this.InputOnChange}
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Màu sắc</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="color"
                                                placeholder="Màu sắc của giày"
                                                onChange={this.InputOnChange}
                                            />
                                        </Form.Group>
                                        {/* <Form.Group controlId="formBasicName">
                                            <Form.Label>Tên nhà cung cấp</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="publisherName"
                                                placeholder="Nhà cung cấp"
                                                onChange={this.InputOnChange}
                                            />
                                        </Form.Group> */}
                                        <Form.Group controlId="ControlSelect">
                                            <Form.Label>Thương hiệu</Form.Label>
                                            <Form.Control
                                                required
                                                as="select"
                                                name="brandId"
                                                onChange={this.InputOnChangeBrand}
                                            >
                                                <option>{products.Brand === undefined ? 'Choose.....' : products.Brand.name}</option>
                                                {this.state.brand.map((brand, idx) => {
                                                    return (
                                                        <option
                                                            key={idx}
                                                            value={brand.name}>
                                                            {brand.name}
                                                        </option>
                                                    )
                                                })}
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="ControlSelect">
                                            <Form.Label>Danh mục</Form.Label>
                                            <Form.Control
                                                required
                                                as="select"
                                                name="categoryId"
                                                onChange={this.InputOnChangeCategory}
                                            // value={products.Category || ''}
                                            >
                                                <option>{products.Category === undefined ? 'Choose.....' : products.Category.name}</option>
                                                {this.state.category.map((category, idx) => {
                                                    return (
                                                        <option
                                                            key={idx}
                                                            value={category.id}>
                                                            {category.name} ({category.Group.name})
                                                        </option>
                                                    )
                                                })}
                                            </Form.Control>
                                        </Form.Group>
                                        {/* <Form>
                                            <div>Ảnh đại diện của sản phẩm</div>
                                            <div className="borderImgSizeIcon1">
                                                <label for="upload-avatar-photo" className="iconOnImgBorder1"><i className="fas fa-image fa-3x"></i></label>
                                                <Form.Control
                                                    id="upload-avatar-photo"
                                                    type="file"
                                                    accept=".png, .jpg, .svg, .jfif"
                                                    onChange={this.imageAvatarProductHandler}
                                                    name="imagePath"
                                                    oninput="pic.src=window.URL.createObjectURL(this.files[0])"
                                                />
                                            </div>
                                            {this.state.avatarProduct === '' ? null :
                                                <img className="borderImgSize1" src={this.state.avatarProduct} />
                                            }
                                        </Form> */}

                                    </div>
                                    <div className="col-6">
                                        {/* <Form>
                                            <div>Hình ảnh Thumbnail</div>
                                            <div className="borderImgSizeIcon1">
                                                <label for="upload-photo" className="iconOnImgBorder1"><i className="fas fa-image fa-3x"></i></label>
                                                <Form.Control
                                                    id="upload-photo"
                                                    type="file"
                                                    accept=".png, .jpg, .svg, .jfif"
                                                    onChange={this.imageHandler}
                                                    name="imagePath"
                                                    oninput="pic.src=window.URL.createObjectURL(this.files[0])"
                                                />
                                            </div>
                                            

                                            {this.state.edit ? null : this.state.listImage.map((image, idx) => {
                                                return (
                                                    <img key={idx} className="borderImgSize1" src={image} />
                                                );
                                            })}
                                        </Form> */}
                                        <Form.Group controlId="formBasicQuantity">
                                            <Form.Label>Giá nhập</Form.Label>
                                            <Form.Control
                                                required
                                                type="number"
                                                name="importPrice"
                                                placeholder="Giá nhập"
                                                onChange={this.InputOnChange}

                                            />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicQuantity">
                                            <Form.Label>Giá bán</Form.Label>
                                            <Form.Control
                                                required
                                                type="number"
                                                name="sellPrice"
                                                placeholder="Giá bán"
                                                onChange={this.InputOnChange}

                                            />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Mô tả sản phẩm</Form.Label>
                                            <Form.Control
                                                required
                                                as="textarea"
                                                type="text"
                                                name="description"
                                                rows={8}
                                                onChange={this.InputOnChange}

                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                                <Button variant="primary btnSave" onClick={this.saveToRedux}>
                                    Thêm
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </>
                {/* Modal Size */}
                <>
                    <Modal
                        show={this.state.showModalViewSizeProduct}
                        onHide={this.setCloseModalViewSizeProduct}
                        keyboard={false}
                        backdrop="static"
                        dialogClassName="modalSizeMaxWidth"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title " dialogClassName="textCenterModalTitle">
                                Thêm thông tin tất cả các kích thước của sản phẩm
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="row">
                                <div className="col-7">
                                    <Tabs justify defaultActiveKey="orderNotConfirm" transition={false} id="noanim-tab-example">
                                        <Tab
                                            eventKey="orderNotConfirm"
                                            title="Thêm từng kích thước một cho sản phẩm"
                                            tabClassName="">
                                            <div className="nameTitleSize">Thêm kích thước cho sản phẩm</div>
                                            <div className="container">
                                                <Form>
                                                    <Form.Group controlId="ControlSelect">
                                                        <Form.Label>Loại size</Form.Label>
                                                        <Form.Control
                                                            required
                                                            as="select"
                                                            name="typeSize"
                                                            onChange={this.InputOnChangeTypeSize}
                                                        >
                                                            <option>Choose....</option>
                                                            {this.state.typeSize.map((typeSize, idx) => {
                                                                return (
                                                                    <option
                                                                        key={idx}
                                                                        value={typeSize.name}>
                                                                        {typeSize.name}
                                                                    </option>
                                                                )
                                                            })}
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicName">
                                                        <Form.Label>Size giày</Form.Label>
                                                        <Form.Control
                                                            required
                                                            as="select"
                                                            name="sizeId"
                                                            onChange={this.InputOnChangeSizeModal}
                                                        >
                                                            <option>Choose....</option>
                                                            {this.state.getSizeBySizeType.map((size, idx) => {
                                                                return (
                                                                    <option
                                                                        key={size.id}
                                                                        value={size.id}
                                                                    >
                                                                        {size.sizeName}
                                                                    </option>
                                                                )
                                                            })}
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Số lượng</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            placeholder="Số lượng"
                                                            name="productCount"
                                                            onChange={this.InputOnChangeSizeModal} />
                                                    </Form.Group>
                                                    <Button variant="primary" onClick={this.saveOnSizeModal}>
                                                        Lưu
                                                    </Button>
                                                </Form>
                                            </div>

                                        </Tab>
                                        <Tab
                                            eventKey="orderConfirm"
                                            title="Thêm nhiều kích thước cho sản phẩm"
                                            tabClassName="">
                                            <div className="titleTable">Bảng đơn hàng đã được xác nhận</div>
                                        </Tab>
                                    </Tabs>

                                </div>
                                <div className="col-5">
                                    <div className="sizeNameTable">Kích thước của sản phẩm</div>
                                    <div className="tbl-header">
                                        <Table striped hover>
                                            <thead>
                                                <tr>
                                                    <th className="th_Sticky">Size ID</th>
                                                    <th className="th_Sticky">Số lượng</th>
                                                    <th className="th_Sticky">Hành động</th>
                                                </tr>
                                            </thead>
                                            {this.props.productSizes ?     //kiểm tra xem có tồn tại hay chưa
                                                <tbody>
                                                    {this.props.productSizes.map((ProductSizes, idx) => {
                                                        if (ProductSizes.productSize.productId === this.state.stateOnSizeModal.productId) {
                                                            for (var i = 0; i < this.state.sizes.length; i++) {
                                                                if (this.state.sizes[i].id === parseInt(ProductSizes.productSize.sizeId)) {       //điểu kiện để hiển thị têm size ra
                                                                    return (
                                                                        <tr key={idx}>
                                                                            <td>{this.state.sizes[i].sizeName}</td>
                                                                            <td>{ProductSizes.productSize.productCount}</td>
                                                                            <td><i className="fas fa-trash-alt trashIconOnModalProductSize" onClick={() => this.deleteProductSize(idx)}></i></td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            }

                                                        }
                                                        else { return }
                                                    })}
                                                </tbody> : null}
                                        </Table>
                                    </div>
                                </div>

                            </div>

                        </Modal.Body>
                    </Modal>
                </>

                <>
                    <CRow>
                        <CCol>
                            <CCard>
                                <CCardHeader>
                                    <p className="fontSizeNameTable">Hóa đơn nhập hàng</p>
                                </CCardHeader>
                                <CCardBody>
                                    <button type="button" className="btn btn-sm btnAddProduct1" onClick={() => this.setShowModal()}><p className="fas fa-plus-circle textInBtnAddProduct">   Thêm sản phẩm</p></button>
                                    <div className="tbl-header">
                                        <Table striped hover>
                                            <thead>
                                                <tr className="trBackGround">
                                                    <th className="th_Sticky">#</th>
                                                    <th className="th_Sticky">Product Code</th>
                                                    <th className="th_Sticky">Name Product</th>
                                                    <th className="th_Sticky">Color</th>
                                                    <th className="th_Sticky">Brand</th>
                                                    <th className="th_Sticky widthSlotSizeOnTable">Size</th>
                                                    <th className="th_Sticky">Price Imp</th>
                                                    <th className="th_Sticky">Price Sell</th>
                                                    <th className="th_Sticky">Quantity</th>
                                                    <th className="th_Sticky">Action</th>
                                                </tr>
                                            </thead>

                                            {/* Show danh sách các sản phẩm */}
                                            <tbody>
                                                {this.props.products.map((product, idx) => {
                                                    return (
                                                        <tr key={idx}>
                                                            <td>{idx + 1}</td>
                                                            <td>{product.product.productCode}</td>
                                                            <td>{product.product.name}</td>
                                                            <td>{product.product.color}</td>
                                                            <td>{this.processBrandIdToName(product.product.brandId)}</td>
                                                            <td>
                                                                <div className="view" onClick={() => this.setShowModalViewSizeProduct(idx)}>Thêm Size</div>
                                                                <div className="boxSize">
                                                                    {this.props.productSizes.map((ProductSizes, idxa) => {
                                                                        if (ProductSizes.productSize.productId === product.product.id) {
                                                                            for (var i = 0; i < this.state.sizes.length; i++) {
                                                                                if (this.state.sizes[i].id === parseInt(ProductSizes.productSize.sizeId)) {       //điểu kiện để hiển thị têm size ra
                                                                                    return (
                                                                                        <div className="displaySizeBox">{this.state.sizes[i].sizeName}</div>
                                                                                    )
                                                                                }
                                                                            }

                                                                        }
                                                                        else { return }
                                                                    })}

                                                                </div>
                                                            </td>
                                                            <td>{formatter.format(product.product.importPrice)}</td>
                                                            <td>{formatter.format(product.product.sellPrice)}</td>
                                                            <td>{this.processFinalTotalProduct(product.product.id)}</td>
                                                            <td>
                                                                <i className="fas fa-trash-alt trashIcon" onClick={() => this.deleteProduct(idx)}></i>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </CCardBody>
                                <CCardFooter>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="infoDateInvoice">
                                                Ngày nhập: {this.dateCurrent()}
                                            </div>

                                        </div>
                                        <div className="col-6">
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Tên nhà cung cấp</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    name="publisherName"
                                                    placeholder="Nhà cung cấp"
                                                    onChange={this.InputOnChangePublisherName}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                        </div>
                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="infoInvoice">
                                                        Tổng tiền
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="infoInvoice infoInvoiceTotal">
                                                        {formatter.format(this.processTotalAllProductInvoiceImport())}
                                                        {/* 100.000.000đ */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-9">

                                        </div>
                                        <div className="col-3">
                                            <div className="containerBtn">
                                                <Button variant="danger btnCancel">Hủy</Button>
                                                <Button variant="primary btnSave" onClick={() => this.processImport()}>Lưu hóa đơn</Button>
                                            </div>

                                        </div>
                                    </div>

                                </CCardFooter>
                            </CCard>
                        </CCol>
                    </CRow>
                </>
            </div>

        );
    }
    imageHandler = (event) => {
        // const {name} = event.target;
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.state.listImage.push(reader.result);
                this.realTime();    //Cập nhật state ngay lập tức
            }
        }
        // const newProduct = {...this.state.products, [name]: event.target.files[0] } // ... là clone tat ca thuoc tinh cua major có qua thuộc tính mới, [name] lấy cái name đè lên name của tồn tại nếu k có thì thành 1 cái field mới
        // this.setState({products: newProduct });
        // console.log(this.state.products)
        this.state.listImageToApi.push(event.target.files[0])
        this.realTime();    //Cập nhật state ngay lập tức
        // this.setState({tempImage: true})s
        console.log(this.state.listImage)
        console.log(this.state.listImageToApi)
        // reader.readAsDataURL(e.target.files[0])
        reader.readAsDataURL(event.target.files[0])
    }
    ShowModalImage = (id) => {

    }
    imageAvatarProductHandler = (event) => {
        const reader1 = new FileReader()
        reader1.onload = () => {
            if (reader1.readyState === 2) {
                this.setState({ avatarProduct: reader1.result })
                this.realTime();    //Cập nhật state ngay lập tức
            }
        }
        this.state.avatarProductSaveAPI.push(event.target.files[0])
        this.realTime();    //Cập nhật state ngay lập tức
        console.log(this.state.avatarProductSaveAPI)
        reader1.readAsDataURL(event.target.files[0])
    }
}
export default ImportGood;