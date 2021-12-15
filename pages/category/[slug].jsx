import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';

const ProductCategoryScreen = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const [category, setCategory] = useState(null);
    const [categoryName, setCategoryName] = useState(null);
    const collection = 'category';
    const [loading, setLoading] = useState(false);

    async function getCategory() {
        setLoading(true);
        const responseData = await ProductRepository.getProductsByCategory('air-fryers-1');
        if (responseData) {
            setCategory(responseData);
            setTimeout(
                function () {
                    setLoading(false);
                }.bind(this),
                250
            );
        }
    }

    async function getCategoryName(catSlug) {
        const responseData = await ProductRepository.getCatNameBySlug(
            catSlug
        );
        if (responseData.data[0] !== undefined) {
            if(responseData.data[0].attributes !== undefined){
                setCategoryName(responseData.data[0].attributes.Name);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        }
    }

    // reset pageNumber on new slug
    useEffect(() => {
        getCategory();
        getCategoryName(slug);
    }, [slug]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/',
        },
        {
            text: categoryName ? categoryName : 'Product category',
        },
    ];

    //Views
    let productItemsViews;

    if (!loading) {
        if (category && category.length > 0) {
            productItemsViews = (
                <ProductItems
                    columns={4}
                    products={category}
                    collection={collection}
                    slug={slug}
                />
            );
        } else {
            productItemsViews = <p>No Product found</p>;
        }
    } else {
        productItemsViews = <p>Loading...</p>;
    }

    return (
        <PageContainer
            footer={<FooterDefault />}
            title={categoryName ? categoryName : 'Category'}
            boxed={true}>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <div className="ps-layout--shop ps-shop--category">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                        </div>
                        <div className="ps-layout__right">
                            <h3 className="ps-shop__heading">
                                {categoryName ? categoryName : ''}
                            </h3>
                            {productItemsViews}
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};
export default ProductCategoryScreen;
