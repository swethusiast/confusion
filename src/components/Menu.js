import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';

const Menu = ({ dishes }) => {
    const menu = dishes.dishes.map((dish) => {
        if (dishes.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        } else if (dishes.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>{dishes.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        } else
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
            );
    });

    return (
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
                <hr />
            </div>
            {menu}
        </div>
    );
};

export default Menu;

const RenderMenuItem = ({ dish }) => {
    return (
        <Card>
            <Link to={`menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
};
