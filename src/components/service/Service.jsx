import React from 'react';
import { Link } from 'react-router-dom';
import './service.scss';
import Button from '../../global/button/Button';
const Service = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="service-content">
                    <div className="service-title">
                        <h2>Our Services</h2>
                        <h2>Securing Your Digital Life</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Scelerisque consectetur velit sed magna phasellus metus. Ultricies volutpat eget sit orci eu convallis morbi.</p>
                        <div className="service-titlebox-container">
                            <div className="services">
                                <div className="service">
                                    <div className="service-image">
                                        <img src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003083.png" alt="" />
                                    </div>
                                    <h2>Network Protections</h2>
                                    <p>Ipsum duis nisl eget ut sed phasellus molestie vivamus euismod.</p>
                                    <Link>Get Info <i class="ri-arrow-right-s-line"></i></Link>
                                </div>
                                <div className="service">
                                    <div className="service-image">
                                        <img src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003083.png" alt="" />
                                    </div>
                                    <h2>Network Protections</h2>
                                    <p>Ipsum duis nisl eget ut sed phasellus molestie vivamus euismod.</p>
                                    <Link>Get Info <i class="ri-arrow-right-s-line"></i></Link>
                                </div>
                                <div className="service">
                                    <div className="service-image">
                                        <img src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003083.png" alt="" />
                                    </div>
                                    <h2>Network Protections</h2>
                                    <p>Ipsum duis nisl eget ut sed phasellus molestie vivamus euismod.</p>
                                    <Link>Get Info <i class="ri-arrow-right-s-line"></i></Link>
                                </div>
                                <div className="service">
                                    <div className="service-image">
                                        <img src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003083.png" alt="" />
                                    </div>
                                    <h2>Network Protections</h2>
                                    <p>Ipsum duis nisl eget ut sed phasellus molestie vivamus euismod.</p>
                                    <Link>Get Info <i class="ri-arrow-right-s-line"></i></Link>
                                </div>
                                <div className="service">
                                    <div className="service-image">
                                        <img src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003083.png" alt="" />
                                    </div>
                                    <h2>Network Protections</h2>
                                    <p>Ipsum duis nisl eget ut sed phasellus molestie vivamus euismod.</p>
                                    <Link>Get Info <i class="ri-arrow-right-s-line"></i></Link>
                                </div>
                                <div className="service">
                                    <div className="service-image">
                                        <img src="https://template-kit.evonicmedia.com/layout60/wp-content/uploads/2024/01/Group-1000003083.png" alt="" />
                                    </div>
                                    <h2>Network Protections</h2>
                                    <p>Ipsum duis nisl eget ut sed phasellus molestie vivamus euismod.</p>
                                    <Link>Get Info <i class="ri-arrow-right-s-line"></i></Link>
                                </div>

                            </div>
                        </div>
                        <div className="allservice-btn">
                        <Button  text="View All Services"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;