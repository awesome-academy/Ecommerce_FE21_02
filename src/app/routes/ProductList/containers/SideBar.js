import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getCategories } from "app/actions/categoryAction";
import { getAllProducts } from "app/actions/productAction";
import withTarget from "app/actions/withTargetAction";
import { targets } from "app/constants";
import banner from "images/product-list-page/product_banner.jpg";
import Category from "../components/Category";
import SubCategoryLink from "../components/SubCategoryLink";

class SideBar extends Component {
  componentDidMount() {
    this.props.getCategories().then(() => {
      this.props.getAllProducts(this.props.categories);
    });
  }

  renderList() {
    const { categories, activeSubCategoryId } = this.props;
    return (
      categories != null &&
      categories.map(category => {
        return (
          <Category key={category.id} name={category.name}>
            {category.subCategories.map(subCategory => {
              return (
                <SubCategoryLink
                  key={subCategory.id}
                  id={subCategory.id}
                  categoryId={category.id}
                  name={subCategory.name}
                  isActive={subCategory.id === activeSubCategoryId}
                />
              );
            })}
          </Category>
        );
      })
    );
  }
  render() {
    return (
      <div className="product-list__item product-list__side-bar">
        <div className="row">
          <div className="col-sm-5 col-md-12">
            <h2 className="heading-secondary heading-secondary--small heading-secondary--pattern-left">
              Danh mục sản phẩm
            </h2>
            {this.renderList()}
            <h2 className="heading-secondary heading-secondary--small heading-secondary--pattern-left">
              So sánh sản phẩm
            </h2>
            <p>Bạn chưa có sản phẩm nào để so sánh</p>
            <h2 className="heading-secondary heading-secondary--small heading-secondary--pattern-left">
              Tag sản phẩm
            </h2>
            <div className="tag-list">
              <a className="tag tag--active" href="#">
                Đồng hồ
              </a>
              <a className="tag" href="#">
                | Túi
              </a>
              <a className="tag" href="#">
                | Phụ kiện
              </a>
              <a className="tag" href="#">
                | Giày
              </a>
              <a className="tag" href="#">
                | Sandal
              </a>
              <a className="tag" href="#">
                | Nước hoa
              </a>
              <a className="tag" href="#">
                | Trẻ em
              </a>
              <a className="tag" href="#">
                | Thời trang nữ
              </a>
            </div>
          </div>
          <div className="col-sm-7 col-md-12">
            <img
              className="product-list__side-bar__image"
              src={banner}
              alt="banner"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const commonStore = state.common;
  const productListStore = state.productListPage;

  return {
    categories: commonStore.category.data,
    activeSubCategoryId:
      productListStore.ui.productListContainer.activeSubCategoryId
  };
};

export default connect(
  mapStateToProps,
  {
    getCategories: withTarget(getCategories, targets.PRODUCT_LIST_PAGE),
    getAllProducts: withTarget(getAllProducts, targets.PRODUCT_LIST_PAGE)
  }
)(SideBar);
